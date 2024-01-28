

import { useContext, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialMediaLogin from "../../shared/SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await signIn(email, password);
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess('User login successful.');
      setError('');
      toast.success("User login successful.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setError(error.message);
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Password is incorrect");
          break;
        case "auth/user-not-found":
          toast.error("User not found with this email");
          break;
        default:
          toast.error(error.message);
          break;
      }
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      <div className="hero min-h-screen bg-red-100">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold text-red-500">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-red-500">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="p-3 rounded-lg bg-red-200 text-xl text-red-500 font-semibold">
                  Login
                </button>
              </div>
            </form>
            <div className='flex flex-col md:flex-row gap-2 mb-4 ml-8'>
              <SocialMediaLogin setSuccess={setSuccess} setError={setError}></SocialMediaLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;