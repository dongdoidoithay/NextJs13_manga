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
  let config = SelectMangaTypeByPage('');

  let block = config.listSource;

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const [valueFind, setValueFind] = useState<string>();
  useEffect(() => {
    setSelectedOption('all');
    inputRef.current?.focus();
    setValueFind(searchParams.q);
  }, []);

  //FN
  const funcSearchData = () => {

  }


  return (
    <>
      <GlobalNav />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
          <div className="py-1 font-semibold first-line:uppercase text-md text-sky-300 border-t border-b border-t-transparent border-b-sky-300 items-center first-letter:text-2xl first-letter:font-bold">
            {config.configSetting.lbl_Find_list}
          </div>
          <div id="box-search"
            className="flex flex-wrap flex-row  my-3 mx-14  h-12 rounded-sm"
          >
            <input type="text" ref={inputRef} className="flex flex-1 w-1 pl-5 focus:outline-dotted text-sky-500 rounded-s-md
            hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" placeholder="Keyword find manga" />
            <button className="flex w-12 p-2 items-center  font-bold text-sky-500 bg-gray-700 rounded-e-md hover:dark:bg-slate-700 hover:bg-slate-600">
              <MagnifyingGlassIcon className="w-7 font-semibold" />
            </button>
          </div>
          <div id="find-option" className="items-center flex flex-row flex-wrap mx-14 ">

            {block.map((option) => (
              <label key={option.value} className="flex p-2">
                <input
                  type="radio"
                  name="options"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                />
                {option.lable}
              </label>
            ))}
          </div>
          <div className="py-1 font-semibold first-line:uppercase text-md text-sky-300 border-t border-b border-t-transparent border-b-sky-300 items-center first-letter:text-2xl first-letter:font-bold">
            {`Result ${config.configSetting.lbl_Find_list}`}
          </div>
        </main>
      </div>
    </>
  );
}
