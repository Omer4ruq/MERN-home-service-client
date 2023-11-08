import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../providers/AuthProvider";
import app from "../firebase/firebase.config";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    if (password.length < 6) {
      setRegisterError("Pasword should be at least 6 characters or longer");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pasword should be at least 6 characters or longer",
      });
      return;
    }
    // else if (!/[A_Z]/.test(password)) {
    //   setRegisterError("Password Must have An Upper Case Character");
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Password Must have An Upper Case Character",
    //   });
    //   return;
    // }
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setRegisterError("Password Must have atleast one spacial Character");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Must have atleast one spacial Character",
      });
      return;
    }
    setRegisterError("");
    setSuccess("");

    createUser(email, password, displayName, photoURL)
      .then((result) => {
        const user = result.user;
        console.log(result);
        updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL,
        });
        setSuccess("User Created Succesfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        // toast.error(registerError);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: setRegisterError,
        });
      });

    console.log(email, password, displayName);
  };
  return (
    <div>
      <Helmet>
        <title>Signup Page</title>
      </Helmet>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            name="displayName"
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            className="border p-3 rounded-lg "
          />
          <input
            type="text"
            placeholder="photo Url"
            name="photoURL"
            className="border p-3 rounded-lg "
          />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 mb-4">
            Sign up
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className=" bg-red-700 text-white p-3 rounded-lg w-[490px] uppercase hover:opacity-95"
        >
          continue with google
        </button>
        <div className="flex gap-2 mt-5">
          <p>Have an accouunt?</p>
          <Link to={"/login"}>
            <span className="text-blue-700">Login</span>
          </Link>
        </div>
        <div className="bg-red-700 border-2">
          {registerError && <p className="text-white">{registerError}</p>}
          {success && <p className="text-white">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
