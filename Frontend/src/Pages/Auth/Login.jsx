import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import pagePath from "../../Router/pagePath";


function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  const onSubmit = (data) => {
  const registerList = JSON.parse(localStorage.getItem("userData")) || [];

  const isExist = registerList.find(
    (user) =>
      (user.email === data.identifier || user.phone === data.identifier) &&
      user.password === data.password
  );

  if (!isExist) {
    alert("Invalid email/phone or password");
    return;
  }

  // store logged user
  localStorage.setItem("loggedUser", JSON.stringify(isExist));

  // role based redirect
  if (isExist.role === "Admin") {
    navigate(pagePath.ADMIN);
  } else {
    navigate(pagePath.EMPLOYEE);
  }
  reset();
};
  // const usersData =  JSON.parse(localStorage.getItem("userData")) || [];
  // const userData = [...usersData, data ]
  // localStorage.setItem("UserData", JSON.stringify([userData]))
  // navigate("/")
  // reset()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email or Phone */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email or Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter email or phone number"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("identifier", {
                required: "Email or phone number is required",
                validate: (value) =>
                  emailRegex.test(value) ||
                  phoneRegex.test(value) ||
                  "Enter a valid email or phone number",
              })}
            />

            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition duration-200 font-medium"
          >
            Login
          </button>

        </form>

        <p onClick={() => navigate(pagePath.REGISTER)} className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;