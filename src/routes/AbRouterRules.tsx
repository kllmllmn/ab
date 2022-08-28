import { Route, Routes, Navigate } from "react-router-dom";
import Index from "../views/AbRouterNavLink";
import AbHome from "../views/AbHome";
import AbLike from "../views/AbLike";
import AbLikeVideo from "../views/AbLike/AbLikeVideo";
import AbLikeArticle from "../views/AbLike/AbLikeArticle";
import AbFire from "../views/AbFire";
import AbFireArticle from "../views/AbFire/AbFireArticle";
import AbFireVideo from "../views/AbFire/AbFireVideo";
import AbVideo from "../views/AbVideo";
import AbUser from "../views/AbUser";

const NotFound = () => {
  return <div>404 Not Found</div>;
};
// 路由规则
export default () => {
  return (
    <div>
      <Routes>
        {/* / 自动定位到首页 */}
        {/* <Route path="/" element={<Navigate to="/home"></Navigate>}></Route> */}

        <Route path="/" element={<Index />}>
          {/* 自动展示home组件 */}
          <Route path="" element={<AbHome />}></Route>
          <Route path="/like" element={<AbLike />}>
            <Route path="/like/article" element={<AbLikeArticle />}></Route>
            <Route path="/like/video" element={<AbLikeVideo />}></Route>
          </Route>
          <Route path="/fire" element={<AbFire />}>
            <Route path="/fire/article" element={<AbFireArticle />}></Route>
            <Route path="/fire/video" element={<AbFireVideo />}></Route>
          </Route>
          <Route path="/video" element={<AbVideo />}></Route>
          <Route path="/user" element={<AbUser />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
