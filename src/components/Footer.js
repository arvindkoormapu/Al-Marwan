import React from "react";
import { Layout, Image, Typography, Row, Col, Space } from "antd";
const { Text, Paragraph } = Typography;
const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer className="footer">
      <Row gutter={48} style={{ padding: "78px 0px" }}>
        <Col span={6}>
          <Space direction="vertical">
            <Text className="footer-menu-link">Approach</Text>
            <Text className="footer-menu-link">Projects</Text>
            <Text className="footer-menu-link">About</Text>
            <Text className="footer-menu-link">Enquire</Text>
            <Text className="footer-menu-link">Al Marwan Group</Text>
          </Space>
        </Col>
        <Col span={6}>
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
        <Col span={6}>
          <Space direction="vertical">
            <Text className="footer-menu-header">HOURS</Text>
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
        <Col span={6}>
          <Space direction="vertical">
            <Text className="footer-menu-header">ADDRESS</Text>
            <Row>
              <Col>
                <Paragraph className="footer-text">Unit 5</Paragraph>
                <Paragraph className="footer-text">Waterfront place</Paragraph>
                <Paragraph className="footer-text">Sharjah,</Paragraph>
                <Paragraph className="footer-text">
                  United Arab Emirates
                </Paragraph>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="image-row">
        <Col className="image-col">
          <Image
            src={require("../images/almarwan_footer.png")}
            preview={false}
            className="full-width-image"
          />
        </Col>
      </Row>
      <Row
        gutter={0}
        style={{
          paddingTop: "80px",
          paddingBottom: "24px",
        }}
      >
        <Col span={12}>
          <Text className="footer-link pr">Terms and conditions</Text>
          <Text className="footer-link">Privacy policy</Text>
        </Col>
        <Col span={12} className="align-right">
          <Text className="footer-link">
            Al Marwan Developments All Rights Reserved 2024
          </Text>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterComponent;
