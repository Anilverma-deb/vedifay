import React from "react";

const Progress = () => {
  return (
    <div className="relative w-full h-1 bg-gray-300">
      <div className="h-full bg-[rgb(74,106,39)] animate-progress-bar"></div>

      <style>
        {`
          @keyframes progressBarAnimation {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress-bar {
            animation: progressBarAnimation 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Progress;
