import React from "react";

import { TbLink } from "react-icons/tb";

import { Launch } from "../../types/launch";
import { getLinks } from "../../utils/launch";

interface LaunchDetailsCardProps {
  launch: Launch;
}

const LaunchDetailsCard: React.FC<LaunchDetailsCardProps> = ({ launch }) => {
  const links = getLinks(launch.links);

  return (
    <div className="text-white border border-slate-800 rounded-lg">
      <div className="flex items-center border-b border-slate-800 p-6">
        <img
          src={launch.links.patch.small ?? "https://logodix.com/logo/357.png"}
          className="w-28 h-28"
          alt={launch.name}
        />
        <div className="flex flex-col justify-center ml-4 overflow-hidden">
          <h2 className="text-3xl font-bold break-words">{launch.name}</h2>
          <p className="text-lg text-slate-400">
            Resultado:{" "}
            {launch.success === true ? (
              <span className="text-green-400 font-bold">Sucesso</span>
            ) : launch.success === false ? (
              <span className="text-red-400 font-bold">Falha</span>
            ) : (
              <span className="text-yellow-400 font-bold">Não definido</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Detalhes (em inglês)</h3>
          <p className="text-lg text-slate-400">
            {launch.details ?? "Nenhum detalhe disponível"}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Data</h3>
          <p className="text-lg text-slate-400">
            {new Date(launch.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric"
            })}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Falhas</h3>
          <p className="text-lg text-slate-400">
            {launch.failures && launch.failures.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {launch.failures?.map((failure, index) => (
                  <li key={index} className="border-l-4 border-slate-500 pl-3">
                    <p className="text-lg text-slate-400">
                      <span className="font-bold">Tempo: </span>
                      {failure.time} segundos
                    </p>
                    <p className="text-lg text-slate-400">
                      <span className="font-bold">Altitude: </span>
                      {failure.altitude} km
                    </p>
                    <p className="text-lg text-slate-400">
                      <span className="font-bold">Motivo (em inglês): </span>
                      {failure.reason}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              "Nenhuma falha"
            )}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Imagens</h3>
          <p className="text-lg text-slate-400">
            {launch.links?.flickr.original.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {launch.links.flickr.original.map(image => (
                  <a href={image} key={image} target="_blank" rel="noreferrer">
                    <img
                      src={image}
                      className="w-auto h-36 rounded-lg"
                      alt={launch.name}
                    />
                  </a>
                ))}
              </div>
            ) : (
              "Nenhuma imagem disponível"
            )}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Links</h3>
          <p className="text-lg text-slate-400">
            {links.length > 0 ? (
              <>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-500 hover:text-pink-600 flex items-center"
                  >
                    <TbLink className="mr-2" />
                    {link.title}
                  </a>
                ))}
              </>
            ) : (
              "Nenhum link disponível"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetailsCard;
