import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));

const UnauthApp = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/" exact children={<LoginPage />} /> */}
        <Redirect from="/" to="/login" exact />
        <Redirect from="/homepage" to="/login" exact />
        <Redirect from="/coursespage" to="/login" exact />
        <Route path="/login" exact children={<LoginPage />} />
        <Route path="/register" exact children={<SignUpPage />} />
      </Switch>
    </div>
  );
};

export default UnauthApp;
