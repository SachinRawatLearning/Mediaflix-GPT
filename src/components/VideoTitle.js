import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 py-3 text-xl rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 py-3 text-xl rounded-md bg-opacity-45">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
