import "./styles.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const Main = () => {
  return (
    <div className="Main">
      <Content />
      <Sidebar />
    </div>
  );
};

export default Main;
