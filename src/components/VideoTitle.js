import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-gray">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-3/4">{overview}</p>
      <div>
        <button className="mx-2 bg-white text-black p-2 px-12 m text-lg rounded-lg hover:opacity-80">
          ▶︎ Play
        </button>
        <button className="bg-white mx-2 text-black p-2 px-12 text-lg hover:bg-opacity-50 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
