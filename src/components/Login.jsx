import React, { useContext, useState } from "react";
import { auth,  } from "../../firebase.init";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../AuthContex";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { login } = useContext(AuthContextProvider);
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgetPassword = () => {
    navigate('/forgot-password', { state: { email } });
  };


  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
       login(email, password)
       .then(res => {
        console.log(res);
        toast.success("Registration Successful!");
        navigate("/");
    })
    .catch(error => {
        console.log(error);
        toast.error(error.message);
    })
};
      
      

  // Google Sign-In Handler
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful!");
      navigate("/"); 
    } catch (error) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              required
            />
          </div>
          
          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              name="password"
              required
            />
            <label className="label">
              <button onClick={handleForgetPassword} className="label-text-alt link link-hover">
                Forgot Password?
              </button>
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login Button */}
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
