import React from "react";

import LaunchDetailsCard from "../components/pages/LaunchDetailsCard";
import { Launch } from "../types/launch";

const launch: Launch = {
  id: "63161339ffc78f3b8567070c",
  name: "Starlink 4-35 (v1.5)",
  flightNumber: 186,
  date: "2022-09-24T23:30:00.000Z",
  details: null,
  success: true,
  failures: [
    {
      time: 140,
      altitude: 35,
      reason:
        "residual stage-1 thrust led to collision between stage 1 and stage 2"
    },
    {
      time: 140,
      altitude: 35,
      reason:
        "residual stage-1 thrust led to collision between stage 1 and stage 2"
    }
  ],
  links: {
    patch: {
      small: "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
      large: "https://images2.imgbox.com/e3/cc/hN96PmST_o.png"
    },
    reddit: {
      campaign:
        "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
      launch:
        "https://www.reddit.com/r/spacex/comments/xn028t/rspacex_starlink_435_launch_discussion_and/",
      media: null,
      recovery:
        "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
    },
    flickr: {
      small: [],
      original: [
        "https://farm3.staticflickr.com/2922/33578359423_4169ac8f98_o.jpg",
        "https://farm3.staticflickr.com/2900/33578357343_85c247ebce_o.jpg",
        "https://farm5.staticflickr.com/4166/34006001860_8c45f28e69_o.jpg",
        "https://farm5.staticflickr.com/4166/34005999880_77684dba4b_o.jpg",
        "https://farm3.staticflickr.com/2934/34005998140_c77076b6fb_o.jpg",
        "https://farm5.staticflickr.com/4191/34005996220_fe9e4342d3_o.jpg",
        "https://farm3.staticflickr.com/2883/33575654563_699c544776_o.jpg",
        "https://farm3.staticflickr.com/2902/33575652913_0dece34db4_o.jpg",
        "https://farm5.staticflickr.com/4163/33575651063_24e05826c5_o.jpg",
        "https://farm3.staticflickr.com/2876/33994851620_fabd14770f_o.jpg",
        "https://farm3.staticflickr.com/2832/33973172140_b370b79c51_o.jpg",
        "https://farm3.staticflickr.com/2874/34357262105_11b417bea2_o.jpg",
        "https://farm5.staticflickr.com/4158/34357260545_16870a94ba_o.jpg"
      ]
    },
    presskit: null,
    webcast: "https://youtu.be/VVu2bSJJhgI",
    youtubeId: "VVu2bSJJhgI",
    article: null,
    wikipedia: null
  }
};

const NextPage: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col pb-4">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 lg:mb-8">
        Próximo{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          lançamento
        </span>
      </h1>
      <LaunchDetailsCard launch={launch} />
    </div>
  );
};

export default NextPage;
