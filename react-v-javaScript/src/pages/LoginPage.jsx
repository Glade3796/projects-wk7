import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage({
  setIsLoggedIn,
  isLoggedIn,
  loginF,
  setLoginF,
  user,
  setUser,
}) {
  return (
    <>
      <h1>login</h1>
      <LoginForm
        loginF={loginF}
        setLoginF={setLoginF}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        user={user}
        setUser={setUser}
      />
    </>
  );
}
