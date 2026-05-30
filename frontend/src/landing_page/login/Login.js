import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        formData
      );

      toast.success("Login Successful!");
localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

window.location.href =
  `http://localhost:3000?token=${res.data.token}`;

  } catch (err) {
toast.error(
  err.response?.data?.message || "Login Failed"
);    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          Login
        </button>

        <p className="text-center mt-3">
  Don't have an account?{" "}
  <Link to="/signup">Signup</Link>
</p>
      </form>
    </div>
  );
}

export default Login;