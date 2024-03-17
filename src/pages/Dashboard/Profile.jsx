import { useRef, useState } from "react";

import { auth } from "../../config/firebase";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

export const Profile = () => {
  const [userData, setUserData] = useState({
    displayName: "" || auth?.currentUser?.displayName,
    email: "" || auth?.currentUser?.email,
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });
  const [image, setImage] = useState(auth?.currentUser?.photoURL || null);
  const imageRef = useRef(null);
  const {
    updateProfileCall,
    uploadImage,
    updateEmailCall,
    updatePasswordCall,
    verifyEmail,
  } = useAuth();

  const handleUpdatePassword = async () => {
    if (userData.password !== userData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      console.log("userData.password", userData.password);
      await updatePasswordCall(userData.password);
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      if (image) await uploadImage(image);
      if (userData?.displayName && userData.phone) {
        await updateProfileCall(userData);
        toast.success("Profile updated successfully");
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-start justify-between">
        <div className="w-[150px] ">
          <h2 className="text-xl font-semibold text-gray-800">
            Profile Picture
          </h2>
          <div className="grid grid-cols-2 gap-2 mt-4 w-sm">
            <img
              ref={imageRef}
              src={
                auth?.currentUser?.photoURL
                  ? auth?.currentUser?.photoURL
                  : "/blank_profile.jpeg"
              }
              alt="user"
              className="
               col-start-1 col-end-2 row-start-1 row-end-3 rounded-full object-cover border-2 border-blue-600 h-20 w-20"
            />
            <label
              htmlFor="profile-picture"
              className="text-center cursor-pointer col-start-2 col-end-3 row-start-2 row-end-3 text-sm font-medium text-blue-600 border border-blue-600 rounded-md py-1 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Upload
              <input
                id="profile-picture"
                type="file"
                className="hidden"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  imageRef.current.src = URL.createObjectURL(e.target.files[0]);
                }}
              />
            </label>
            <button
              className="
            col-start-2 col-end-3 row-start-1 row-end-2 text-sm font-medium text-red-600 border border-red-600 rounded-md py-1 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out 
            "
              onClick={() => {
                toast.error("Profile picture removed");
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div>
          <button
            className={
              auth?.currentUser?.emailVerified
                ? "hidden"
                : "bg-green-600 text-white rounded-md p-2"
            }
            onClick={() => {
              verifyEmail(auth?.currentUser?.email);
            }}
          >
            Verify Email
          </button>
        </div>
      </div>

      <div className="w-full mb-7 mt-5">
        <div className="flex justify-between gap-x-4 mb-2">
          <div className="w-1/2">
            <label htmlFor="">UserName</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md"
              value={userData?.displayName}
              onChange={(e) =>
                setUserData({ ...userData, displayName: e.target.value })
              }
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userData?.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="">
          <button
            className="w-full bg-blue-600 text-white rounded-md p-2"
            onClick={handleUpdateProfile}
          >
            Save Profile Picture and Details
          </button>
        </div>
      </div>

      <div className="w-full mb-7">
        <div className="flex justify-between gap-x-4 mb-2">
          <div className="w-1/2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userData?.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userData?.confirmPassword}
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-start-1 col-end-3">
          <button
            className="w-full bg-blue-600 text-white rounded-md p-2"
            onClick={handleUpdatePassword}
          >
            Change Password
          </button>
        </div>
      </div>

      <div className="w-full mb-7">
        <div className="flex justify-between items-end gap-x-4 mb-2">
          <div className="w-1/2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              value={userData?.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="w-1/2">
            <button
              className="w-full bg-blue-600 text-white rounded-md p-2"
              onClick={() => {
                updateEmailCall(userData.email);
              }}
            >
              Change Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
