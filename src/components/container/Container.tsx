import Content from "../content/Content";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import "./Container.css";

type ContainerType = {
  children: React.ReactNode;
  menuType: String;
  className?: string;
};

const Container = ({ children, menuType, className }: ContainerType) => {
  return (
    <div className={`custom-container ${className}`}>
      <Sidebar menuType={menuType} />
      <Content>
        <Header menuType={menuType} />
        <div className="px-2 md:px-0">{children}</div>
      </Content>
    </div>
  );
};

export default Container;
