import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createNewUser } = useContext(AuthContext);

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confPassword = form.ConfPassword.value;

    createNewUser(email, password)
      .then((userCredential) => {
        form.reset();
        console.log(userCredential.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-center text-4xl font-normal">Sign up</h3>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="ConfPassword"
                  required
                />
                <label className="label">
                  Al ready have an account?
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-orange-300 ml-3"
                  >
                    Log in
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
