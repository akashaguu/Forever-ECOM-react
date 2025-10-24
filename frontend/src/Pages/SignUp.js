import React, { useState, useEffect } from "react";
import line2 from "../images/Rectangle 3605.png";
import Subscribe from "../component/Subscribe/Subscribe";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // ✅ Validate form fields
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // ✅ Handle registration
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/register",
      { name, email, password }
    );

    console.log("Response from backend:", response.data);

    if (response.data.success) {
      const token = response.data.token;
      const userid = response.data.id;

      localStorage.setItem("token", token);
      localStorage.setItem("userid", userid);
      setToken(token);
      console.log("Token in localStorage:", localStorage.getItem("token"));


      toast.success("Registered successfully!");

      // Wait a tiny moment before navigation to ensure localStorage updates
      setTimeout(() => navigate("/"), 100);
    } else {
      toast.error(response.data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Signup error:", error.response || error.message || error);
    toast.error(
      error.response?.data?.message || "Server error. Please try again later."
    );
  }
};


  // ✅ Redirect after successful signup
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <div className="w-[1150px] mx-auto border-t border-gray-600 mt-10">
        <div className="mt-16 flex justify-center items-center gap-2">
          <h2 className="text-2xl font-bold font-prata">Sign Up</h2>
          <img src={line2} alt="line2" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-center items-center mt-20"
        >
          <div>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-zinc-50 w-24 h-10 rounded-md mt-5"
          >
            Create
          </button>
        </form>

        <div className="flex justify-center items-center mt-5">
          <h2 className="text-sm font-outfit">
            If the user already exists
            <a href="/login" className="text-pink-500 ml-1">
              login here
            </a>
          </h2>
        </div>

        <div className="mt-96">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
