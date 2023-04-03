//'use client';

"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
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
          {/* Search */}
          <div className="sticky top-0 -ml-0.5 pointer-events-none">
          {/*   <div className="h-10 bg-white dark:bg-slate-900"></div> */}
            <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-3 flex-none"
                >
                  <path
                    d="m19 19-3.5-3.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                </svg>
                Quick search...
                <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                  Ctrl K
                </span>
              </button>
            </div>
            {/* <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div> */}
          </div>
          <ul>
          <li>
            <Link
                  href={`/`}
                  className={clsx(
                    'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
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
  );
}

/* function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}  */
