import React from "react";
import { Typography, Row, Col, Image, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Navigation = ({ toggleNavigation }) => {
  return (
    <Row>
      <Col span={12}>
      <div
        className="background-color-dark"
        style={{
          height: "100vh",
          paddingLeft: "80px",
          paddingTop: "40px",
          paddingBottom: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="top-section">
          <Button
            onClick={toggleNavigation}
            className="text-color-light"
            icon={<CloseOutlined style={{ fontSize: "24px" }} />}
            style={{
              border: "none",
              background: "transparent",
              boxShadow: "none",
            }}
          />
          <Text className="menuText">Menu</Text>
          <Space direction="vertical">
            <Link to="/projects" onClick={toggleNavigation} className="menuLink">Projects</Link>
            <Link className="menuLink">Approach</Link>
            <Link to="/about" onClick={toggleNavigation} className="menuLink">About</Link>
            <Link to="/contact" onClick={toggleNavigation} className="menuLink">Enquire</Link>
            <Link to="/" onClick={toggleNavigation} className="menuLink">Al Marwan Group</Link>
          </Space>
        </div>
        <div style={{ flexGrow: '0.8' }}></div>
        <div className="bottom-section">
          <Row gutter={16}>
            <Col span={12}>
              <Space direction="vertical">
                <Text className="footer-menu-header">OPENING HOURS</Text>
                <Row className="footer-row">
                  <Col>
                    <Text className="left-text-col">Mon - Sat</Text>
                  </Col>
                  <Col>
                    <Text className="right-text-col">09:00 - 04:00pm</Text>
                  </Col>
                </Row>
                <Row className="footer-row">
                  <Col>
                    <Text className="left-text-col">Sun</Text>
                  </Col>
                  <Col>
                    <Text className="right-text-col">09:00 - 02:00pm</Text>
                  </Col>
                </Row>
              </Space>
            </Col>
            <Col span={12}>
              <Space direction="vertical">
                <Text className="footer-menu-header">CONTACT</Text>
                <Row>
                  <Col>
                    <Text className="left-text">T</Text>
                  </Col>
                  <Col>
                    <Text className="right-text">+97 (0)37 4939 934</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text className="left-text">E</Text>
                  </Col>
                  <Col>
                    <Text className="right-text">info@almarwan.dev</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text className="left-text">W</Text>
                  </Col>
                  <Col>
                    <Text className="right-text">Www.almarwan.dev</Text>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </Col>

      <Col span={12}>
        <Image
          src={require("../images/living.jpeg")}
          preview={false}
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Col>
    </Row>
  );
};

export default Navigation;
