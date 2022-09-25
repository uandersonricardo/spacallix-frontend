import React from "react";

interface HomeButtonProps {
  title: string;
  description: string;
  to?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, description }) => {
  return (
    <button className="group relative rounded-xl border border-slate-800 cursor-pointer text-left">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.pink.600)),var(--quick-links-hover-bg,theme(colors.pink.600)))_padding-box,linear-gradient(to_right,theme(colors.purple.600),theme(colors.pink.600),theme(colors.pink.600))_border-box] group-hover:opacity-100 [--quick-links-hover-bg:theme(colors.black)]"></div>
      <div className="relative overflow-hidden rounded-xl p-6 h-48 flex flex-col justify-end items-start">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
          {title}
        </h2>
        <p className="mt-1 text-slate-500 text-sm md:text-md lg:text-lg">
          {description}
        </p>
      </div>
    </button>
  );
};

export default HomeButton;
