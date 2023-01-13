import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";

import Top from "./Top";
import { Home } from "./Home";
import Props from "./Props";
import NotFound from "./NotFound";

// Reactで行うルーティング
const App = () => {
  return (
    // 必ずBrowserRouterで囲む
    <Router>
      <div>
        <h1>Hello React Router v6</h1>

        {/* 必ずRoutesでRouteを囲む */}
        <Routes>

          {/* Routeコンポーネントがルーティングを規定する */}
          {/* element=で表示するコンポーネントを指定する */}

          {/* 基本形 */}
          <Route path='/home' element={<Home />} />

          {/* indexはpath="/"と同じ */}
          <Route index element={<Top />} />

          {/* ルーティングの際にpropsを渡せる */}
          <Route path="/props" element={<Props user="admin" is_admin="true" />} />

          {/* NotFoundルートは、該当しないURLへのすべてのアクセスに対応する */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* aタグは画面遷移ありのリンク */}
        <a href="/home" class="btn btn-primary">HOME（レンダリングあり）</a>

        {/* Linkコンポーネントはレンダリングなしのコンテンツ切り替えを提供 */}
        {/* Ajaxと組み合わせて、SPAの要になる */}
        <Link to="/"><button class="btn btn-danger">TOP（レンダリングなし）</button></Link>

        {/* NavLinkを使うと、現在のLocationがtoと一致するかどうか、などの情報を保持できる */}
        {/* isActive（現在のLocationがtoと一致）, isPending（一致しない場合） */}
        <NavLink className={ (props) => console.log(props, props.isActive, props.isPending) } to="/"><button class="btn btn-secondary">NavLink</button></NavLink>
        <NavLink style={ ({isActive, isPending}) => isActive ? { color: 'blue' } : undefined } to="/"><button class="btn btn-secondary">NavLink</button></NavLink>

      </div>
    </Router>
  );
};

export default App;
