import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <Link to="/">home </Link>
      <Link to="/counter">counter </Link>
      <Link to="/posts">posts </Link>
      <Link to="/about">about </Link>
      <Link to={!isLoggedIn ? "/login" : "/logout"}>
        {!isLoggedIn ? "login" : "logout"}
      </Link>
    </nav>
  );
}
