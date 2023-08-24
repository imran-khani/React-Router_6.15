import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <nav className="flex gap-5 ml-5">
        <NavLink end to="/host">Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/vans">Vans</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
