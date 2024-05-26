import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { NETFLIX_LOGO } from "./utils/constants";
import { toggleGptSearchView } from "./utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchCLick = () => {
    //Toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-36 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex py-6">
          <button
            className="py-2 px-4 mx-6 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchCLick}
          >
            GPT Search
          </button>
          <img alt="userIcon" className="w-10 h-10" src={user.photoURL} />
          <button className="font-bold text-white m-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
