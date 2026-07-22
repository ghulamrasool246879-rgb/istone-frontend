import { useState } from "react";
import axios from "axios";
import "../css/admin.css";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${API_URL}/api/admin/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("adminInfo", JSON.stringify(data));

      alert("Login Successful");

      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>I-STONE</h1>

        <h3>Admin Login</h3>

        <form onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;