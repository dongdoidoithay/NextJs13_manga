"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

export function GlobalNavView() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* backdrop-blur  */}
      <div className="fix lg:pl-60 lg:pr-8 top-0 z-40 w-full flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-700 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="max-w-8xl mx-auto">
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
      
    </>
  );
}
