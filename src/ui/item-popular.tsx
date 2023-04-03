export const ItemPopular = ({ text }: { text: string }) => {
  return (
    <div className="relative rounded-xl overflow-auto p-3 lg:w-1/4 w-full">
    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
      <img className="absolute -left-9 w-24 h-24 rounded-full shadow-lg" src="https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg"/>
      <div className="flex flex-col py-5 pl-24 ">
        <strong className="text-slate-900 text-sm ">Tensei Shitara Slime </strong>
        <span className="text-slate-500 text-sm  dark:text-slate-400">Chapter:</span>
        <span className="text-slate-500 text-sm  dark:text-slate-400">Date:</span>
      </div>
    </div>
  </div>
   
  );
};
