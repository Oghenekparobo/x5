import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import google from "../assets/auth/Google.png";
import facebook from "../assets/auth/Facebook.png";

const Auth = () => {
  return (
    <section>
      <header className="mx-auto px-8 my-10">
        <Link to="/">
          <div className="logo flex items-center space-x-2">
            <img src={logo} alt="logo" />
            <span className="text-custom-indigo font-bold text-xl">
              HelpMeOut
            </span>
          </div>
        </Link>
      </header>

      <section className="auth-section grid  grid-cols-1 place-items-center px-20 md:px-0">
        <div className="wrapper  px-20 md:px-0">
          <div className="auth-header__text">
            <h1 className="text-center text-black text-3xl font-bold tracking-wide">
              Log in or Sign up
            </h1>
            <p className="text-sm max-w-sm tracking-tight text-gray-400 text-center my-4">
              Join millions of others in sharing successful <br /> moves on
              <Link to="/">
                <span className="text-black"> HelpMeOut.</span>
              </Link>
            </p>
          </div>
          <div className="auth-header__options flex flex-col space-y-8 mt-6 ">
            <button className="google border border-gray-600 rounded-lg flex justify-evenly px-10 w-96 py-2 ">
              <span>
                <img src={google} alt="google png logo" />
              </span>
              <span className="track-wider font-bold">
                Continue with Google
              </span>
            </button>
            <button className="google border border-gray-600 rounded-lg flex justify-evenly px-10 w-96 py-2 ">
              <span>
                <img src={facebook} alt="google png logo" />
              </span>
              <span className="track-wider font-bold">
                Continue with Facebook
              </span>
            </button>
          </div>

          {/* divider */}

          <div className="flex items-center justify-center my-10">
            <span className="h-0.5 w-36 bg-gray-300"></span>{" "}
            <span className="px-4">or</span>
            <span className="h-0.5 w-36 bg-gray-300"></span>
          </div>

          {/* form */}

          <form>
            <div className="form-group flex flex-col">
              <label htmlFor="email" className="font-bold pb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="border border-gray-600 rounded-lg py-2 px-6"
              />
            </div>

            <div className="form-group flex flex-col my-4">
              <label htmlFor="email" className="font-bold pb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-600 rounded-lg py-2 px-6"
              />
            </div>

            {/* submit btn */}
            <Link to="/profile">
              <button
                type="submit"
                className="capitalize bg-indigo-950 py-2 text-white w-full rounded-md my-2"
              >
                sign up
              </button>
            </Link>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Auth;
