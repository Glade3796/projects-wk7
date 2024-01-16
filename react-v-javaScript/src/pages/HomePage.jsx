import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h2>Home</h2>

      <h3>Your Website Name</h3>
      <p>
        Welcome to a World of <strong>Creativity</strong> and{" "}
        <strong>Innovation</strong>.
      </p>

      <Link to="/about">
        <h3>About Us</h3>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ullamcorper justo ac velit ultricies, sed dapibus libero congue. Vivamus
        auctor justo at augue dignissim, sit amet mattis velit pharetra.
      </p>

      <Link to="/counter">
        <h3>Counter</h3>
      </Link>
      <p>
        We offer a wide range of services to meet your needs. From web
        development to design, we've got you covered. Our team of experts is
        dedicated to delivering high-quality solutions tailored to your
        requirements.
      </p>

      <Link to="/posts">
        <h3>Posts</h3>
      </Link>
      <p>
        Have a question or need assistance? Feel free to reach out to us. We are
        here to help you!
      </p>
    </>
  );
}
