import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginTxt from "./components/LoginTxt";
import Posts from "./components/Posts";
import BtnCounter from "./components/BtnCounter";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import LogoutPage from "./pages/LogoutPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postsTxt, setPostsTxt] = useState([]);
  const [count, setCount] = useState(0);
  const [loginF, setLoginF] = useState({ username: "", password: "" });
  const [user, setUser] = useState("");

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <h1>Anti Social Site</h1>
        <LoginTxt isLoggedIn={isLoggedIn} user={user} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/counter"
          element={
            isLoggedIn && <BtnCounter count={count} setCount={setCount} />
          }
        />
        <Route
          path="/posts"
          element={
            isLoggedIn && (
              <Posts postsTxt={postsTxt} setPostsTxt={setPostsTxt} />
            )
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              loginF={loginF}
              setLoginF={setLoginF}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/logout"
          element={
            <LogoutPage setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
