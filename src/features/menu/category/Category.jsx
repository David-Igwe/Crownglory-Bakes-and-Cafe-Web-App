import { Link, useLoaderData } from "react-router-dom";

function Category() {
    const category = useLoaderData();
    return (
        <div>
            {category.items.map((item) => (
                <Link to={`/menu/${category.name}/${item._id}`} key={item._id}>
                    <img src={item.image} alt={item.name} width={100} />
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default Category
