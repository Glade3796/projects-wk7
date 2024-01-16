import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function LogoutPage({ setUser, setIsLoggedIn }) {
  function clearUser() {
    setUser(""), setIsLoggedIn(false);
  }
  useEffect(() => {
    clearUser();
  });
  return (
    <>
      <h2>You have been logged out</h2>
      <Link to="/login">Log back in</Link>
    </>
  );
}
 