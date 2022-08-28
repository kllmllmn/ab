import { Carousel, Card, Col, Row } from "antd";
import { nanoid } from "nanoid";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { toAbsoluteUrl } from "../utils/getAbsoluteUrl";
import ImgCard from "../components/ImgCard";
const { Meta } = Card;
import { useEffect, useState } from "react";

// 定义接口，限制获取的后台videoSource数据的类型
interface videoSource {
  id: string;
  src: string;
  title: string;
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default () => {
  const [source, setSource] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3010/source");
    const data = await res.json();
    // console.log(data);
    setSource(data);
  };
  useEffect(() => {
    getData(), [source];
  });

  let arr: any = [];
  arr.length = 10;
  arr.fill(0);
  // let arr1 = [1, 2, 3, 4];

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
        {source.map((i: videoSource) => {
          return (
            <div onClick={handleClickToNavigate} key={i.id}>
              <h3 style={contentStyle} id={i.id}>
                {i.title}
              </h3>
            </div>
          );
        })}
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
