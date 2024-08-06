import { Button, Typography, Row, Col, Form, Input } from "antd";
import { useMediaQuery } from 'react-responsive';
const { Text, Paragraph } = Typography;

function Consultation() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Row gutter={0} style={{ height: "100%", alignItems: "center" }}>
      <Col
        span={isMobile ? 24 : 12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: isMobile ? "20px" : "80px",
          paddingRight: isMobile ? "20px" : "0",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div style={{ width: isMobile ? "100%" : "270px", margin: isMobile ? "0 auto" : "0" }}>
          <Text
            className="text-color-dark"
            style={{ fontSize: isMobile ? "32px" : "42px", lineHeight: isMobile ? "40px" : "52px" }}
          >
            Book a free consultation
          </Text>
          <Paragraph
            className="font-size-11"
            style={{
              display: "block",
              padding: "16px 0",
              lineHeight: "23px",
              fontSize: "14px",
              letterSpacing: "0.2px",
            }}
          >
            One of our experts will get in touch within 24 hours to book an appointment.
          </Paragraph>
        </div>
      </Col>
      <Col span={isMobile ? 24 : 12}>
        <Form
          name="basic"
          onFinish={onFinish}
          style={{ maxWidth: "399px", margin: isMobile ? "0 20px" : "0 auto" }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              placeholder="Full Name"
              style={{
                width: "100%",
                borderBottom: "1px solid #58524D",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                backgroundColor: "transparent",
                color: "#58524D",
                borderRadius: "0",
                boxShadow: "none",
                paddingLeft: 0,
                paddingBottom: "14px",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "none")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              className="custom-input"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="Email"
              style={{
                width: "100%",
                borderBottom: "1px solid #58524D",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                backgroundColor: "transparent",
                color: "#58524D",
                borderRadius: "0",
                boxShadow: "none",
                paddingLeft: 0,
                paddingBottom: "14px",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "none")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              className="custom-input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="form-button"
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                textTransform: "uppercase",
                fontSize: "11px",
                letterSpacing: "1",
              }}
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Consultation;
