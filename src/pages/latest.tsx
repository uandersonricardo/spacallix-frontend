import React from "react";

import { useQuery } from "@tanstack/react-query";

import LaunchDetailsCard from "../components/pages/LaunchDetailsCard";
import getLatestLaunch from "../requests/getLatestLaunch";

const LatestPage: React.FC = () => {
  const { isLoading, isError, data } = useQuery(
    ["getLatestLaunch"],
    async () => await getLatestLaunch()
  );

  return (
    <div className="w-full flex-1 flex flex-col pb-4">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 lg:mb-8">
        Último{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          lançamento
        </span>
      </h1>
      {isLoading ? (
        <div className="text-slate-400 w-full text-center text-lg">
          Carregando...
        </div>
      ) : isError ? (
        <div className="text-red-400 w-full text-center text-lg">
          Erro ao carregar informações
        </div>
      ) : (
        <LaunchDetailsCard launch={data} />
      )}
    </div>
  );
};

export default LatestPage;
