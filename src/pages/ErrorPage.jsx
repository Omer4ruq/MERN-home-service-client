import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-5xl text-white text-center">
      <h1>opps!</h1>
      <h1>404</h1>
      <p>{error.statusText || error.message}</p>
      {/* https://event-management-assignm-8cb5c.web.app */}
    </div>
  );
};

export default ErrorPage;
