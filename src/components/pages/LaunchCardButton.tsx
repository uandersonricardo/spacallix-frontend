import React from "react";

import { TbRocket } from "react-icons/tb";
import { Link } from "wouter";

interface LaunchCardButtonProps {
  name: string;
  number: number;
  date: string;
  to: string;
}

const LaunchCardButton: React.FC<LaunchCardButtonProps> = ({
  to,
  name,
  date,
  number
}) => {
  return (
    <Link to={to}>
      <a className="group relative rounded-xl border border-slate-800 cursor-pointer text-left">
        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.pink.600)),var(--quick-links-hover-bg,theme(colors.pink.600)))_padding-box,linear-gradient(to_right,theme(colors.purple.600),theme(colors.pink.600),theme(colors.pink.600))_border-box] group-hover:opacity-100 [--quick-links-hover-bg:theme(colors.black)]"></div>
        <div className="relative overflow-hidden rounded-xl p-4 lg:p-6 flex flex-col justify-end items-start">
          <div className="w-full flex truncate items-center text-white font-bold text-xl md:text-2xl lg:text-3xl">
            <TbRocket className="mr-3" />
            <h2 className="items-center truncate flex-1">{name}</h2>
          </div>
          <p className="mt-1 text-slate-500 text-sm md:text-md lg:text-lg truncate max-w-full">
            Voo #{number}
            {" | "}
            {new Date(date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default LaunchCardButton;
