import { Link } from "react-router-dom"

function Button({text, to, onClick, secondary, className}) {
    return (
	<>
	    {
		to === "" ?
		<button className={`text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} onClick={onClick}>{text}</button>
		:
		<Link className={`flex items-center text-md h-10 px-5 md:text-lg md:px-8 rounded ${secondary ? "bg-secondary" : "bg-primary"} ${className}`} to={to}>{text}</Link>
	    }
	</>
    )
}

Button.defaultProps = {
    text: "Button",
    to: "",
    onClick: ()=>{},
    secondary: false,
    className: ""
}

export default Button;
