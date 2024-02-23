import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
