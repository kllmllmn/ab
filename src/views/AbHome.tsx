import { Carousel, Card, Col, Row } from "antd";
import { nanoid } from "nanoid";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { toAbsoluteUrl } from "../utils/getAbsoluteUrl";
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

  const navigate = useNavigate();
  const handleClickToNavigate = (e: any) => {
    // console.log(e.target);
    // console.log(e.target.getAttribute("id"));
    // console.log(e.target.textContent); 获取h3标签内的文本
    let id = e.target.getAttribute("id");
    let title = e.target.textContent;
    navigate(`/video/${title}?id=${id}`, {
      state: { id, title },
    });
  };
  return (
    <>
      <Carousel autoplay>
        <div onClick={handleClickToNavigate}>
          <h3 style={contentStyle} id={"1"}>
            Shadow Of The Sun (cover)
          </h3>
        </div>
        <div onClick={handleClickToNavigate}>
          <h3 style={contentStyle} id={"2"}>
            Shadow Of The Sun 翻唱 完整版
          </h3>
        </div>
        {/* <NavLink to="/video">
          <h3 style={contentStyle}>Shadow of the Sun 翻唱 完整版</h3>
        </NavLink> */}
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
            <ImgCard key={nanoid()}></ImgCard>
          ))}
        </Row>
      </div>
    </>
  );
};
