import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import pagePath from "../../Router/pagePath";
import { roleData } from "../../Data/roleData";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // ====fetch prev data=====
    let prevsData = JSON.parse(localStorage.getItem("userData")) || [];
    let newData = [...prevsData, data];
    // ====== set new data======
    localStorage.setItem("userData", JSON.stringify(newData));
    alert("Register successfully");
    navigate(pagePath.LOGIN);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              User Name
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter user name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("username", { required: "User name is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm mb-1">
              Role
            </label>
            <select
              id="role"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("role", {
                required: "Role is required",
              })}
            >
              <option value="">---Select Role---</option>
              {roleData.map((role, idx) => (

                <option key={idx} value={role}>{role}</option>
              ))}

            </select>

            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {/* Login Text */}
        <p
          onClick={() => navigate(pagePath.LOGIN)}
          className="text-center text-sm text-gray-600 mt-5"
        >
          Have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;