import React from "react";
import { Button, Image, Typography, Row, Col } from "antd";
import { Element, scroller } from "react-scroll";
import FooterComponent from "../components/Footer";
import TextContent from "../components/TextContent";
import Carousel from "../components/Carousel";
import Consultation from "../components/Consultation";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";

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

const images = [
  { src: require("../images/naya.jpeg"), label: "NAYA" },
  { src: require("../images/district11.jpeg"), label: "District 11" },
  { src: require("../images/naya.jpeg"), label: "NAYA" },
  { src: require("../images/district11.jpeg"), label: "District 11" },
];

function Landing() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="landing-page">
      <Carousel slides={slides} scrollToElement={scrollToElement} />
      <div className="gradient-overlay"></div>
      <Element name="approach" className="section our-approach">
        <Row gutter={0}>
          <Col
            span={isMobile ? 24 : 10}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextContent
              bg="light"
              color="dark"
              header="OUR APPROACH"
              title="Designed living for a global, innovative customer."
              description="Approachability, value and life balance are created long term by the intuitive design solutions of today."
              buttonText="VIEW our projects"
            />
          </Col>
          <Col
            span={isMobile ? 24 : 14}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            // }}
          >
            <Row
              gutter={[32, 0]}
              style={{
                marginRight: "0px !important",
                display: "flex",
                alignItems: "center",
              }}
            >
              {!isMobile && (
                <Col
                  span={4}
                  style={{
                    paddingLeft: "0px !important",
                    paddingRight: "0px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={require("../images/Group 8.png")}
                    preview={false}
                    style={{
                      position: "relative",
                      right: isMobile ? "0px" : "-10px",
                      width: "153px",
                    }}
                  />
                </Col>
              )}
              <Col
                span={isMobile ? 24 : 20}
                style={{ paddingLeft: isMobile ? '36px' : "0px", paddingRight: "0px" }}
              >
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  centeredSlides={false}
                  grabCursor={true}
                  style={{ width: "100%" }}
                  // breakpoints={{
                  //   640: {
                  //     slidesPerView: 2,
                  //     spaceBetween: 20,
                  //   },
                  //   768: {
                  //     slidesPerView: 2,
                  //     spaceBetween: 20,
                  //   },
                  //   1024: {
                  //     slidesPerView: 2,
                  //     spaceBetween: 20,
                  //   },
                  // }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        style={{
                          paddingLeft: isMobile && index % 2 === 0 ? "0px" : 0,
                          paddingRight:
                            !isMobile && index % 2 !== 0 ? "0px" : 0,
                        }}
                      >
                        <Image
                          // width={"auto"}
                          // height={isMobile ? 300 : 500}
                          src={image.src}
                          preview={false}
                          style={{ objectFit: "cover", aspectRatio: '3/4' }}
                        />
                        <Text
                          style={{
                            marginTop: "24px",
                            display: "block",
                            color: "#604D46",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                          className="tiny-label"
                        >
                          {image.label}
                        </Text>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Element>

      <Element name="project" className="section explore-projects">
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? "20px" : "80px",
          }}
        >
          <div
            style={{
              paddingTop: isMobile ? "50px" : "40px",
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
                <Title className="h4" style={{ color: "#EAE5DD" }}>
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
              flex: "0 1 50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={isMobile ? 300 : 391}
              src={require("../images/Layer_1.png")}
              preview={false}
              style={{}}
            />
          </div>
        </div>
      </Element>

      <Element
        name="living"
        className={isMobile ? "intuitive-living" : "section intuitive-living"}
      >
        <Row
          gutter={0}
          style={{ flexDirection: isMobile ? "column-reverse" : "row" }}
        >
          <Col
            span={isMobile ? 24 : 12}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextContent
              bg="light"
              color="light"
              header="INTUITIVE LIVING"
              title="Our developments are about purpose driven design"
              description="This is the practice of observation, listening and alignment. Creating real estate for a greater collective experience rather than conforming to external expectations"
              horizontalContent={["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"]}
            />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Image
              width={"100%"}
              height={isMobile ? "392px" : "100vh"}
              src={require("../images/living.jpeg")}
              preview={false}
              style={{
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Element>

      <Element
        name="lasting_value"
        className={isMobile ? "lasting_value" : "section lasting_value"}
      >
        <Row gutter={0}>
          <Col span={isMobile ? 24 : 12}>
            <Image
              width={"100%"}
              height={isMobile ? "392px" : "100vh"}
              src={require("../images/lasting_value.jpeg")}
              preview={false}
              style={{
                objectFit: "cover",
              }}
            />
          </Col>
          <Col
            span={isMobile ? 24 : 12}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextContent
              bg="dark"
              color="dark"
              header="lasting value"
              title="Intuitive Living creates a demonstrate-able value impact in three ways:"
              description="We create development solutions that are designed for exactly how people desire to live, work and experience."
              horizontalContent={["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"]}
            />
          </Col>
        </Row>
      </Element>

      <Element
        name="enquire"
        className={isMobile ? "enquire-mobile" : "enquire"}
      >
        <Consultation />
      </Element>
      <FooterComponent />
    </div>
  );
}

export default Landing;
