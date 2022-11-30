import React from "react";

export default function Login() {
  const postData = (e) => {
    e.preventDefault();
    localStorage.setItem("login", false);
  };
  return (
    <div className="container mt-3">
      <form onSubmit={postData}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="123"
            required
          />
        </div>
        <button type="submit" class="btn btn-secondary mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
