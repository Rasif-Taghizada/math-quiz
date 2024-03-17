import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signWithGoogle } = useAuth();
  let role = "user";

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "admin@gmail.com" && password === "admin123") role = "admin";
    const user = await signIn({ email, password, role });
    if (user) {
      if (role === "admin") {
        navigate("/admin");
        localStorage.setItem("role", "admin");
      } else {
        navigate("/");
        localStorage.setItem("role", "user");
      }
    }
    setLoading(false);
  };

  return (
    <form
      className="w-1/2 h-full mx-auto mt-20 p-4 bg-white rounded-md shadow-md"
      onSubmit={handleSignIn}
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div className="d-flex">
        <Link to="/auth/register">
          Don&apos;t have an account?{" "}
          <span className="text-blue-400">Register</span>
        </Link>
      </div>
      <div className="d-flex">
        <Link to="/auth/forgot-password">
          Forgot Password? <span className="text-blue-400">Reset</span>
        </Link>
      </div>
      <div>
        <button
          type="button"
          className="w-full p-2 mt-4 bg-[#dd4b39] text-white rounded-md bg-[#dd4b39] hover:bg-[#dd4b39]"
          onClick={async () => {
            signWithGoogle().then((user) => {
              if (user) {
                navigate("/");
                localStorage.setItem("role", "user");
              }
            });
          }}
        >
          Login with Google
        </button>
      </div>
      {loading ? (
        <button
          disabled
          type="button"
          className="text-white d-flex justify-center mt-4 w-[100%] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-blue-400 text-white rounded-md bg-blue-700 hover:bg-blue-800"
        >
          Login
        </button>
      )}
    </form>
  );
};
