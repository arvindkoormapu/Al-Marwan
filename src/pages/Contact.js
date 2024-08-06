import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Typography,
  Divider,
  Image,
} from "antd";
import FooterComponent from "../components/Footer";
const { Text, Title, Paragraph } = Typography;

const { Option } = Select;

function Contact() {
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid #58524D",
    borderRadius: "0",
    backgroundColor: "transparent",
    color: "#58524D",
    paddingLeft: "0",
    paddingTop: "14px",
    paddingBottom: "14px",
  };

  const selectStyle = {
    border: "none",
    borderBottom: "1px solid #58524D",
    borderRadius: "0",
    backgroundColor: "transparent",
    color: "#58524D",
    paddingTop: "14px",
    paddingBottom: "14px",
  };
  const [form] = Form.useForm();
  return (
    <>
      <div className="bgm1">
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <div
            style={{
              textAlign: "center",
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            <Text
              className={`text-color-dark`}
              style={{ fontSize: "11px", lineHeight: "16px" }}
            >
              ENQUIRE
            </Text>
            <Title
              className={`text-color-dark`}
              style={{ fontSize: "84px", marginTop: 0 }}
            >
              Get in touch
            </Title>

            <Paragraph
              className={`text-color-dark`}
              style={{
                fontSize: "14px",
                lineHeight: "23px",
                marginTop: "35px",
                padding: "0px 135px",
              }}
            >
              Contact us today and let’s start a conversation about your next
              venture or project.
            </Paragraph>
          </div>
          <Form form={form} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: "First name is required" },
                  ]}
                >
                  <Input
                    placeholder="First name *"
                    style={inputStyle}
                    className="custom-placeholder"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  rules={[{ required: true, message: "Last name is required" }]}
                >
                  <Input
                    placeholder="Last name *"
                    style={inputStyle}
                    className="custom-placeholder"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Valid email is required",
                },
              ]}
            >
              <Input
                placeholder="Email *"
                style={inputStyle}
                className="custom-placeholder"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input
                placeholder="Phone *"
                style={inputStyle}
                className="custom-placeholder"
              />
            </Form.Item>

            <Form.Item
              name="projectEnquiry"
              rules={[
                {
                  required: true,
                  message: "Please select your project enquiry",
                },
              ]}
              style={{ marginTop: "54px" }}
            >
              <Select
                placeholder="Project enquiry *"
                style={selectStyle}
                className="custom-select-placeholder"
                dropdownStyle={{ borderBottom: "2px solid #58524D" }}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <Input.TextArea
                placeholder="Message *"
                rows={4}
                style={inputStyle}
                className="custom-placeholder"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="form-button"
                style={{ padding: "0 80px" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          <Divider
            plain
            className="text-color-dark"
            style={{
              fontSize: "11px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            OR CONTACT US DIRECT
          </Divider>

          <Row align="middle" style={{ marginBottom: "70px" }}>
            <Col span={8} className="justify-content-space-around">
              <Image
                width={37}
                height={37}
                src={require("../images/whatsapp.png")}
                preview={false}
              />
              <Text className="text-color-dark font-size-11">WHATSAPP</Text>
            </Col>
            <Col span={8} className="justify-content-center-flex">
              <Text className="text-color-dark font-size-11">
                +97 (0)939 494 49592
              </Text>
            </Col>
            <Col span={8} className="flex-direction-end">
              <Image
                width={117}
                height={38}
                src={require("../images/Apple.png")}
                preview={false}
              />
              <Image
                width={134}
                height={52}
                style={{ marginLeft: "9px" }}
                src={require("../images/google-play.png")}
                preview={false}
              />
            </Col>
          </Row>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Contact;
