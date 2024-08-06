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
import { useMediaQuery } from "react-responsive";
import FooterComponent from "../components/Footer";
const { Text, Title, Paragraph } = Typography;

const { Option } = Select;

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
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
        <div
          style={{
            maxWidth: isMobile ? "100%" : "600px",
            margin: "auto",
            padding: isMobile ? "0 20px" : "0",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: isMobile ? "40px" : "60px",
              marginBottom: isMobile ? "40px" : "60px",
            }}
          >
            <Text className={`text-color-dark tiny-label`}>ENQUIRE</Text>
            <Text
              className={isMobile ? "text-color-dark get-in-touch" : "text-color-dark h1"}
              style={{ marginTop: 0, display: 'block' }}
            >
              Get in touch
            </Text>

            <Paragraph
              className={`text-color-dark`}
              style={{
                fontSize: "14px",
                lineHeight: "23px",
                padding: isMobile ? "0px 20px" : "0px 135px",
              }}
            >
              Contact us today and let’s start a conversation about your next
              venture or project.
            </Paragraph>
          </div>
          <Form form={form} layout="vertical">
            <Row gutter={16}>
              <Col span={isMobile ? 24 : 12}>
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
              <Col span={isMobile ? 24 : 12}>
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
                style={{ padding: "0 80px", width: isMobile ? "100%" : "auto" }}
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
              marginTop: isMobile ? "30px" : "50px",
              marginBottom: isMobile ? "30px" : "50px",
            }}
          >
            OR CONTACT US DIRECT
          </Divider>

          <Row
            align="middle"
            style={{ marginBottom: isMobile ? "40px" : "70px" }}
          >
            <Col
              span={isMobile ? 12 : 8}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: isMobile ? "20px" : "0",
              }}
            >
              <Image
                width={37}
                height={37}
                src={require("../images/whatsapp.png")}
                preview={false}
              />
              <Text className="text-color-dark font-size-11">WHATSAPP</Text>
            </Col>
            <Col
              span={isMobile ? 12 : 8}
              style={{
                textAlign: isMobile ? "center" : "left",
                marginBottom: isMobile ? "20px" : "0",
              }}
            >
              <Text className="text-color-dark font-size-11">
                +97 (0)939 494 49592
              </Text>
            </Col>
            <Col
              span={isMobile ? 24 : 8}
              style={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                alignItems: "center",
              }}
            >
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
