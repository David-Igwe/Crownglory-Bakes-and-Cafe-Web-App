import { NavLink } from "react-router-dom";

function Sidebar({ categories }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <NavLink to={`/menu/${category.name}`} >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
