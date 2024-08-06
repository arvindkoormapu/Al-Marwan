import React from "react";
import { Typography, Row, Col, Image, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Text } = Typography;

const Navigation = ({ toggleNavigation }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <Row>
      <Col span={isMobile ? 24 : 12}>
        <div
          className="background-color-dark"
          style={{
            height: "100vh",
            paddingLeft: isMobile ? "20px" : "80px",
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
            <Text className="tiny-label text-color-light menuText text-uppercase">Menu</Text>
            <Space direction="vertical">
              <Link
                to="/projects"
                onClick={toggleNavigation}
                className="menuLink"
              >
                Projects
              </Link>
              <Link className="menuLink">Approach</Link>
              <Link to="/about" onClick={toggleNavigation} className="menuLink">
                About
              </Link>
              <Link
                to="/contact"
                onClick={toggleNavigation}
                className="menuLink"
              >
                Enquire
              </Link>
              <Link to="/" onClick={toggleNavigation} className="menuLink">
                Al Marwan Group
              </Link>
            </Space>
          </div>
          <div style={{ flexGrow: "0.8" }}></div>
          <div className="bottom-section">
            <Row gutter={16}>
              <Col span={isMobile ? 24 : 12} style={{ textAlign: "left" }}>
                <Space
                  direction="vertical"
                  style={{ padding: isMobile ? "20px 0px" : "0px" }}
                >
                  <Text className="tiny-label footer-menu-header">
                    OPENING HOURS
                  </Text>
                  <Row
                    className="footer-row"
                    justify={isMobile ? "center" : "start"}
                  >
                    <Col style={{ width: "76px" }}>
                      <Text className="tiny-label left-text-col">
                        Mon - Sat
                      </Text>
                    </Col>
                    <Col>
                      <Text className="tiny-label right-text-col">
                        09:00 - 04:00pm
                      </Text>
                    </Col>
                  </Row>
                  <Row
                    className="footer-row"
                    justify={isMobile ? "center" : "start"}
                  >
                    <Col style={{ width: "76px" }}>
                      <Text className="tiny-label left-text-col">Sun</Text>
                    </Col>
                    <Col>
                      <Text className="tiny-label right-text-col">
                        09:00 - 02:00pm
                      </Text>
                    </Col>
                  </Row>
                </Space>
              </Col>
              <Col span={isMobile ? 24 : 12} style={{ textAlign: "left" }}>
                <Space
                  direction="vertical"
                  style={{ padding: isMobile ? "20px 0px" : "0px" }}
                >
                  <Text className="tiny-label footer-menu-header">CONTACT</Text>
                  <Row>
                    <Col style={{ width: "28px" }}>
                      <Text className="tiny-label left-text text-uppercase">
                        T
                      </Text>
                    </Col>
                    <Col>
                      <Text className="tiny-label right-text text-uppercase">
                        +97 (0)37 4939 934
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ width: "28px" }}>
                      <Text className="tiny-label left-text text-uppercase">
                        E
                      </Text>
                    </Col>
                    <Col>
                      <Text className="tiny-label right-text text-uppercase">
                        info@almarwan.dev
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ width: "28px" }}>
                      <Text className="tiny-label left-text text-uppercase">
                        W
                      </Text>
                    </Col>
                    <Col>
                      <Text className="tiny-label right-text text-uppercase">
                        Www.almarwan.dev
                      </Text>
                    </Col>
                  </Row>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Col>

      {!isMobile && (
        <Col span={12}>
          <Image
            src={require("../images/living.jpeg")}
            preview={false}
            style={{ height: "100vh", objectFit: "cover" }}
          />
        </Col>
      )}
    </Row>
  );
};

export default Navigation;
