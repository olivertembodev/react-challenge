import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthInterceptor } from "./hooks/useAuthInterceptor";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CoursesPage = React.lazy(() => import("./pages/CoursesPage"));

const AuthApp = () => {
  useAuthInterceptor();

  return (
    <div>
      <Switch>
        <Redirect from="/" to="/homepage" exact />
        <Redirect from="/login" to="/homepage" exact />
        <Redirect from="/register" to="/homepage" exact />
        <Route path="/homepage" children={<HomePage />} />
        <Route path="/coursespage" exact children={<CoursesPage />} />
      </Switch>
    </div>
  );
};

export default AuthApp;
