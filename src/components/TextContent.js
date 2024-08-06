import React from "react";
import { Typography, Space, Divider, Button } from "antd";
import { useMediaQuery } from "react-responsive";
const { Text, Title } = Typography;

function TextContent({
  bg,
  color,
  header,
  title,
  description,
  buttonText,
  horizontalContent,
}) {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <>
      <div className={isMobile ? "text-content-mobile" : "text-content"}>
        <Text className={`text-color-${color} text-uppercase tiny-label`}>
          {header}
        </Text>
        <Text
          className={`h4 text-color-${color}`}
          style={{ display: "block", marginTop: "20px", marginBottom: "16px" }}
        >
          {title}
        </Text>
        <Text className={`paragraph_style text-color-${color}`}>
          {description}
        </Text>
        {buttonText != null && (
          <Button className="tiny-label button-fill">VIEW our projects</Button>
        )}
      </div>
      {!isMobile && horizontalContent != null && (
        <div>
          <Space
            direction="horizontal"
            className="pl-80"
            style={{ marginBottom: "40px" }}
          >
            {horizontalContent.map((elm, i) => (
              <>
                <Text className={`text-color-${color} tiny-label`}>{elm}</Text>
                {horizontalContent.length !== i + 1 && (
                  <Divider
                    type="vertical"
                    className={`background-color-${bg}`}
                  />
                )}
              </>
            ))}
          </Space>
        </div>
      )}
    </>
  );
}

export default TextContent;
