import { useState } from "react";
import "./AdminLogin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Connection error");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <p className="login-subtitle">dashboard</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="admin@example.com" 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="login-button">
            Login to Dashboard
          </button>
        </form>

        <div className="login-footer">
          <a href="/" className="back-link">← Back to Website</a>
        </div>

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}

export default Login;