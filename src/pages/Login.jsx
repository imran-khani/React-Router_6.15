import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-5 p-5 items-center mt-32">
      <h1>Sign in to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-xs mx-auto gap-5 "
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          className="p-2 border-2 border-gray-300  outline-none"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          className="p-2 border-2 border-gray-300 outline-none"
        />
        <button className="p-2 bg-orange-500 text-white rounded">Log in</button>
      </form>
    </div>
  );
}
