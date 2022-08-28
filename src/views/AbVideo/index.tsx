// import { toAbsoluteUrl } from "../../utils/getAbsoluteUrl";
import { baseURL } from "../../utils/getAbsoluteUrl";
import { JolPlayer } from "jol-player";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
    // TODO 获取id展示视频
    fetch("http://localhost:3010/source")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [location]);

  return (
    <>
      <JolPlayer
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
      ></JolPlayer>
    </>
  );
};
