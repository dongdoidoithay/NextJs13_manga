"use client";
import { SelectMangaTypeByPage } from "@/constants/configBase";
import { GlobalNav } from "@/ui/global-nav";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState, useRef } from "react";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  let config = SelectMangaTypeByPage("");
  console.log("q", searchParams.q);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);
  const [valueFind, setValueFind] = useState<string>();
  useEffect(() => {
    inputRef.current?.focus();
    setValueFind(searchParams.q);
  }, []);

  return (
    <>
      <GlobalNav />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
          <div className="py-1 font-semibold first-line:uppercase text-md text-sky-300 border-t border-b border-t-transparent border-b-sky-300 items-center first-letter:text-2xl first-letter:font-bold">
            {config.configSetting.lbl_Find_list}
          </div>
          <div
              id="box-search"
              className="flex flex-wrap flex-row gap-2 my-3 mx-14  bg-gray-700 h-12"
            >
            <input type="text" ref={inputRef} className="flex flex-1 w-1 text-sky-500 dark:text-sky-400 border-sky-500 focus:dark:border-sky-400 focus:border-sky-500 focus:dark:border-sky-400" placeholder="Keyword find mâng"/>
            <button className="flex w-12 items-center rounded-lg">
              <MagnifyingGlassIcon className="w-7 font-semibold" />
            </button>
          </div>

          <p>Data Search</p>
        </main>
      </div>
    </>
  );
}
