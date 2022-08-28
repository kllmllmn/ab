import { Carousel, Card, Col, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../utils/getAbsoluteUrl";
import ImgCard from "../components/ImgCard";
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default () => {
  let arr: any = [];
  arr.length = 10;
  arr.fill(0);

  return (
    <>
      <Carousel autoplay>
        <NavLink to="/video">
          <h3 style={contentStyle}>Shadow Of The Sun (cover)</h3>
        </NavLink>
        <NavLink to="/video">
          <h3 style={contentStyle}>Shadow of the Sun 翻唱 完整版</h3>
        </NavLink>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {/* 栅格卡片 */}
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {arr.map((i: any) => (
            <ImgCard></ImgCard>
          ))}
        </Row>
      </div>
    </>
  );
};
