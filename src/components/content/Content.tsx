import "./Content.css";

type ContentType = {
  children: React.ReactNode;
};
const Content = ({ children }: ContentType) => {
  return <div className="custom-content">{children}</div>;
};

export default Content;
