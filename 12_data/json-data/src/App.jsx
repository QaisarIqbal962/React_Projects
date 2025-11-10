import { useForm } from "react-hook-form";
import { useState } from "react";
import logo from "./assets/ryvelogo2.png";
// Reusable InputField component
const InputField = ({ label, type, placeholder, register, error }) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-700 font-medium text-sm md:text-base">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className={`border rounded-lg  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557] text-sm md:text-base ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

// Reusable Button component
const Button = ({ title, loading, disabled }) => (
  <button
    type="submit"
    disabled={disabled || loading}
    className="w-full bg-[#1D3557]
  text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? "Signing in..." : title}
  </button>
);

const App = () => {
  // No react-router installed in this project by default.
  // Use a simple fallback navigator that logs the path.
  const navigate = (path) => {
    console.log("navigate to", path);
  };
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Replace this with your signup API call
      console.log("Signup data:", data);
      navigate("/dashboard"); // redirect after signup
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 sm:p-6 md:p-8 lg:p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-[420px] flex flex-col gap-8"
        autoComplete="on"
      >
        {/* Logo and Heading Section */}
        <div className="flex flex-col items-center gap-12">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Ryve Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          <div className="text-center flex flex-col gap-6">
            <h2 className="text-[34px] sm:text-3xl text-[#1D3557] font-bold">
              Claims Console
            </h2>
            <p className="text-[#1D3557] text-sm font-semibold sm:text-base">
              Sign in to continue
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-">
          <InputField
            type="email"
            placeholder="Email Address"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />

          <InputField
            type="password"
            placeholder=" Password"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />
        </div>

        {/* Signin Button */}
        <Button title="Sign In" loading={loading} disabled={loading} />

        {/* Checkbox + Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-[#474545] hover:text-gray-800">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-[#1D3557] focus:ring-[#1D3557] cursor-pointer"
            />
            Remember me
          </label>
          <button
            type="button"
            className="text-[#1D3557] font-semibold  cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        {/* Horizontal line */}
        <hr className="border-[#585858] my-6 "/>

        {/* Support */}
        <p className="text-center text-[#1D3557] text-sm sm:text-base font-medium">
          Need help?{" "}
          <a href="#" className="font-semibold">
            Contact Ryve Support
          </a>
        </p>
      </form>
    </div>
  );
};

export default App;
