import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import Button from "./Button";

function Home() {
  const username = useSelector(store => store.user.username)

  return (
    <>
      
      <div className="my-10 text-center sm:my-16 font-notoSans">
        <img src="https://res.cloudinary.com/dmgrue5xh/image/upload/v1760294047/Crownglory%20Bakes%20and%20Cafe/Brand/Crownglory_Bakes_Cafe_logo_with_tagline-08_objecp.png" alt="Crownglory Logo" className="w-60 sm:w-80 mx-auto mb-10" />

        {username === "" ? <CreateUser /> : <Button to='/menu'>Continue Ordering</Button>}
      </div>
    </>
    
  );
}

export default Home;
