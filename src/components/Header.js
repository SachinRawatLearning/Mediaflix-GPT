import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { MEDIAFLIX_LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-36 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row  md:justify-between pl-5">
      <img
        className="w-20 h-15 mx-auto md:m-0"
        src={MEDIAFLIX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex py-6 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-6 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchCLick}
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img
            alt="userIcon"
            className="w-10 h-10 hidden md:inline-block"
            src={user.photoURL}
          />
          <button className="font-bold text-white m-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
