import React, { useState } from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";
import Navigation from "./Navigation";
import { useLocation } from 'react-router-dom';

const { Content } = Layout;

const MainLayout = ({ component: Component }) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const location = useLocation();

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const getHeaderColour = () => {
    const path = location.pathname;
    if (path === '/about' || path === '/contact') {
      return 'dark';
    } else if (path === '/' || path.match(/^\/project\/.*$/)) {
      return 'light';
    } else {
      return 'dark'; 
    }
  };

  return (
    <div>
      {showNavigation ? (
        <Navigation toggleNavigation={toggleNavigation}/>
      ) : (
        <Content>
          <HeaderComponent toggleNavigation={toggleNavigation} colour={getHeaderColour()}/>
          <Component />
        </Content>
      )}
    </div>
  );
};

export default MainLayout;
