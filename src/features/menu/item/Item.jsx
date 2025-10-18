import { useLoaderData } from "react-router-dom";
import { formatCurrency } from "../../../utils/helpers";
import Button from "../../../ui/Button";

function Item() {
  const { name, image, price, description } = useLoaderData();

  return (
    <div>
      <div className="bg-brown-2 flex flex-col md:flex-row items-center justify-start xl:space-x-40 md:relative">
        <img src={image} alt={name} className="xl:ms-40 w-[250px] md:w-[350px]"  />
        <div className="flex flex-col sm:gap-3">
          <h2 className="text-darkbrown-1 text-2xl sm:text-4xl font-extrabold">{name}</h2>
          <p className="text-center md:text-start my-2 md:my-0 text-darkbrown-2 text-xl sm:text-2xl font-medium">
            {formatCurrency(price)}
          </p>
        </div>
        <Button utilityClasses={"w-35 sm:w-45 mt-2 mb-3 md:my-0 md:absolute left-7/10 top-3/4 shadow-md/30"}>Add to Cart</Button>
      </div>

      

      <div className="mx-5 md:ms-10 mt-5 text-darkbrown-1">
        <p className="text-2xl mb-1">Description</p>
        <p className="text-lg italic">{description}</p>
      </div>
    </div>
  );
}

export default Item;
