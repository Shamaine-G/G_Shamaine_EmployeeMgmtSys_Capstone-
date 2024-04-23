import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HideNav = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
      if(location.pathname === '/') {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
    }, [location])
  
  return (

    <div>{showNav && children}</div>
  ) 
}

export default HideNav;
