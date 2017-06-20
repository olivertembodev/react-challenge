import { useContext } from "react";
import { useMutation, MutationResult, MutateFunction, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useHistory, useLocation } from "react-router-dom";

import AuthContext from "./../AuthContext";
import api from ".";

// For future use
// const logoutUser = () => api.get("/logout");

// export const useLogout = (): [
//   MutateFunction<AxiosResponse, AxiosError, undefined>,
//   MutationResult<AxiosResponse, AxiosError>
// ] => {
//   const { setAuth } = useContext(AuthContext);

//   const [logout, info] = useMutation(logoutUser, {
//     onSuccess: (res: AxiosResponse) => {
//       setAuth(null);
//       delete api.defaults.headers.common["Authorization"];
//     },
//     onError: (err: AxiosError) => {
//       // TODO: Better error display
//       alert("Oops");
//     },
//   });

//   return [logout, info];
// };

export const useLogout = (): (() => void) => {
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(null);
    delete api.defaults.headers.common["Authorization"];
  };

  return logout;
};

interface loginBody {
  email: string;
  password: string;
}

const loginUser = (body: loginBody) => api.post("/login", body);

export const useLogin = (): [
  MutateFunction<AxiosResponse, AxiosError, loginBody>,
  MutationResult<AxiosResponse, AxiosError>
] => {
  const { setAuth } = useContext(AuthContext);

  const [login, info] = useMutation(loginUser, {
    onSuccess: (res: AxiosResponse) => {
      setAuth(res.data);
      api.defaults.headers.common["Authorization"] = res.data.token;
    },
    onError: ({ response }: AxiosError) => {
      // TODO: Better error display
      if (response?.status === 401) {
        alert("Incorrect Username or password");
      } else {
        alert("Interval server error");
      }
    },
  });

  return [login, info];
};

interface signupBody {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  role: string;
  token: string;
}

const signupUser = (body: signupBody) => api.post("/user", body);

export const useSignup = (): [
  MutateFunction<AxiosResponse, AxiosError, signupBody>,
  MutationResult<AxiosResponse, AxiosError>
] => {
  const history = useHistory();

  const [signup, info] = useMutation(signupUser, {
    onSuccess: (res: AxiosResponse) => {
      alert("Signed Up");
      history.push("/login");
    },
    onError: (err: AxiosError) => {
      // TODO: Better error display
      alert("Oops");
    },
  });

  return [signup, info];
};

const getInvitation = (token: string) => api.get(token);

export const useInvitation = (): AxiosResponse | undefined => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const invitationToken = params.get("token")?.toString();

  const {data} = useQuery(`invitation/${invitationToken}`, getInvitation, {
    onSuccess: (res: AxiosResponse) => {
    },
    onError: (err: AxiosError) => {
      // TODO: Better error display
      alert("Oops");
    },
  });
  return data
};