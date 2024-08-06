import React from "react";
import { Layout, Image, Typography, Row, Col, Space } from "antd";
import { useMediaQuery } from "react-responsive";
const { Text, Paragraph } = Typography;
const { Footer } = Layout;

function FooterComponent() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <Footer className={isMobile ? "footer-mobile" : "footer"}>
      <Row
        gutter={isMobile ? 16 : 48}
        style={{ padding: isMobile ? "78px 0px 0px" : "78px 0px" }}
        justify="start"
      >
        <Col span={isMobile ? 24 : 6} style={{ textAlign: "left" }}>
          <Space direction="vertical" style={{padding: isMobile ? '20px 0px': '0px'}}>
            <Text className="h5 footer-menu-link">Approach</Text>
            <Text className="h5 footer-menu-link">Projects</Text>
            <Text className="h5 footer-menu-link">About</Text>
            <Text className="h5 footer-menu-link">Enquire</Text>
            <Text className="h5 footer-menu-link">Al Marwan Group</Text>
          </Space>
        </Col>
        <Col span={isMobile ? 24 : 6} style={{ textAlign: "left" }}>
          <Space direction="vertical" style={{padding: isMobile ? '20px 0px': '0px'}}>
            <Text className="tiny-label footer-menu-header">CONTACT</Text>
            <Row>
              <Col style={{ width: "28px" }}>
                <Text className="tiny-label left-text text-uppercase">T</Text>
              </Col>
              <Col>
                <Text className="tiny-label right-text text-uppercase">
                  +97 (0)37 4939 934
                </Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ width: "28px" }}>
                <Text className="tiny-label left-text text-uppercase">E</Text>
              </Col>
              <Col>
                <Text className="tiny-label right-text text-uppercase">
                  info@almarwan.dev
                </Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ width: "28px" }}>
                <Text className="tiny-label left-text text-uppercase">W</Text>
              </Col>
              <Col>
                <Text className="tiny-label right-text text-uppercase">
                  Www.almarwan.dev
                </Text>
              </Col>
            </Row>
          </Space>
        </Col>
        <Col span={isMobile ? 24 : 6} style={{ textAlign: "left" }}>
          <Space direction="vertical" style={{padding: isMobile ? '20px 0px': '0px'}}>
            <Text className="tiny-label footer-menu-header">HOURS</Text>
            <Row className="footer-row" justify={isMobile ? "center" : "start"}>
              <Col style={{ width: "76px" }}>
                <Text className="tiny-label left-text-col">Mon - Sat</Text>
              </Col>
              <Col>
                <Text className="tiny-label right-text-col">
                  09:00 - 04:00pm
                </Text>
              </Col>
            </Row>
            <Row className="footer-row" justify={isMobile ? "center" : "start"}>
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
        <Col span={isMobile ? 24 : 6} style={{ textAlign: "left" }}>
          <Space direction="vertical" style={{padding: isMobile ? '20px 0px': '0px'}}>
            <Text className="tiny-label footer-menu-header">ADDRESS</Text>
            <Row justify={isMobile ? "center" : "start"}>
              <Col>
                <Paragraph className="tiny-label footer-text">Unit 5</Paragraph>
                <Paragraph className="tiny-label footer-text">
                  Waterfront place
                </Paragraph>
                <Paragraph className=" tiny-label footer-text">
                  Sharjah,
                </Paragraph>
                <Paragraph className="tiny-label footer-text">
                  United Arab Emirates
                </Paragraph>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
      {!isMobile && (
        <Row justify="center" align="middle" className="image-row">
          <Col className="image-col">
            <Image
              src={require("../images/almarwan_footer.png")}
              preview={false}
              className="full-width-image"
              style={{ maxWidth: isMobile ? "100%" : "auto" }}
            />
          </Col>
        </Row>
      )}
      <Row
        gutter={0}
        style={{
          paddingTop: isMobile ? "30px" : "80px",
          paddingBottom: "24px",
          textAlign: "left",
        }}
      >
        <Col span={isMobile ? 24 : 12} style={{display: 'flex'}}>
          <div>
            <Text className="tiny-label footer-link">Terms and conditions</Text>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <Text className="tiny-label footer-link">Privacy policy</Text>
          </div>
        </Col>
        <Col
          span={isMobile ? 24 : 12}
          className={isMobile ? "align-center" : "align-right"}
        >
          <Text className="tiny-label footer-link">
            Al Marwan Developments All Rights Reserved 2024
          </Text>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterComponent;
