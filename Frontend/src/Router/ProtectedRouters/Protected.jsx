import React from "react";
import { Navigate } from "react-router";
import pagePath from "../pagePath";

function Protected({ children, role }) {

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  // if not logged in
  if (!loggedUser) {
    return <Navigate to={pagePath.LOGIN} />;
  }

  // role check
  if (role && loggedUser.role !== role) {
    return <Navigate to={pagePath.LOGIN} />;
  }

  return children;
}

export default Protected;