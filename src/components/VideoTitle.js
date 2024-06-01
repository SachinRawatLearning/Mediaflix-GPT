import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="pl-6 md:pl-0 text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="ml-6 md:ml-0 bg-white text-black py-2 md:py-3 px-3 md:px-12 text-xl rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 py-3 text-xl rounded-md bg-opacity-45">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
