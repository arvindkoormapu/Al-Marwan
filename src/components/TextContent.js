import React from "react";
import { Typography, Space, Divider, Button } from "antd";
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
  return (
    <>
      <div className="text-content">
        <Text className={`text-color-${color} text-uppercase`}>{header}</Text>
        <Title className={`text-color-${color}`} style={{ fontSize: "36px" }}>{title}</Title>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {buttonText != null && (
          <Button className="button-fill">VIEW our projects</Button>
        )}
      </div>
      {horizontalContent != null && (
        <div>
          <Space
            direction="horizontal"
            className="pl-80"
            style={{ marginBottom: "40px" }}
          >
            {horizontalContent.map((elm, i) => (
              <>
                <Text className={`text-color-${color} font-size-11`}>{elm}</Text>
                {horizontalContent.length !== i + 1 && (
                  <Divider type="vertical" className={`background-color-${bg}`} />
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
