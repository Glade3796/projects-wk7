import { useEffect } from "react";

export default function Posts({ setPostsTxt, postsTxt }) {
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const posts = await response.json();

      setPostsTxt(posts);
    }
    getPosts();
  }, []);

  return (
    <dl>
      {postsTxt.map((post) => (
        <>
          <dt>
            <b>{post.title}</b>
          </dt>
          <dd>{post.body}</dd>
        </>
      ))}
    </dl>
  );
}
