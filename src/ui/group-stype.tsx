import clsx from "clsx";

export const GroupStyle = ({
  children,
  labels
}: {
  children: React.ReactNode;
  labels?: string;
}) => {
  return (
    <div className="mt-1 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-sm ">
      <div className="pt-1 shadow-lg group">
        {labels&&<div className="flex text-slate-400 text-lg leading-6">
          <div className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
            {labels}
          </div>

        </div>}
        <div className="children:my-0 children:!shadow-none children:bg-transparent">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset"  aria-hidden="true"></div>
    </div>
  );
};
