import React from "react";
import Sidebar from "./Sidebar";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Private = ({ children }: any) => {
  return (
    <Layout className="app_container">
      <Layout>
        <Sider className="equity_sidebar">
          <Sidebar />
        </Sider>
        <Content className="equity_content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Private;