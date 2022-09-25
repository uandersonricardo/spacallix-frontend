import React from "react";

import HomeButton from "../components/pages/HomeButton";

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col justify-center">
      <h1 className="font-bold text-center text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-12 lg:mb-16">
        A plataforma definitiva de lançamentos da{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          SpaceX
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <HomeButton
          title="Próximo lançamento"
          description="Veja detalhes do próximo lançamento da SpaceX"
        />
        <HomeButton
          title="Último lançamento"
          description="Veja detalhes do último lançamento da SpaceX"
        />
        <HomeButton
          title="Próximos lançamentos"
          description="Veja detalhes do próximos lançamentos da SpaceX"
        />
        <HomeButton
          title="Lançamentos anteriores"
          description="Veja detalhes dos lançamentos anteriores da SpaceX"
        />
      </div>
    </div>
  );
};

export default HomePage;
