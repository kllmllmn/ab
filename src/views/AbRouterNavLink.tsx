import { NavLink, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  FireOutlined,
  UserOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/">主页</NavLink>, "/home", <HomeOutlined />),
  getItem(<NavLink to="/like">喜欢</NavLink>, "/like", <HeartOutlined />, [
    getItem(
      <NavLink to="/like/video">视频</NavLink>,
      "/like/video",
      <HeartOutlined />
    ),
    getItem(
      <NavLink to="/like/article">文章</NavLink>,
      "/like/article",
      <HeartOutlined />
    ),
  ]),
  getItem(<NavLink to="/fire">hot</NavLink>, "/fire", <FireOutlined />, [
    getItem(
      <NavLink to="/fire/video">视频</NavLink>,
      "/fire/video",
      <FireOutlined />
    ),
    getItem(
      <NavLink to="/fire/article">文章</NavLink>,
      "/fire/article",
      <FireOutlined />
    ),
  ]),
  getItem(
    <NavLink to="/video">video</NavLink>,
    "/video",
    <PlayCircleOutlined />
  ),
  getItem(<NavLink to="/user">我的</NavLink>, "/user", <UserOutlined />),
];

export default () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
