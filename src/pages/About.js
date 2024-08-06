import React from "react";
import { Image, Typography, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterComponent from "../components/Footer";

const { Text, Title, Paragraph } = Typography;

function About() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <>
      <Row gutter={0} style={{ marginTop: "70px" }}>
        <Col span={isMobile ? 24 : 12}>
          <div
            className={isMobile ? "text-content-mobile" : "text-content"}
            style={{
              margin: isMobile ? "20px" : "0",
            }}
          >
            <Text className={`text-color-dark h1`} style={{ display: "block" }}>
              About
            </Text>
            <Text className={`text-color-dark h3`}>Intuitive living</Text>
            <Paragraph
              className={`text-color-dark paragraph_style`}
              style={{
                marginTop: "35px",
              }}
            >
              Since its inception in 1978 our company draws from a long history
              of supporting the public sector, from establishing the largest
              construction equipment fleet, expanding to roads and
              infrastructure constantly refining as we go.
            </Paragraph>
            <Paragraph className={`text-color-dark paragraph_style`}>
              Our next natural path is to evolve our developments in real estate
              to a completely new flagship model. A design first philosophy of
              insights to solutions enabling long term investment growth
              directly to our clients.
            </Paragraph>
            <Text className={`text-color-dark about-button tiny-label`}>
              Visit ALMarwan group
            </Text>
          </div>
        </Col>
        {!isMobile && (
          <Col
            span={isMobile ? 24 : 12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <Image
              src={require("../images/about.png")}
              preview={false}
              style={{
                width: "100%",
                height: isMobile ? "auto" : "100%",
                objectFit: "cover",
              }}
            />
          </Col>
        )}
      </Row>
      <FooterComponent />
    </>
  );
}

export default About;
