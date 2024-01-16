export default function LoginForm({
  setIsLoggedIn,
  isLoggedIn,
  loginF,
  setLoginF,
  user,
  setUser,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    // setLoginF(even.target.value);
    console.log(loginF);
    return setLoginF(
      { username: "", password: "" },
      setIsLoggedIn(true),
      setUser(loginF.username)
    );
  }
  function handleChange(event) {
    setLoginF({ ...loginF, [event.target.name]: event.target.value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <h3>{loginF}</h3> */}
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={loginF.username}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={loginF.password}
          />
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </>
  );
}
