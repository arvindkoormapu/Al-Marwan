import { Row, Col, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Text, Paragraph } = Typography;

function ProjectCard() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project/1"); // Redirect to /project/1
  };
  return (
    <>
      <Image
        height={isMobile ? 220 : 390}
        width={"100%"}
        src={require("../images/district11.jpeg")}
        preview={false}
        style={{ objectFit: "cover", cursor: "pointer" }}
        onClick={handleClick}
      />
      <Row style={{ alignItems: "baseline",padding: isMobile ? "24px 0px 0px 0px" : "32px 0px 0px 10px" }}>
        <Col span={2}>
          <Text className="tiny-label" style={{ color: "#636363" }}>
            01
          </Text>
        </Col>
        <Col span={22}>
          <Text
            className="tiny-label"
            style={{
              color: "#636363",
              textTransform: "uppercase",
              marginBottom: "10px",
              display: "block",
            }}
          >
            district 11
          </Text>
          <div style={{ border: "0.5px solid #453D3D", width: "13px" }}></div>
          <Paragraph
            className="paragraph-small"
            style={{
              color: "#636363",
              marginTop: "10px",
              display: "block",
              width: "170px",
            }}
          >
            A huge step in our sustainable journey for the next decade.
          </Paragraph>
        </Col>
      </Row>
    </>
  );
}

export default ProjectCard;
