import React from "react";
import HeaderS from "./HeaderS/index";
import HeaderT from "./HeaderT/index";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const Header = ["/teacher", "/list", "/over"].includes(location.pathname);

  return <>{Header ? <HeaderT /> : <HeaderS />}</>;
};

export default Index;
