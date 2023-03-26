import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");
  console.log(typeof isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth == "null") navigate("/");
  }, []);
  if (isAuth == "true") return <>{children}</>;
};

export default Authentication;
