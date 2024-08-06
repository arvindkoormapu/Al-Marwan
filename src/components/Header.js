import React from "react";
import { Layout, Image, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function HeaderComponent({ toggleNavigation, colour }) {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 80px",
      }}
    >
      <Button
        type="link"
        onClick={toggleNavigation}
        icon={
          colour === "light" ? (
            <Image
              width={51}
              src={require("../images/MenuToggle.png")}
              preview={false}
            />
          ) : (
            <Image
              width={51}
              src={require("../images/MenuToggle_dark.png")}
              preview={false}
            />
          )
        }
        style={{ color: "#fff", marginLeft: 16, zIndex: 3 }}
      />
      <div style={{ zIndex: 3 }}>
        {colour === "light" ? (
          <Image
            width={169}
            src={require("../images/LogoWhite.png")}
            preview={false}
          />
        ) : (
          <Image
            width={169}
            src={require("../images/Logo_dark.png")}
            preview={false}
          />
        )}
      </div>
      <div style={{ color: "#fff", zIndex: 3 }}>
        <Link to="/contact" style={{ color: colour === 'light' ? '#fff' : '#4D4E4E' }}>
          Enquire
        </Link>
      </div>
    </Header>
  );
}

export default HeaderComponent;
