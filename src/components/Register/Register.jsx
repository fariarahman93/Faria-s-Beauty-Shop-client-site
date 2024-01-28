import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../components/providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    // Add your password validation logic here

    try {
      const result = await createUser(data.email, data.password);
      console.log(result.user);
      if (result.user) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
        await logOut();
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-red-100">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-3xl font-semibold text-red-500"> Welcome to Beauty Shop</h1>
            <h1 className="text-5xl font-bold text-red-500">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Your Name</span>
                </label>
                <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Your Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Your Phone</span>
                </label>
                <input type="number" {...register("phone")} placeholder="Your Phone" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Photo URL</span>
                </label>
                <input type="photo" {...register("photo")} placeholder="Your Photo URL" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Date</span>
                </label>
                <input type="date" {...register("date")} placeholder="Your Date" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Your Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters long.' },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                      message: 'Password must have one Uppercase, one lowercase, and one special character.',
                    },
                  })}
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <p className="text-red-600">{errors.password?.message}</p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-500 font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) => value === watch("password") || 'Passwords must match',
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                <p className="text-red-600">{errors.confirmPassword?.message}</p>
              </div>

              <div className="form-control mt-6">
                <button className="p-3 rounded-lg bg-red-200 text-xl text-red-500 font-semibold">Register</button>
              </div>
              <div className='mt-6 text-secondary-focus'>
                                    Already Have an Account?  <Link className='link link-hover text-red-700' to="/login">Login</Link>
                                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
