import { GroupStyle } from "@/ui/group-stype";
import {
  BookmarkIcon,
  HeartIcon,
  QueueListIcon,
  TagIcon,
} from "@heroicons/react/20/solid";

export default function Info() {
  return (
    <main className="px-2 mt-5">
      <div className="mt-1 first:mt-0 last:mb-0 relative overflow-hidden rounded-sm ">
        <div className="pt-1 shadow-lg group">
          <div className="flex text-slate-400">
            <div className="flex-1 text-xl text-white font-semibold border-t border-b border-t-transparent border-b-sky-300  first-letter:text-2xl">
              Tensei Shitara Slime Datta Ken
            </div>
            <div className="grid lg:grid-cols-4 flex-1 border-t border-b border-t-transparent border-b-sky-300 font-thin">
              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
                <BookmarkIcon className="block w-6 text-gray-400" /> SUBSCRIBE
              </button>
              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
                <HeartIcon className="block w-6 text-gray-400" /> FAVORITE
              </button>

              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
               <TagIcon className="block w-6 text-gray-400" /> READ LATER
              </button>

              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
                <QueueListIcon className="block w-6 text-gray-400" /> COLLECTION
              </button>
            </div>
          </div>
          <h3>転生したらスライムだった件</h3>
          {/* Tab */}
          <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
            <li>
              <h2>
                <a
                  className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current"
                  href="/"
                >
                  SUMMARY
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px border-transparent hover:border-slate-300  dark:hover:border-slate-700"
                  href="/"
                >
                 COMMENTS
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px  border-transparent hover:border-slate-300  dark:hover:border-slate-700"
                  href="/"
                > SHARE
                </a>
              </h2>
            </li>
            
          </ul>
          {/**Info */}
          
        </div>
      </div>
    </main>
  );
}
