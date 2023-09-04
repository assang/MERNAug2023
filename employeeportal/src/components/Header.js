import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/employees">Employee List</Link>
          <Link to="/logout">Logout</Link>
        </div>
    )
}