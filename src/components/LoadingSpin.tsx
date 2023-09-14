import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const LoadingSpin: React.FC = () => (
  <Spin
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    indicator={antIcon}
  />
);

export default LoadingSpin;
