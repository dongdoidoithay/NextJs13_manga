import ImageLoading from "@/ui/ImageLoading";
import { GroupStyle } from "@/ui/group-stype";
import {
  BookmarkIcon,
  CalendarIcon,
  ChevronRightIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  QueueListIcon,
  TagIcon,
} from "@heroicons/react/20/solid";

export default function Info() {
  return (
    <main className="px-2 mt-10 xs:mt-14">
      <div id="wapper">
        <div id="breadcrumb" className="group block xs:hidden font-semibold">
          <ol className="list-outside list-none flex flex-wrap gap-1">
            <li className="flex flex-row flex-nowrap">
              <HomeIcon className="block w-6 text-gray-400 mx-1" />
              <a href="/">Home</a>
            </li>
            <li className="flex flex-row flex-nowrap">
              <ChevronRightIcon className="block w-4 text-gray-400 mx-1" />
              <a href="#"> type Manga </a>
            </li>
            <li className="flex flex-row">
              <ChevronRightIcon className="block w-4 text-gray-400 mx-1" /> Info
              Manga
            </li>
          </ol>
        </div>
        <div id="info">
          <div className="flex flex-wrap flex-col sm:flex-row">
            <div id="name-info" className="flex-0 text-xl">
              <h1 className="font-semibold first-letter:text-2xl text-white/80">
                Tensei Shitara Slime Datta Ken
              </h1>
              <h2 className="text-sm">転生したらスライムだった件</h2>
            </div>
            {/** dday len hang tren / flex-1 /  */}
            <div id="action-info" className="flex  gap-1 font-semibold my-1">
              <button
                type="button"
                className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800 hover:text-white h-9"
              >
                <BookmarkIcon className="inline w-6 text-gray-400" /> Subscribe
              </button>
              <button
                type="button"
                className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800 hover:text-white h-9"
              >
                <HeartIcon className="inline w-6 text-gray-400" /> Favorite
              </button>

              <button
                type="button"
                className=" px-2 sm:text-sm bg-slate-700 hover:bg-slate-800 hover:text-white h-9"
              >
                <TagIcon className="inline w-6 text-gray-400" /> Read Later
              </button>
              <button
                type="button"
                className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800 hover:text-white h-9"
              >
                <QueueListIcon className="inline w-6 text-gray-400" />{" "}
                Collection
              </button>
            </div>
          </div>
        </div>
        <div id="chapter">
          <div className="flex flex-wrap flex-col sm:flex-row text-sm">
            <div className="w-full sm:w-1/4 bg-slate-900/60">
              <div className="box-content border-2 rounded mr-4">
                <div className="object-cover w-full h-48 bg-cover bg-no-repeat bg-center bg-[url(https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg)]">
                  {/* <ImageLoading url={"https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg"} title={"oke"} /> */}
                  {/*  <img src="/loading.gif" className=""/> */}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-3/4 bg-slate-900/60">
              <div id="desc-inf ml-1 overflow">
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">SUMMARY</h3>
                  <p className="sx:text-xs lg:text-md first-letter:text-lg first-letter:font-semibold"> The journey to the martial peak is a lonely, solitary and long one.In the face of adversity,you must survive and remain unyielding.Only then can you break through and and continue on your journey to become the strongest. Sky Tower tests its disciples in the harshest ways to prepare them for this journey.One day the lowly sweeper Yang Kai managed to obtain a black book, setting him on the road to the peak of the martials world. </p>
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">Genres</h3>
                  <div className="flex flex-row flex-nowrap">
                      <HashtagIcon className="w-2 inline"/><a href="#" className="first-letter:uppercase pr-1 hover:text-white  hover:font-semibold">action</a>
                      <HashtagIcon className="w-2 inline"/><a href="#" className="first-letter:uppercase pr-1 hover:text-white  hover:font-semibold">adventure</a>
                  </div>
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">release</h3>
                      <CalendarIcon className="w-2 inline"/><a href="#" className="first-letter:uppercase pr-1 hover:text-white  hover:font-semibold"> 2019</a>
              </div>
            </div>
          </div>
        </div>
        <div id="comments"></div>
      </div>
    </main>
  );
}
