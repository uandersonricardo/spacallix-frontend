import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid gap-8 items-start justify-center w-full">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-gray-100">Lançamento X</span>
            </span>
            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
              Visualizar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
