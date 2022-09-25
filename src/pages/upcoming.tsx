import React, { useState } from "react";

import LaunchCardButton from "../components/pages/LaunchCardButton";
import LoadingMoreButton from "../components/pages/LoadingMoreButton";

const allLaunches = [
  {
    id: "63161339ffc78f3b8567070c",
    name: "Starlink 4-35 (v1.5)",
    date: "2022-09-24T23:30:00.000Z",
    number: 186
  },
  {
    id: "63161345ffc78f3b8567070d",
    name: "Starlink 4-36 (v1.5)",
    date: "2022-09-01T00:00:00.000Z",
    number: 186
  },
  {
    id: "62dd70d5202306255024d139",
    name: "Crew-5",
    date: "2022-10-03T16:45:00.000Z",
    number: 187
  }
];

const UpcomingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState([allLaunches[0]]);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      const page = currentPage + 1;

      setLoading(false);
      setCurrentPage(page);
      setLaunches([...launches, allLaunches[page - 1]]);
    }, 1000);
  };

  return (
    <div className="w-full flex-1 flex flex-col pb-4">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 lg:mb-8">
        Próximos{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          lançamentos
        </span>
      </h1>
      <div className="flex flex-col gap-y-4 mb-4">
        {launches.map(item => (
          <LaunchCardButton
            key={item.id}
            name={item.name}
            date={item.date}
            number={item.number}
            to={`/launches/${item.id}`}
          />
        ))}
      </div>
      {launches.length < allLaunches.length && (
        <LoadingMoreButton loading={loading} onClick={handleLoading} />
      )}
    </div>
  );
};

export default UpcomingPage;
