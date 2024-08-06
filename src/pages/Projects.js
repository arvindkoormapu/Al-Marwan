import { Row, Col, Typography, Divider, Image } from "antd";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectCard from "../components/ProjectCard";
const { Text, Title, Paragraph } = Typography;

function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const names = ["District 11", "Naseem", "Naya"];
  const [gridType, setGridType] = useState("grid");
  const [activeProject, setActiveProject] = useState(1);

  const updateGridStatus = (type) => {
    setGridType(type);
  };

  return (
    <>
      <div
        style={{
          padding: isMobile ? "20px 20px 0px 20px" : "90px 80px 0px 80px",
        }}
      >
        <Row style={{ alignItems: "baseline", paddingBottom: "20px" }}>
          <Col span={isMobile ? 12 : 8}>
            <Text
              className={`text-color-dark  ${isMobile ? "h1-mobile" : "h1"}`}
              style={{
                marginTop: 0,
                textAlign: "left",
              }}
            >
              Projects
            </Text>
          </Col>
          {!isMobile && (
            <Col
              span={isMobile ? 24 : 8}
              style={{
                display: "flex",
                justifyContent: isMobile ? "center" : "center",
                marginTop: isMobile ? "20px" : "0",
              }}
            >
              <Text
                className={`text-color-dark`}
                style={{
                  fontSize: "11px",
                  lineHeight: "16px",
                  padding: "4px 10px",
                  borderBottom: "1px solid #58524D",
                }}
              >
                ALL
              </Text>
              {/* <Text
              style={{
                fontSize: "11px",
                lineHeight: "16px",
                padding: "4px 10px",
                color: "#BEB2A4",
              }}
            >
              FILTER
            </Text> */}
            </Col>
          )}
          <Col
            span={isMobile ? 12 : 8}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "self-end",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <Text
              className={`text-color-dark`}
              style={{
                fontSize: "11px",
                lineHeight: "16px",
                paddingRight: "15px",
              }}
            >
              GRID
            </Text>
            <div>
              {gridType === "grid" ? (
                <Image
                  style={{ cursor: "pointer" }}
                  width={10}
                  src={require("../images/grid.png")}
                  preview={false}
                  onClick={() => updateGridStatus("grid")}
                />
              ) : (
                <Image
                  style={{ cursor: "pointer" }}
                  width={10}
                  src={require("../images/grid_inactive.png")}
                  preview={false}
                  onClick={() => updateGridStatus("grid")}
                />
              )}

              <Divider type="vertical" style={{ background: "#BAB2A6" }} />
              {gridType === "list" ? (
                <Image
                  style={{ cursor: "pointer" }}
                  width={10}
                  src={require("../images/list.png")}
                  preview={false}
                  onClick={() => updateGridStatus("list")}
                />
              ) : (
                <Image
                  style={{ cursor: "pointer" }}
                  width={10}
                  src={require("../images/list_inactive.png")}
                  preview={false}
                  onClick={() => updateGridStatus("list")}
                />
              )}
              <Divider type="vertical" style={{ background: "#BAB2A6" }} />
              <Image
                width={10}
                src={require("../images/location_inactive.png")}
                preview={false}
              />
            </div>
          </Col>
        </Row>

        {gridType === "grid" ? (
          <div>
            <Row gutter={isMobile ? 16 : 48}>
              <Col
                span={isMobile ? 24 : 12}
                style={{ paddingBottom: isMobile ? "40px" : "77px" }}
              >
                <ProjectCard />
              </Col>
              <Col
                span={isMobile ? 24 : 12}
                style={{ paddingBottom: isMobile ? "40px" : "77px" }}
              >
                <ProjectCard />
              </Col>
              <Col
                span={isMobile ? 24 : 12}
                style={{ paddingBottom: isMobile ? "40px" : "77px" }}
              >
                <ProjectCard />
              </Col>
            </Row>
          </div>
        ) : (
          <div style={{ paddingBottom: "100px" }}>
            <Row gutter={isMobile ? 16 : 48}>
              <Col
                span={isMobile ? 12 : 8}
                style={{ textAlign: isMobile ? "center" : "left" }}
              >
                {names.map((elm, i) => (
                  <Text
                    className={isMobile ? "project-names-mobile" :"project-names"}
                    style={{
                      color: activeProject === i + 1 ? "#58524D" : "#BEB2A4",
                      display: "block",
                      cursor: "pointer",
                      marginBottom: isMobile ? "10px" : "0",
                    }}
                    onClick={() => setActiveProject(i + 1)}
                    key={i}
                  >
                    {elm}
                  </Text>
                ))}
              </Col>
              <Col span={isMobile ? 12 : 16}>
                <Text
                  className={isMobile ? "explore-button-mobile" : "explore-button"}
                  style={{
                    display: isMobile ? "block" : "inline",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Explore
                </Text>
                <Image
                  height={isMobile ? 300 : 715}
                  width={"100%"}
                  src={require("../images/district11.jpeg")}
                  preview={false}
                  style={{
                    objectFit: "cover",
                    marginTop: isMobile ? "10px" : "0",
                  }}
                />
              </Col>
            </Row>
          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
}

export default Projects;
