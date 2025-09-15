import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to="/">CrownGlory Bakes & Cafe</Link>
            <SearchOrder />
            <p>David</p>
        </header>
    )
}

export default Header
