"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* backdrop-blur  */}
      <div className="sticky lg:pl-60 lg:pr-8 top-0 z-40 w-full  flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="max-w-8xl mx-auto">
          <div className="relative flex items-center">
            <div className="top-0 pointer-events-none text-xs  rounded-full py-1 max-w-screen-lg">
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
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-60 lg:border-b-0 lg:border-r lg:border-gray-800">
        <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
          <Link
            href="/"
            className="group flex w-full items-center gap-x-2.5"
            onClick={close}
          >
            <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
              M
            </div>

            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              Web Name
            </h3>
          </Link>
        </div>
        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
          {isOpen ? (
            <XMarkIcon className="block w-6 text-gray-400" />
          ) : (
            <Bars4Icon className="block w-6 text-gray-400" />
          )}
        </button>

        <div
          className={clsx("overflow-y-auto lg:static lg:block", {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="space-y-6 px-2 py-5">
            <ul>
              <li>
                <Link
                  href={`/`}
                  className={clsx(
                    "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300"
                    /*  {
                      'text-gray-400 hover:bg-gray-800': !isActive,
                      'text-white': isActive,
                    }, */
                  )}
                >
                  Home
                </Link>
              </li>
            </ul>
            {/* {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
               {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}  
                </div>
              </div>
            );
          })} */}
          </nav>
        </div>
      </div>

    </>
  );
}
