import React from "react";

function Login({ theme }) {
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-[#131313] text-white"
            : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
        } flex items-center justify-center w-full`}
      >
        <div className="container1 bg-white rounded-lg p-8 m-26 flex ">
          <div className="left max-w-md w-full rounded-3xl bg-white-300 flex-1 m-2 relative h-96">
            <img
              src="../../public/images/login.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="max-w-md w-full flex-1 m-2 bg-white-300">
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
