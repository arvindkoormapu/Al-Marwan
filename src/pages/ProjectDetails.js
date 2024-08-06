import { Row, Col, Typography, Divider, Image, Space } from "antd";
import { useMediaQuery } from "react-responsive";
import FooterComponent from "../components/Footer";
import Consultation from "../components/Consultation";
import TitleParagraph from "../components/TitleParagraph";
import ProjectCard from "../components/ProjectCard";
const { Text, Paragraph } = Typography;

const horizontalContent = ["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"];

function ProjectDetails() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "-64px",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="explore-projects"
      >
        <Text
          style={{
            color: "#fff",
            textTransform: "uppercase",
          }}
          className="tiny-lebel"
        >
          Project
        </Text>
        <Text
          style={{
            marginTop: "0px",
            color: "#fff",
          }}
          className={isMobile ? "h1-mobile" : "h1"}
        >
          District 11
        </Text>
      </div>

      <div style={{ padding: isMobile ? "20px" : "60px 80px" }}>
        <Row gutter={isMobile ? 16 : 48}>
          <Col
            span={isMobile ? 24 : 12}
            className="flex-justify-content-space-between"
          >
            <div>
              <Text
                style={{ color: "#40404080" }}
                className="tiny-label text-uppercase"
              >
                OVERVIEW
              </Text>
              <Paragraph
                className="text-color-dark paragraph-large "
                style={{
                  paddingRight: isMobile ? "0" : "35px",
                  marginTop: "14px",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae
              </Paragraph>
            </div>

            <div>
              <Space
                direction="horizontal"
                className={!isMobile && "pl-80"}
                style={{ marginBottom: "40px" }}
              >
                {horizontalContent.map((elm, i) => (
                  <>
                    <Text className={`text-color-dark tiny-label`}>
                      {elm}
                    </Text>
                    {horizontalContent.length !== i + 1 && (
                      <Divider
                        type="vertical"
                        className={`background-color-dark`}
                      />
                    )}
                  </>
                ))}
              </Space>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row>
              <Col span={12}>
                <div className="flex-direction-column">
                  <Text
                    style={{ color: "#40404080" }}
                    className="text-uppercase tiny-label"
                  >
                    Size
                  </Text>
                  <Text className="number-style">9000m2</Text>
                </div>
                <div
                  className="flex-direction-column"
                  style={{ marginTop: "34px" }}
                >
                  <Text
                    style={{ color: "#40404080" }}
                    className="text-uppercase tiny-label"
                  >
                    PROJECT LENGTH
                  </Text>
                  <Text className="number-style">18 months</Text>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex-direction-column">
                  <Text
                    style={{ color: "#40404080" }}
                    className="text-uppercase tiny-label"
                  >
                    LOCATION
                  </Text>
                  <Text className="number-style">Jumeirah</Text>
                </div>
                <div
                  className="flex-direction-column"
                  style={{ marginTop: "34px" }}
                >
                  <Text
                    style={{ color: "#40404080" }}
                    className="text-uppercase tiny-label"
                  >
                    PROJECT TYPE
                  </Text>
                  <Text className="number-style">Residential</Text>
                </div>
              </Col>
            </Row>
            <div style={{ marginTop: "30px" }}>
              <div className="floor-plan">
                <Text style={{ color: "#40404080" }} className="tiny-label">
                  FLOOR PLAN
                </Text>
                <Image
                  width={11}
                  style={{ cursor: "pointer" }}
                  src={require("../images/arrow.png")}
                  preview={false}
                />
              </div>
              <div className="floor-plan floor-plan-no-border-top">
                <Text style={{ color: "#40404080" }} className="tiny-label">
                  LOCATION
                </Text>
                <Image
                  width={11}
                  style={{ cursor: "pointer" }}
                  src={require("../images/arrow.png")}
                  preview={false}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
            marginTop: "50px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Image
            width={153}
            style={{ cursor: "pointer" }}
            src={require("../images/CTA.png")}
            preview={false}
          />
        </div>
        <Row gutter={isMobile ? 16 : 48} style={{ marginTop: "-46px" }}>
          <Col span={isMobile ? 24 : 12}>
            <Image
              style={{ cursor: "pointer" }}
              src={require("../images/Image1.png")}
              preview={false}
            />
            <div
              className="flex-direction-column"
              style={{ padding: "20px 0px" }}
            >
              <Text className="text-uppercase-font-11">
                THE LIVING QUARTERS
              </Text>
              <Text className="text-uppercase-font-11">
                Space for a large family
              </Text>
            </div>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Image
              style={{ cursor: "pointer" }}
              src={require("../images/Image2.png")}
              preview={false}
            />
            <div
              className="flex-direction-column"
              style={{ padding: "20px 0px" }}
            >
              <Text className="text-uppercase-font-11">BESPOKE FURNITURE</Text>
              <Text className="text-uppercase-font-11">
                Perfectly curated for each space
              </Text>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={isMobile ? 24 : 12}>
            <TitleParagraph />
          </Col>
          <Col span={isMobile ? 24 : 12}></Col>
        </Row>
      </div>

      <div style={{ padding: isMobile ? "20px" : "40px 80px" }}>
        <Image
          style={{ cursor: "pointer" }}
          src={require("../images/Image3.png")}
          preview={false}
        />
        <div style={{ padding: "20px 0px" }}>
          <Text
            className="sustain"
            style={{ padding: "10px 0px", display: "block" }}
          >
            SUSTAINABLE MATERIALS
          </Text>
          <Paragraph className="paragraph-small">
            All natural and ethically sourced
          </Paragraph>
          <Row>
            <Col span={isMobile ? 24 : 12}></Col>
            <Col span={isMobile ? 24 : 12}>
              <TitleParagraph />
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ padding: isMobile ? "20px" : "40px 0px" }}>
        <Image
          style={{ cursor: "pointer" }}
          src={require("../images/Image3.png")}
          preview={false}
        />
        <div style={{ padding: isMobile ? "20px" : "0px 80px" }}>
          <div style={{ padding: "20px 0px" }}>
            <Text
              className="sustain"
              style={{ padding: "10px 0px", display: "block" }}
            >
              SUSTAINABLE MATERIALS
            </Text>
            <Paragraph className="paragraph-small">
              All natural and ethically sourced
            </Paragraph>
            <Row>
              <Col span={isMobile ? 24 : 12}>
                <TitleParagraph />
              </Col>
              <Col span={isMobile ? 24 : 12}></Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={isMobile ? "enquire-mobile" : "enquire"}>
        <Consultation />
      </div>

      <div style={{ padding: isMobile ? "20px" : "40px 80px" }}>
        <Text className="h3" style={{ padding: "30px 0px", display: "block" }}>
          Related projects
        </Text>

        <Row gutter={isMobile ? 16 : 48}>
          <Col span={isMobile ? 24 : 12}>
            <ProjectCard />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row gutter={isMobile ? 16 : 48}>
              <Col span={isMobile ? 24 : 12}>
                <ProjectCard />
              </Col>
              <Col span={isMobile ? 24 : 12}>
                <ProjectCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProjectDetails;
