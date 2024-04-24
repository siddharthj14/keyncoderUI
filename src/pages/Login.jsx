import React from "react";
import "./Login.css"

function Login({ theme }) {
  theme = "dark";
  return (
    <>
      <div
        className={`min-h-screen bg-${theme === "dark" ? "[#2E2727]" : "green"} flex items-center justify-center `}
      >
        <div className="container1 bg-white rounded-lg p-8" >
          <div className="left max-w-md w-full rounded-3xl bg-gray-300">
            
          </div>

          <div className=" max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-zinc-800">
              Account Login
            </h2>
            <p className="mb-4 text-zinc-600">
              If you are already a member you can login with your email address
              and password.
            </p>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="block text-zinc-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-zinc-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-zinc-700">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ${
                  theme === "dark"
                    ? "dark:bg-gray-700 dark:hover:bg-gray-600"
                    : ""
                }`}
              >
                Register now
              </button>
              <p className="mt-4 text-center text-zinc-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Sign up here
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;
