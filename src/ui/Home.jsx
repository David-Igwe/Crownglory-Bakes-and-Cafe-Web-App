import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import Button from "./Button";

function Home() {
  const username = useSelector(store => store.user.username)

  return (
    <div className="my-10 text-center sm:my-16 font-notoSans">
      <h1 className="mb-8 text-xl font-semibold text-darkbrown-2">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {username === "" ? <CreateUser /> : <Button to='/menu'>Continue Ordering</Button>}
    </div>
  );
}

export default Home;
