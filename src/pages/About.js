import React from "react";
import { Image, Typography, Row, Col } from "antd";
import FooterComponent from "../components/Footer";

const { Text, Title, Paragraph } = Typography;

function About() {
  return (
    <>
      <Row gutter={0}>
        <Col span={12}>
          <div className="text-content" style={{ width: "55%" }}>
            <Title className={`text-color-dark`} style={{ fontSize: "84px" }}>
              About
            </Title>
            <Text
              className={`text-color-dark`}
              style={{ fontSize: "42px", lineHeight: "52px" }}
            >
              Intuitive living
            </Text>
            <Paragraph
              className={`text-color-dark`}
              style={{
                fontSize: "14px",
                lineHeight: "23px",
                marginTop: "35px",
              }}
            >
              Since its inception in 1978 our company draws from a long history
              of supporting the public sector, from establishing the largest
              construction equipment fleet, expanding to roads and
              infrastructure constantly refining as we go.
            </Paragraph>
            <Paragraph
              className={`text-color-dark`}
              style={{ fontSize: "14px", lineHeight: "23px" }}
            >
              Our next natural path is to evolve our developments in real estate
              to a completely new flagship model. A design first philosophy of
              insights to solutions enabling long term investment growth
              directly to our clients.
            </Paragraph>
            <Text className={`text-color-dark about-button`}>
              Visit ALMarwan group
            </Text>
          </div>
        </Col>
        <Col
          span={12}
          style={{ display: "flex", flexDirection: "column-reverse" }}
        >
          <Image src={require("../images/about.png")} preview={false} />
        </Col>
      </Row>
      <FooterComponent />
    </>
  );
}

export default About;
