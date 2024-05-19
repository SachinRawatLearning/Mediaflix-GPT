import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import { auth } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonCLick = () => {
    //Validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : null
    );
    setErrorMessage(message);

    if (message) return;

    //Sign In / Sign Up
    if (!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const { user } = userCredentials;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYOhzCUj6pGm1zruz-Q4YzX78W3Cienb1j0sf4w_5-F5ZRtbZpAQu0F8WYGb3FFSV-t5OJuWYr-63sPLbA1CfigbGUosCJ4.png?r=0a4",
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            errorMessage = `Sorry, we can't find an account with this email address. Please try again`;
          }
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-sm"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        ></input>
        <p className="text-red-700 font-bold text-md">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-sm"
          onClick={handleButtonCLick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already an user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
