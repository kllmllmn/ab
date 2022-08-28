import { Card, Col } from "antd";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../utils/getAbsoluteUrl";
const { Meta } = Card;

export default () => {
  return (
    <Col span={4}>
      <NavLink to="/video">
        <Card
          hoverable
          style={{ margin: "10px" }}
          cover={
            <img
              alt={toAbsoluteUrl("/imgs/001.png")}
              src={toAbsoluteUrl("/imgs/001.png")}
            />
          }
        >
          <Meta title={toAbsoluteUrl("/imgs/001.png")} description="okok" />
        </Card>
      </NavLink>
    </Col>
  );
};
