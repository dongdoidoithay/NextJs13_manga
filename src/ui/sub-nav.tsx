import { SelectMangaTypeByPage } from "@/constants/configBase";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useEffect } from "react";

export const SubnNav = () => {
    let config = SelectMangaTypeByPage('');
    return (<>
        <div className="sticky lg:pr-8 top-0 flex flex-row flex-wrap z-30 w-full flex-none transition-colors duration-500 lg:z-30 border-b border-slate-900/10 dark:border-slate-700 supports-backdrop-blur:bg-white/95 dark:bg-slate-900">
            <div className="hidden lg:flex w-56 items-center ">
              <a href="/" title={config.configSetting.lbl_domain_Page} >
                <div dangerouslySetInnerHTML={{ __html: config.configSetting.lbl_Name_Page }} className="w-full text-xl font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold"></div>
              </a> 
            </div>
            <div className="pl-5 flex-1 max-w-8xl mx-auto hidden lg:block">
                <div className="relative flex items-center ">
                    <div className="top-0 pointer-events-none text-xs rounded-full py-1 max-w-screen-lg left-0">
                        <div className="bg-current dark:bg-slate-900 pointer-events-auto rounded w-96">
                            <a type="button"
                                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                            href="/search"
                            >
                                <MagnifyingGlassIcon className="block w-6 text-gray-400" />
                                 Quick search...
                                <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                                Enter
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden lg:flex items-center ml-auto">
                        <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                            <ul className="flex space-x-8">
                                <li>
                                    <Link href={'/'} className="hover:text-sky-500 dark:hover:text-sky-400">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="hover:text-sky-500 dark:hover:text-sky-400">
                                        Register
                                    </Link>
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
    </>)
}