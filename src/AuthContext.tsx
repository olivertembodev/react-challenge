import React from "react";

const AuthContext = React.createContext({
  auth: null,
  setAuth<T>(value: T) {},
});

export default AuthContext;
