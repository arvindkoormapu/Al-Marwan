import { Row, Col, Typography, Divider, Image } from "antd";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
const { Text, Title, Paragraph } = Typography;

function Projects() {
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
          padding: "90px 80px 0px 80px",
        }}
      >
        <Row align="middle">
          <Col span={8}>
            <Title
              className={`text-color-dark`}
              style={{ fontSize: "84px", marginTop: 0 }}
            >
              Projects
            </Title>
          </Col>

          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
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
            <Text
              style={{
                fontSize: "11px",
                lineHeight: "16px",
                padding: "4px 10px",
                color: "#BEB2A4",
              }}
            >
              FILTER
            </Text>
          </Col>

          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "self-end",
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
            <Row gutter={48}>
              <Col span={12} style={{ paddingBottom: "77px" }}>
                <ProjectCard />
              </Col>
              <Col span={12} style={{ paddingBottom: "77px" }}>
                <Image
                  height={390}
                  width={"100%"}
                  src={require("../images/naseem.png")}
                  preview={false}
                  style={{ objectFit: "cover" }}
                />
                <Row style={{ padding: "32px 0px 0px 10px" }}>
                  <Col span={2}>
                    <Text className="font-size-11" style={{ color: "#636363" }}>
                      02
                    </Text>
                  </Col>
                  <Col span={22}>
                    <Text
                      className="font-size-11"
                      style={{
                        color: "#636363",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      Naseem
                    </Text>
                    <div
                      style={{ border: "0.5px solid #453D3D", width: "13px" }}
                    ></div>
                    <Paragraph
                      className="font-size-11"
                      style={{
                        color: "#636363",
                        marginTop: "10px",
                        display: "block",
                        width: "163px",
                      }}
                    >
                      A huge step in our sustainable journey for the next
                      decade.
                    </Paragraph>
                  </Col>
                </Row>
              </Col>
              <Col span={12} style={{ paddingBottom: "77px" }}>
                <Image
                  height={390}
                  width={"100%"}
                  src={require("../images/naya.jpeg")}
                  preview={false}
                  style={{ objectFit: "cover" }}
                />
                <Row style={{ padding: "32px 0px 0px 10px" }}>
                  <Col span={2}>
                    <Text className="font-size-11" style={{ color: "#636363" }}>
                      03
                    </Text>
                  </Col>
                  <Col span={22}>
                    <Text
                      className="font-size-11"
                      style={{
                        color: "#636363",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      Naya
                    </Text>
                    <div
                      style={{ border: "0.5px solid #453D3D", width: "13px" }}
                    ></div>
                    <Paragraph
                      className="font-size-11"
                      style={{
                        color: "#636363",
                        marginTop: "10px",
                        display: "block",
                        width: "163px",
                      }}
                    >
                      A huge step in our sustainable journey for the next
                      decade.
                    </Paragraph>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        ) : (
          <div style={{ paddingBottom: "100px" }}>
            <Row gutter={48}>
              <Col span={8}>
                {names.map((elm, i) => (
                  <Text
                    className="project-names"
                    style={{
                      color: activeProject === i + 1 ? "#58524D" : "#BEB2A4",
                    }}
                    onClick={() => setActiveProject(i + 1)}
                  >
                    {elm}
                  </Text>
                ))}
              </Col>
              <Col span={16}>
                <Text className="explore-button">Explore</Text>
                <Image
                  height={715}
                  width={"100%"}
                  src={require("../images/district11.jpeg")}
                  preview={false}
                  style={{ objectFit: "cover" }}
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
