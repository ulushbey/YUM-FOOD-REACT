import React from "react";

const Loader = () => {
  return (
    <div
      id="preloader"
      className="fixed inset-0 z-70 bg-default-50 transition-all visible opacity-100 h-screen w-screen flex items-center justify-center"
    >
      <div
        className="animate-spin inline-block w-10 h-10 border-4 border-t-transparent border-primary rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
