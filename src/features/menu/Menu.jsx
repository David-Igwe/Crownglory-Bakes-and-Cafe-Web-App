import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../../ui/Sidebar";

function Menu() {
  const categories = useLoaderData();

  return (
    <div className="menu">
      <Sidebar categories={categories}/>

      <Outlet />
    </div>
    
  );
}

export default Menu;
