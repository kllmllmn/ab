// import { toAbsoluteUrl } from "../../utils/getAbsoluteUrl";
import { baseURL } from "../../utils/getAbsoluteUrl";
import { JolPlayer } from "jol-player";

export default () => {
  return (
    <>
      {/* <video controls key="1">
        <source
          src={toAbsoluteUrl("/videos/Shadow Of The Sun (cover).mp4")}
          type="video/mp4"
        />
      </video>
      <video
        src={toAbsoluteUrl("/videos/Shadow of the Sun 翻唱 完整版.mp4")}
        controls
        key="2"
      ></video> */}
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
