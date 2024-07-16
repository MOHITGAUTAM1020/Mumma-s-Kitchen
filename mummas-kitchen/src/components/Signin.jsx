import React from "react";
import { NavLink } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSignin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        username,
        password,
      });
      const redirectUrl = res.data
      setMessage(res.data.msg);
      window.location.href = redirectUrl
    } catch (err) {
      setMessage(err.response.data.msg); // Handle error response
    }
  };
  return (
    <>
      <div className="section-signin">
      <div className="container-signin">
        <div className="popup-signin">
          <div className="popup-content-signin">
            <h1>Sign-in</h1>
            <form action="/" method="post">
              <label htmlFor="username">username</label>
              <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required />
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(e)=> setPassword} required />
              <p className="signin-p">Don't have an account? <NavLink to="/signup">Click here</NavLink></p>
              <button className="signin-btn" onClick={handleSignin} type="submit">
                sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Signin;
