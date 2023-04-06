import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  BookmarkIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  QueueListIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Info() {
  return (
    <main className="px-2 mt-5 xs:mt-14  bg-slate-900/60">
      <div id="wapper">
        <div id="breadcrumb" className="group block xs:hidden font-semibold mb-4">
          <ol className="list-outside list-none flex flex-wrap gap-1">
            <li className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400">
              <HomeIcon className="block w-6 mx-1" />
              <a href="/" className="hover:text-sky-500 dark:hover:text-sky-400">Home</a>
            </li>
            <li className="flex flex-row flex-nowrap  hover:text-sky-500 dark:hover:text-sky-400">
              <ChevronRightIcon className="block w-4 mx-1" />
              <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400"> type Manga </a>
            </li>
            <li className="flex flex-row">
              <ChevronRightIcon className="block w-4 text-gray-400 mx-1" /> Info
              Manga
            </li>
          </ol>
        </div>
        <div id="info" className="my-2 mr-2">
          <div className="flex flex-wrap flex-col sm:flex-row">
            <div id="name-info" className="flex-1 text-2xl">
              <h1 className="font-semibold first-letter:text-3xl text-white/80">
                Tensei Shitara Slime Datta Ken
              </h1>
              <h2 className="text-sm">転生したらスライムだった件</h2>
            </div>
            {/** dday len hang tren / flex-1 /  */}
            <div id="action-info" className="flex flex-wrap gap-1 font-semibold my-1 items-center">
              <button
                type="button"
                className="px-2  xs:text-xs sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9"
              >
                <BookmarkIcon className="inline w-6 xs:w-2" /> Subscribe
              </button>
              <button
                type="button"
                className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9"
              >
                <HeartIcon className="inline w-6" /> Favorite
              </button>

              <button
                type="button"
                className=" px-2 sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9"
              >
                <TagIcon className="inline w-6 " /> Read Later
              </button>
              <button
                type="button"
                className="px-2 sm:text-sm bg-slate-700 hover:bg-slate-800  hover:text-sky-500 dark:hover:text-sky-400 h-9"
              >
                <QueueListIcon className="inline w-6" />{" "}
                Collection
              </button>
            </div>
          </div>
        </div>
        <div id="info-act" className="mr-2">
          <div className="flex flex-wrap flex-col sm:flex-row text-sm">
            <div className="w-full sm:w-1/4">
              <div className="box-content border-2 rounded mr-4">
                <div className="object-cover w-full h-48 bg-cover bg-no-repeat bg-center bg-[url(https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg)]">
                  {/* <ImageLoading url={"https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg"} title={"oke"} /> */}
                  {/*  <img src="/loading.gif" className=""/> */}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-3/4 xs:hidden">
              <div className="ml-1 overflow">
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">SUMMARY</h3>
                  <p className="sx:text-xs lg:text-md first-letter:text-lg first-letter:font-semibold break-word overflow-hidden first-line:uppercase"> The journey to the martial peak is a lonely, solitary and long one.In the face of adversity,you must survive and remain unyielding.Only then can you break through and and continue on your journey to become the strongest. Sky Tower tests its disciples in the harshest ways to prepare them for this journey.One day the lowly sweeper Yang Kai managed to obtain a black book, setting him on the road to the peak of the martials world. </p>
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">Genres <HashtagIcon className="w-2 inline"/></h3>
                  <div className="flex flex-row flex-nowrap">
                      <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1 hover:font-semibold after:content-[',']">action</a>
                      <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1 hover:font-semibold after:content-[',']">adventure</a>
                  </div>
                  <h3 className="font-semibold text-white/80 first-letter:uppercase">release <HashtagIcon className="w-2 inline"/></h3>
                      <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1 hover:font-semibold before:content-['_↗']"> 2019</a>
              </div>
            </div>
          </div>
        </div>
        <div id="chapter-list" className="">
          <div id="header-list" className="flex flex-row h-8 my-3">
             <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['≣_'] mr-3">List Chapters</h3>
             <b>Tensei Shitara Slime Datta Ken</b>
          </div>
          <div id="search-chapter" className="flex flex-row h-8 my-2 mr-2">
            <input className="flex-1 mr-4 text-sm text-white leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-4 pr-3  dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" placeholder="Search Chapter. Example: 25 or 178" />
            <a href="#"> <BarsArrowUpIcon className="w-6 inline"/><BarsArrowDownIcon className="w-6 inline"/> Sort</a>
          </div>   
          {/** co thoi gian sua dang gird */}
          <div className="flex flex-wrap flex-row">
              <div className="w-1/2 md:w-1/4"> 
                <Link href={'#'} title="Chapter-x" className="mr-2 hover:text-sky-500 dark:hover:text-sky-400 flex border border-slate-700 rounded border-curent hover:border-sky-500 dark:hover:border-sky-400 p-1" >
                    <CheckCircleIcon className="w-4 inline " />
                    <div className="flex-0">
                      <p className="ml-3 font-semibold first-letter:uppercase gap-2">
                        <RectangleGroupIcon className="w-4 inline"/> Chapter 01</p>
                      <i className="ml-3">Date: 2 day</i>
                    </div>
                </Link>
              </div>
              <div className="w-1/2 md:w-1/4"> 
                <Link href={'#'} title="Chapter-x" className="mr-2 hover:text-sky-500 dark:hover:text-sky-400 flex border border-slate-700 rounded border-curent hover:border-sky-500 dark:hover:border-sky-400 p-1" >
                    <CheckCircleIcon className="w-4 inline " />
                    <div className="flex-0">
                      <p className="ml-3 font-semibold first-letter:uppercase gap-2">
                        <RectangleGroupIcon className="w-4 inline"/> Chapter 01</p>
                      <i className="ml-3">Date: 2 day</i>
                    </div>
                </Link>
              </div>
              <div className="w-1/2 md:w-1/4"> 
                <Link href={'#'} title="Chapter-x" className="mr-2 hover:text-sky-500 dark:hover:text-sky-400 flex border border-slate-700 rounded border-curent hover:border-sky-500 dark:hover:border-sky-400 p-1" >
                    <CheckCircleIcon className="w-4 inline " />
                    <div className="flex-0">
                      <p className="ml-3 font-semibold first-letter:uppercase gap-2">
                        <RectangleGroupIcon className="w-4 inline"/> Chapter 01</p>
                      <i className="ml-3">Date: 2 day</i>
                    </div>
                </Link>
              </div>
              <div className="w-1/2 md:w-1/4"> 
                <Link href={'#'} title="Chapter-x" className="mr-2 hover:text-sky-500 dark:hover:text-sky-400 flex border border-slate-700 rounded border-curent hover:border-sky-500 dark:hover:border-sky-400 p-1" >
                    <CheckCircleIcon className="w-4 inline " />
                    <div className="flex-0">
                      <p className="ml-3 font-semibold first-letter:uppercase gap-2">
                        <RectangleGroupIcon className="w-4 inline"/> Chapter 01</p>
                      <i className="ml-3">Date: 2 day</i>
                    </div>
                </Link>
              </div>
           
          </div>
          <div id="next-prev" className="my-3 flex flex-row gap-2 mr-2" >
            <Link href={'#'} title="Chapter-x" className="w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400" >
              <ChevronLeftIcon className="w-4 inline " />
              <b className="ml-3 font-semibold first-letter:uppercase">Prev Chapter</b>
            </Link>
            <Link href={'#'} title="Chapter-x" className="w-1/2 block border border-slate-700 rounded p-2 text-center  hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400" >
              <b className="mr-3 font-semibold first-letter:uppercase">Next Chapter</b>
              <ChevronRightIcon className="w-4 inline " />
            </Link>
          </div>        
        </div>
        <div id="info-more" className="w-full bg-slate-900/70 ">
          <div className="ml-1 overflow">
              <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">Info other </h3>
              <h3 className="font-semibold text-white/80 first-letter:uppercase">Auths <HashtagIcon className="w-2 inline"/></h3>
              <div className="flex flex-row flex-nowrap">
                  <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1 hover:font-semibold after:content-[',']">action</a>
                  <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1  hover:font-semibold after:content-[',']">adventure</a>
              </div>
              <h3 className="font-semibold text-white/80 first-letter:uppercase">Status <HashtagIcon className="w-2 inline"/></h3>
                  <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 first-letter:uppercase pr-1 hover:font-semibold before:content-['_↗']"> 2019</a>
          </div>
        </div>
        <div id="manga-more" className="w-full bg-slate-900/70 ">
            <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">Sugges Manga </h3>

        </div>
        <div id="manga-comments" className="w-full bg-slate-900/70 ">
            <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">Comments </h3>
            
        </div>
      </div>
    </main>
  );
}
