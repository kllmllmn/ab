const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/source", (req, res) => {
  const data = [
    {
      id: "1",
      src: "/videos/Shadow of the Sun (cover).mp4",
    },
    {
      id: "2",
      src: "/videos/Shadow of the Sun 翻唱 完整版.mp4",
    },
  ];
  res.send(data);
});
app.listen(3010, (err) => {
  if (!err) console.log("正在监听3010");
});
