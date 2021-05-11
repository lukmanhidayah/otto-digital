import Content from "../content/Content";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import "./Container.css";

const Container = () => {
  return (
    <div className="custom-container">
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </div>
  );
};

export default Container;
