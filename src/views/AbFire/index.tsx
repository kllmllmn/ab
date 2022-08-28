import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export default () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white", textAlign: "center" }}>
        fire
      </Header>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
};
