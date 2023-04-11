"use client";
import Link from "next/link";
import {
  Bars2Icon,
  Bars4Icon,
  ChatBubbleLeftIcon,
  FireIcon,
  HashtagIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  SquaresPlusIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { ActMangaSource, MangaSource, MenuLeft } from "@/constants/configBase";
import { useSelectedLayoutSegment } from "next/navigation";
import { _hostwww } from "@/constants/configPrefixBase";
import { usePathname } from 'next/navigation';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="sticky lg:pl-60 lg:pr-8 top-0 z-40 w-full flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-700 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/10">
        <div className="max-w-8xl mx-auto hidden lg:block">
          <div className="relative flex items-center">
            <div className="top-0 pointer-events-none text-xs rounded-full py-1 max-w-screen-lg">
              <div className="bg-current dark:bg-slate-900 pointer-events-auto rounded w-96">
                <button
                  type="button"
                  className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                >
                  <MagnifyingGlassIcon className="block w-6 text-gray-400" />
                   Quick search...
                  <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                    Ctrl K
                  </span>
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li>
                    <a  href="/" className="hover:text-sky-500 dark:hover:text-sky-400" >
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-sky-500 dark:hover:text-sky-400">
                      Register
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <button
                  type="button"
                  id="headlessui-listbox-button-4"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4"
                >
                  icon login
                </button>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
      <div className="sticky lg:fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-60 lg:border-b-0 lg:border-r lg:border-gray-800">
      
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto z-50">
        <Link href="/"
            className="group flex w-full items-center gap-x-2.5"
            onClick={close}
            >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            L
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            App Name
          </h3>
        </Link>
        <button
            type="button"
            className="group absolute left-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden mr-7"
            onClick={() => setIsOpen(!isOpen)}
          >
         
          {isOpen ? (
            <XMarkIcon className="block w-6 text-gray-400" />
          ) : (
            <Bars4Icon className="block w-6 text-gray-400" />
          )}
        </button>
      </div>
        
       
        <div
          className={clsx("overflow-y-auto lg:static lg:block ", {
            "fixed inset-x-0 bottom-0 top-14 mt-px  bg-black": isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="lg:text-sm lg:leading-6 relative">
            <div className="font-semibold">MENU</div>
            <ul>
              {MenuLeft.map((navItem)=>{
                return <NavItem item={navItem} />;
              })}
              {/* <li>
                <a href="/docs/installation" 
                  className="group flex items-center lg:text-sm lg:leading-6 mb-4 ">
                  <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 ">
                  <HomeIcon className="w-7 text-white"/>
                  </div>Home</a>
              </li>
              <li>
                <a href="https://tailwindui.com/components?ref=sidebar" 
                  className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                  <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 ">
                  <HomeIcon className="w-7 text-white"/>
                  </div>Components
                  </a>
              </li> */}
            </ul>
           
          </nav>
        </div>
      </div>

    </>
  );
};

function NavItem({
 item
}: {
  item:MangaSource
}) {
  const segment = usePathname();
  const isActive = "/"+item.value === segment;
  let _link=`${_hostwww}/${item.value}`;

  let _target:any='_self';
  let Icon:any=null;
  if(item.icon=="home"){
    Icon=<HomeIcon className="w-6 text-white"/>
  }
  if(item.icon=="cate"){
    Icon=<TagIcon  className="w-6 text-white"/>
  }
  if(item.icon=="popular"){
    Icon=<FireIcon  className="w-6 text-white"/>
  }
  if(item.icon=="latestrelease"){
    Icon=<ListBulletIcon  className="w-6 text-white"/>
  }
  if(item.icon=="advanced-search"){
    Icon=<MagnifyingGlassCircleIcon  className="w-6 text-white"/>
  }
  if(item.icon=="collections"){
    Icon=<SquaresPlusIcon  className="w-6 text-white"/>
  }
  if(item.icon=="community"){
    _target="_blank";
    _link=item.value;
    Icon=<ChatBubbleLeftIcon  className="w-6 text-white"/>
  }
/*   console.log("nav-item-10",item.value)
  console.log("nav-item",{segment,isActive,}) */
  return (
    <Link
        target={_target}
        href={_link}
        className={clsx(
          'group flex items-center lg:text-sm lg:leading-6 mb-4 pl-5  py-1',
          {
            'font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300': !isActive,
            'font-semibold text-sky-500 dark:text-sky-400 border-r border-double border-sky-500  bg-slate-500/10': isActive,
          },
        )}
      >
      <div className={clsx(
          'mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none  dark:highlight-white/5',
          {
            'group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5': !isActive,
            'group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10': isActive,
          }
      )}>
        {Icon}
      </div>
      {item.lable}
    </Link>
  );
}