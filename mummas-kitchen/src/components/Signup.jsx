import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/auth/signup', { 
            username,
            email,
            password
        });
        const redirectUrl = res.data
        setMessage(res.data.msg);
        window.location.href = redirectUrl
    } catch (error) {
        setMessage(error.response.data.msg);
    }
};
  return (
    <>
      <div className="section-signin">
        <div className="container-signin">
          <div className="popup-signin">
            <div className="popup-content-signin">
              <h1>Sign-up</h1>
              <form action="/" method="post" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required />
                <label htmlFor="email">email id</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                <p className="signin-p">
                  Already have an account?{" "}
                  <NavLink to="/signin">Click here</NavLink>
                </p>
                <button className="signin-btn" type="submit">
                  sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
