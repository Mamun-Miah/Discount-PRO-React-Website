import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../AuthContex";

const MyProfile = () => {
  const { user } = useContext(AuthContextProvider);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update-profile");
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center">
      {/* Cover Section */}
      <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">
          Welcome, {user?.displayName || "User"}!
        </h1>
      </div>

      {/* Profile Card */}
      <div className="card w-96 bg-base-100 shadow-xl mt-8">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="rounded-full w-32 h-32"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName || "Name not set"}</h2>
          <p className="text-gray-500">{user?.email || "Email not available"}</p>
          <div className="card-actions mt-4">
            <button
              onClick={handleUpdateClick}
              className="btn btn-primary w-full"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
