import Category from "./Category/Category";
import Price from "./Price/Price";

import "./Sidebar.css";
import Star from "./Stars/Star";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>Zevi</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Star handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
