import React from "react";
import GlobalStyles from "./GlobalStyles";
import Loader from "./components/Loader/Loading";
import AuthContext from "./AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";

const AuthApp = React.lazy(() => import("./AuthApp"));
const UnauthApp = React.lazy(() => import("./UnauthApp"));

function App() {
  const [auth, setAuth] = useLocalStorage("auth", null);

  return (
    <div className="App">
      <GlobalStyles />
      <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
        <React.Suspense fallback={<Loader />}>{auth ? <AuthApp /> : <UnauthApp />}</React.Suspense>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
