// import { toAbsoluteUrl } from "../../utils/getAbsoluteUrl";
import { baseURL } from "../../utils/getAbsoluteUrl";
import { JolPlayer } from "jol-player";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// 定义接口，限制获取的后台videoSource数据的类型
interface videoSource {
  id: string;
  src: string;
}

export default () => {
  let location = useLocation();
  const [source, setSource] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:3010/source");
    const data = await res.json();
    // console.log(data);
    setSource(data);
  };

  useEffect(() => {
    console.log(location);
    // fetch("http://localhost:3010/source")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    getData();
  }, [location]);

  return (
    <>
      {/* {console.log(source)} */}
      {/* map方法循环渲染的标签需要key值 */}
      {source.map((i: videoSource) => {
        if (location.search.slice(1).split("=")[1] === i.id)
          return (
            <JolPlayer
              key={i.id}
              option={{
                videoSrc: baseURL + i.src,
                width: 400,
                height: 220,
                isShowScreenshot: false,
              }}
              style={{ margin: 6, display: "inline-block" }}
            ></JolPlayer>
          );
      })}
      {/* <JolPlayer
        option={{
          // videoSrc: toAbsoluteUrl("/videos/Shadow of the Sun (cover).mp4"),
          videoSrc: baseURL + "/videos/Shadow of the Sun (cover).mp4",
          width: 400,
          height: 220,
          isShowScreenshot: false,
        }}
        style={{ margin: 6, display: "inline-block" }}
      ></JolPlayer>
      <JolPlayer
        option={{
          videoSrc: baseURL + "/videos/Shadow of the Sun 翻唱 完整版.mp4",
          width: 400,
          height: 220,
          isShowScreenshot: false,
        }}
        style={{ margin: 6, display: "inline-block" }}
      ></JolPlayer> */}
    </>
  );
};
