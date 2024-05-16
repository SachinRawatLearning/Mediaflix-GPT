import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        ></img>
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        ></input>
        <input
          type="password"
          placeholder="Password "
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        ></input>
        <button className="p-2 my-2 bg-red-700 w-full rounded-sm">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
