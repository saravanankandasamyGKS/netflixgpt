import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const name = !isSignInForm && nameRef.current.value;
    const message = checkValidData(
      name,
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
                     dispatch(
                       addUser({
                         uid: uid,
                         email: email,
                         displayName: displayName,
                         photoURL: photoURL,
                       })
                     );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          //navigate("/browse");
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="backgroundlogo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-4 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm ? (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700  rounded-sm"
            />
            <input
              ref={emailRef}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-sm"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700  rounded-sm"
            />
          </>
        ) : (
          <>
            <input
              ref={emailRef}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-sm"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700  rounded-sm"
            />
          </>
        )}
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 rounded-sm w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now "
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
