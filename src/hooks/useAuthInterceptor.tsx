import createAuthRefreshInterceptor from "axios-auth-refresh";
import api from "../api";


export const useAuthInterceptor = () => {
  // const { setAuth } = useContext(AuthContext);
  // const logout = useLogout();

  const refreshAuthLogic = () =>
    api
      .get("/token-refresh")
      .then((res) => {
        console.log(res);
        // setAuth(res.data);
        // api.defaults.headers.common["Authorization"] = res.data.token;
        // return Promise.resolve();
      })
      .catch((err) => {
        console.log(err);
        // logout();
        // return Promise.reject();
      });

  createAuthRefreshInterceptor(api, refreshAuthLogic);
};
