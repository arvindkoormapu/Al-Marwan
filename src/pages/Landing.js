import React from "react";
import { Button, Image, Typography, Row, Col } from "antd";
import { Element, scroller } from "react-scroll";
import FooterComponent from "../components/Footer";
import TextContent from "../components/TextContent";
import Carousel from "../components/Carousel";
import Consultation from "../components/Consultation";

const { Title, Text } = Typography;

const slides = [
  {
    id: 1,
    bgImage: require("../images/IntuitiveLiving.png"),
    content: "Intuitive living",
    elementName: "living",
  },
  {
    id: 2,
    bgImage: require("../images/Sustainable.png"),
    content: "Sustain-able",
    elementName: "approach",
  },
  {
    id: 3,
    bgImage: require("../images/LastingValues.png"),
    content: "Lasting Value",
    elementName: "lasting_value",
  },
];

function Landing() {
  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Carousel slides={slides} scrollToElement={scrollToElement} />
      <Element name="approach" className="section our-approach">
        <Row gutter={0}>
          <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
            <TextContent
              bg="light"
              color="dark"
              header="OUR APPROACH"
              title="Designed living for a global, innovative customer."
              description=" Approachability, value and life balance are created long termby the intuitive design solutions of today."
              buttonText="VIEW our projects"
            />
          </Col>
          <Col
            span={14}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="our-approach-right-content">
              <div
                style={{
                  marginRight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  width={153}
                  src={require("../images/Group 8.png")}
                  preview={false}
                  style={{ position: "relative", right: "-40px" }}
                />
                <div>
                  <Image
                    width={400}
                    height={583}
                    src={require("../images/naya.jpeg")}
                    preview={false}
                  />
                  <Text
                    style={{
                      marginTop: "24px",
                      display: "block",
                      color: "#604D46",
                    }}
                  >
                    NAYA
                  </Text>
                </div>
              </div>
              <div>
                <Image
                  width={370}
                  height={507}
                  src={require("../images/district11.jpeg")}
                  preview={false}
                />
                <Text
                  style={{
                    marginTop: "24px",
                    display: "block",
                    color: "#604D46",
                  }}
                >
                  District 11
                </Text>
              </div>
            </div>
          </Col>
        </Row>
      </Element>

      <Element name="project" className="section explore-projects">
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              paddingTop: "138px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row
              justify="center"
              align="middle"
              style={{ textAlign: "center" }}
            >
              <Col span={24}>
                <Title style={{ color: "#EAE5DD" }}>
                  Creating real estate for a greater collective experience
                </Title>
              </Col>
              <Col span={24}>
                <Button className="button-outline">Explore Projects</Button>
              </Col>
            </Row>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={391}
              src={require("../images/Layer_1.png")}
              preview={false}
              style={{}}
            />
          </div>
        </div>
      </Element>

      <Element name="living" className="section intuitive-living">
        <Row gutter={0}>
          <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
            <TextContent
              bg="light"
              color="light"
              header="INTUITIVE LIVING"
              title="Our developments are about purpose driven design"
              description={`<Paragraph style='line-height: 23px' class='text-color-light'>This is the practice of observation, listening and alignment. Creating real estate for a greater collective experience rather than conforming to external expectations.</Paragraph>`}
              horizontalContent={["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"]}
            />
          </Col>
          <Col span={12}>
            <Image
              src={require("../images/living.jpeg")}
              preview={false}
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Element>

      <Element name="lasting_value" className="section lasting_value">
        <Row gutter={0}>
          <Col span={12}>
            <Image
              src={require("../images/lasting_value.jpeg")}
              preview={false}
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextContent
              bg="dark"
              color="dark"
              header="lasting value"
              title="Intuitive Living creates a demonstrate-able value impact in three ways:"
              description={`
                    <Text class='text-color-dark text-uppercase'>retention</Text>
                    <Paragraph style='display: block; padding: 16px 0; line-height: 23px'>We create development solutions that are designed for exactly how people desire to live, work and experience.</Paragraph>
                    <Text class='text-color-dark text-uppercase'>Investment power</Text>
                    <Paragraph style='display: block; padding: 16px 0; line-height: 23px'>We create development solutions that are designed for exactly how people desire to live, work and experience.</Paragraph>
                    <Text class='text-color-dark text-uppercase'>Sales confidence</Text>
                    <Paragraph style='display: block; padding: 16px 0; line-height: 23px'>We create development solutions that are designed for exactly how people desire to live, work and experience.</Paragraph>
                  `}
              horizontalContent={["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"]}
            />
          </Col>
        </Row>
      </Element>

      <Element name="enquire" className="enquire">
        <Consultation />
      </Element>
      <FooterComponent />
    </>
  );
}

export default Landing;
