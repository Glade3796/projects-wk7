import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserArea } from "./pages/UserArea";
import { UserPostsPage } from "./pages/UserPostPage";
import { UserLikesPage } from "./pages/UserLikesPage";

export default function App() {
  return (
    <>
      <h1>website</h1>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/users"> User Area</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:username" element={<UserArea />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
        <Route path="*" element={<h2> 404 Not found</h2>} />
      </Routes>
    </>
  );
}
