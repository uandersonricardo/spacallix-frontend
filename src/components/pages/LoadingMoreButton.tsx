import React from "react";

interface LoadingMoreButtonProps {
  loading?: boolean;
  onClick?: () => void;
}

const LoadingMoreButton: React.FC<LoadingMoreButtonProps> = ({
  loading = false,
  onClick = () => undefined
}) => {
  return (
    <button
      className="group relative rounded-xl border border-slate-800 cursor-pointer text-left"
      onClick={onClick}
      disabled={loading}
    >
      {!loading && (
        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.pink.600)),var(--quick-links-hover-bg,theme(colors.pink.600)))_padding-box,linear-gradient(to_right,theme(colors.purple.600),theme(colors.pink.600),theme(colors.pink.600))_border-box] group-hover:opacity-100 [--quick-links-hover-bg:theme(colors.black)]"></div>
      )}
      <div
        className={`relative overflow-hidden rounded-xl p-2 lg:p-4 flex flex-col justify-center items-center text-center ${
          loading ? "text-slate-400" : "text-white"
        }`}
      >
        {loading ? "Carregando..." : "Carregar mais"}
      </div>
    </button>
  );
};

export default LoadingMoreButton;
