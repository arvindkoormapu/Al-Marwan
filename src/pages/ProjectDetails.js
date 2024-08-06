import { Row, Col, Typography, Divider, Image } from "antd";
import FooterComponent from "../components/Footer";
import Consultation from "../components/Consultation";
import TitleParagraph from "../components/TitleParagraph";
import ProjectCard from "../components/ProjectCard";
const { Text, Title, Paragraph } = Typography;

const horizontalContent = ["RESIDENTIAL", "NEW BUILD", "SUSTAINABLE"];

function ProjectDetails() {
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
            fontSize: "11px",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Project
        </Text>
        <Title style={{ fontSize: "86px", marginTop: "0px", color: "#fff" }}>
          District 11
        </Title>
      </div>

      <div style={{ padding: "60px 80px" }}>
        <Row gutter={48}>
          <Col span={12} className="flex-justify-content-space-between ">
            <div>
              <Text style={{ color: "#40404080" }} className="text-uppercase">
                OVERVIEW
              </Text>
              <Paragraph
                className="text-color-dark"
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  paddingRight: "35px",
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
              {horizontalContent.map((elm, i) => (
                <>
                  <Text className={`text-color-dark font-size-11`}>{elm}</Text>
                  {horizontalContent.length !== i + 1 && (
                    <Divider
                      type="vertical"
                      className={`background-color-dark`}
                    />
                  )}
                </>
              ))}
            </div>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <div className="flex-direction-column">
                  <Text
                    style={{ color: "#40404080" }}
                    className="text-uppercase font-size-11"
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
                    className="text-uppercase font-size-11"
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
                    className="text-uppercase font-size-11"
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
                    className="text-uppercase font-size-11"
                  >
                    PROJECT TYPE
                  </Text>
                  <Text className="number-style">Residential</Text>
                </div>
              </Col>
            </Row>
            <div style={{ marginTop: "30px" }}>
              <div className="floor-plan">
                <Text style={{ color: "#40404080" }} className="font-size-11">
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
                <Text style={{ color: "#40404080" }} className="font-size-11">
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
            justifyContent: "flex-end",
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
        <Row gutter={16} style={{ marginTop: "-46px" }}>
          <Col span={12}>
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
          <Col span={12}>
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
          <Col span={12}>
            <TitleParagraph />
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>

      <div style={{ padding: "40px 80px" }}>
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
            <Col span={12}></Col>
            <Col span={12}>
              <TitleParagraph />
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ padding: "40px 0px" }}>
        <Image
          style={{ cursor: "pointer" }}
          src={require("../images/Image3.png")}
          preview={false}
        />
        <div style={{ padding: "0px 80px" }}>
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
              <Col span={12}>
                <TitleParagraph />
              </Col>
              <Col span={12}></Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="enquire">
        <Consultation />
      </div>

      <div style={{ padding: "40px 80px" }}>
        <Text className="h3" style={{ padding: "30px 0px", display: "block" }}>
          Related projects
        </Text>

        <Row gutter={48}>
          <Col span={12}>
            <ProjectCard />
          </Col>
          <Col span={12}>
            <Row gutter={48}>
              <Col span={12}>
                <ProjectCard />
              </Col>
              <Col span={12}>
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
