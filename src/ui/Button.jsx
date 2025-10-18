import { Link } from "react-router-dom"

function Button({children, disabled, to, utilityClasses}) {
    const classes = "bg-darkbrown-1 hover:bg-darkbrown-2 focus:ring-darkbrown-2 focus:bg-darkbrown-2 inline-block cursor-pointer rounded-full px-4 py-3 text-base font-semibold tracking-wide uppercase transition-colors duration-300 focus:ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4 text-sm " + utilityClasses

    
    if(to) return <Link to={to} className={classes}>{children}</Link>
    return (
        <button disabled={disabled} className={classes}>{children}</button>
    )
}

export default Button
