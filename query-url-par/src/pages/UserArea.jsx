import { Link, Outlet, useParams } from "react-router-dom";

export function UserArea() {
  const { username } = useParams();
  return (
    <>
      <h2>user page</h2>
      <h3>
        User: <b>{username}</b>
      </h3>
      <Link to={`/users/${username}`}>User's profile</Link>{" "}
      <Link to={`/users/${username}/posts`}>User's posts</Link>
      <Link to={`/users/${username}/likes`}>User's likes</Link>
      <Outlet />
    </>
  );
}
