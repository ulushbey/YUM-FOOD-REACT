import AuthContext from "context/authContext";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedPage = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      navigate(`/auth/signin?redirect=${location.pathname.slice(1)}`);
    }
  }, [location]);
  return <>{children}</>;
};

export default ProtectedPage;
