import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <NavLink to="/">
        <button className="">Home</button>
      </NavLink>

      <NavLink to="/AboutPage">
        <button className="">About Page</button>
      </NavLink>
    </aside>
  );
};

export default SideBar;
