import Content from "../content/Content";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import "./Container.css";

type ContainerType = {
  children: React.ReactNode;
  menuType: String;
};

const Container = ({ children, menuType }: ContainerType) => {
  return (
    <div className="custom-container">
      <Sidebar menuType={menuType} />
      <Content>
        <Header />
        {children}
      </Content>
    </div>
  );
};

export default Container;
