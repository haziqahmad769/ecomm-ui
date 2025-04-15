import React from "react";

const SignupPage = () => {
  return (
    <div className=" flex flex-col items-center p-4">
      <div className=" flex flex-col my-4">
        <form action="" className=" flex flex-col gap-4">
          <div className=" flex flex-col rounded-md card bg-white shadow-lg p-4">
            <h2 className=" text-gray-700 text-lg font-semibold mb-2">
              Signup
            </h2>

            {/* name */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value=""
                onChange=""
                placeholder="Name"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value=""
                onChange=""
                placeholder="Email"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value=""
                onChange=""
                placeholder="Password"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* button */}
            <button className="btn bg-rose-500 text-white hover:bg-rose-600 w-full rounded-md">
              Signup
            </button>

            {/*  */}
          </div>
        </form>

        {/* signup */}
        <div className=" flex flex-col items-center gap-2 m-2">
          <p className=" text-gray-500 text-md">Already have an account?</p>
          <button className="btn border-rose-500 text-rose-500 font-light hover:bg-rose-600 w-full hover:text-white hover:font-semibold rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
