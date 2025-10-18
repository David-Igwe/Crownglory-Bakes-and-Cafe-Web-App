import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-darkbrown-1 px-8 py-4 uppercase text-base">
      <Link to="/" className="w-23 md:w-27.5">
        <img src="https://res.cloudinary.com/dmgrue5xh/image/upload/v1760294047/Crownglory%20Bakes%20and%20Cafe/Brand/Crownglory_Bakes_Cafe_png_logo-07_cwi7qr.png" alt="Crownglory logo" />
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
