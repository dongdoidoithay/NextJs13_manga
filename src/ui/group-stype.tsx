import clsx from "clsx";

export const GroupStyle = ({
  children,
  labels = ["children"],
  size = "default",
  color = "default",
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: "small" | "default";
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
  animateRerendering?: boolean;
}) => {
  return (
    <div className="mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl">
      <div className="pt-2 bg-slate-800 shadow-lg group">
        <div className="flex text-slate-400 text-xs leading-6">
          <div className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
            tailwind.config.js
          </div>
          <div className="flex-auto flex items-center bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
        </div>
        <div className="children:my-0 children:!shadow-none children:bg-transparent">
          {children}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset"
        aria-hidden="true"
      ></div>
    </div>
  );
};
