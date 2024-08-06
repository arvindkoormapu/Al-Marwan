import { Button, Typography, Row, Col, Form, Input } from "antd";
const { Text, Paragraph } = Typography;

function Consultation() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Row gutter={0} style={{ height: "100%", alignItems: "center" }}>
      <Col
        span={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingLeft: "80px", width: "270px" }}>
          <Text
            className="text-color-dark"
            style={{ fontSize: "42px", lineHeight: "52px" }}
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
            One of our experts will get in touch within 24 hours to book an
            appointment.
          </Paragraph>
        </div>
      </Col>
      <Col span={12}>
        <Form
          name="basic"
          onFinish={onFinish}
          style={{ maxWidth: "399px", margin: "0 auto" }}
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
                width: "399px",
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
                width: "399px",
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
                width: "399px",
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
