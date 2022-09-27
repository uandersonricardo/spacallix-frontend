import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import LaunchCardButton from "../components/pages/LaunchCardButton";
import LoadingMoreButton from "../components/pages/LoadingMoreButton";
import getPaginatedLaunches from "../requests/getPaginatedLaunches";

const defaultOptions = {
  perPage: 5,
  upcoming: true
};

const UpcomingPage: React.FC = () => {
  const { status, isFetchingNextPage, fetchNextPage, data, hasNextPage } =
    useInfiniteQuery(
      ["getPaginatedLaunches", defaultOptions],
      async ({ pageParam }) =>
        await getPaginatedLaunches({ ...defaultOptions, page: pageParam }),
      {
        getNextPageParam: lastPage =>
          lastPage.page < lastPage.pageCount ? lastPage.page + 1 : undefined
      }
    );

  return (
    <div className="w-full flex-1 flex flex-col pb-4">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 lg:mb-8">
        Próximos{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          lançamentos
        </span>
      </h1>
      {status === "loading" ? (
        <div className="text-slate-400 w-full text-center text-lg">
          Carregando...
        </div>
      ) : status === "error" ? (
        <div className="text-red-400 w-full text-center text-lg">
          Erro ao carregar informações
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-y-4 mb-4">
            {data.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.items.map(item => (
                  <LaunchCardButton
                    key={item.id}
                    name={item.name}
                    date={item.date}
                    number={item.flightNumber}
                    to={`/${item.id}`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          {hasNextPage && (
            <LoadingMoreButton
              loading={isFetchingNextPage}
              onClick={async () => await fetchNextPage()}
            />
          )}
        </>
      )}
    </div>
  );
};

export default UpcomingPage;
