// src/components/Register.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, } from "../../firebase.init";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../AuthContex";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const { register } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };



  const handleRegisters = e => {
    e.preventDefault();
    e.stopPropagation();

    const name = e.target.name.value
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters long and include uppercase and lowercase letters.");
      return;
    }
    register(email, password, name, photo, name)
      .then(res => {
        console.log(res);
        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      })
  }

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleRegisters}>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full mb-4"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            name="email"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full mb-4"
            name="photo"

          />
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            className="input input-bordered w-full mb-4"
            name="password"
            required
          />
          <button type="button" onClick={(event) => {
            event.stopPropagation();
            setShowPass(!showPass);
          }} className="absolute mt-[15px] ms-[-25px]">
            {
              showPass ? <FaEyeSlash /> : <FaEye />

            }

          </button>

          <button type="submit" className="btn btn-primary w-full mb-4">Register</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full mb-4">
          Sign up with Google
        </button>
        <Link to="/login" className="text-blue-500">Already have an account? Login</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
