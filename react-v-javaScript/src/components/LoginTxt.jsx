export default function LoginTxt({ isLoggedIn, user }) {
  if (isLoggedIn) {
    return <h3>Welcome back {user}!</h3>;
  }
  return <h3>Please log in!</h3>;
}
