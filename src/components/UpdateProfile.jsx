import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../AuthContex";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(user, { displayName: name, photoURL });
      alert("Profile updated successfully!");
      navigate("/my-profile");
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl">Update Profile</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
                className="input input-bordered"
              />
            </div>

            {/* Name Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            {/* Update Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
