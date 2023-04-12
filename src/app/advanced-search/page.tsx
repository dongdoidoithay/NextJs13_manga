"use client";
import { FetchApi } from "@/constants/FetchApi";
import { MangaLang, SelectMangaTypeByPage } from "@/constants/configBase";
import ImageLoading from "@/ui/ImageLoading";
import { Boundary } from "@/ui/boundary";
import { GlobalNav } from "@/ui/global-nav";
import getDate from "@/utils/caldate";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";

const FetchData = async (
  config: MangaLang,
  keysearch: string,
  pageParam: number
) => {
  const _test = config.typeName;
  if (keysearch == null || keysearch == "") {
    return null;
  }
  // console.log("call API:",{keysearch,pageParam,_test});
  return await FetchApi(
    config.apiPath +
      config.endPointPath.mangaListSearch +
      keysearch +
      "/" +
      pageParam
  );
};
const FetchDataGenres = async (config: MangaLang) => {
  console.log("call API:", config.apiPath);
  return await FetchApi(config.apiPath + config.endPointPath.genres);
};

export default function SearchAdvancePage() {
  const _cons = SelectMangaTypeByPage("");
  const [config, setConfig] = useState(_cons);
  const sectionRef = useRef<HTMLDivElement>(null);
  let block = config.activeSource;
  const [selectedOption, setSelectedOption] = useState("");
  const [page, setPage] = useState(0);
  const [valueFind, setValueFind] = useState<string>();

  const {
    isFetching: isgenresLoading ,
     data:genresData
  } = useQuery(
    ["Genres Data", config.typeName],
    () => FetchDataGenres(config),
    {
      retry: 10,
      staleTime: 10000,
      cacheTime: 5000,
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading, error, isError, status, data, isFetching, refetch } =
    useQuery(
      ["Query Page", valueFind, config.typeName, page],
      () => FetchData(config, valueFind || "", page),
      {
        enabled: false,
        retry: 10,
        staleTime: 10000,
        cacheTime: 5000,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
      }
    );

  //console.log("useQuery",{isLoading,error,isError,status});
  const [genresdValues, setGenresValues] = useState([]);

  const handleCheckboxChange = (event: any) => {
    /*  const value = event.target.value;
    if (event.target.checked) {
      setGenresValues([...genresdValues, value]);
    } else {
      setGenresValues(genresdValues.filter((v) => v !== value));
    } */
  };
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    console.log("option change or:", event.target.value);
    console.log("option change:", selectedOption);
    setConfig(SelectMangaTypeByPage(event.target.value));
    console.log("type", config?.typeName);
    refetch();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    setValueFind(event.target.value);
  };
  useEffect(() => {
    setConfig(SelectMangaTypeByPage(""));
    setSelectedOption(config?.typeName);
    inputRef.current?.focus();
  }, []);

  //FN
  const funcSearchData = (e: any) => {
    e.preventDefault();
    setPage(0);
    //console.log("call ",{page,valueFind,selectedOption})
    refetch();
  };

  //render
  const FnNext = () => {
    if (data && page + 1 < data.totalPage) setPage(page + 1);
  };
  const FnPrev = () => {
    if (page > 0) setPage(page - 1);
  };
  if (!isFetching && data && page > 0) {
    /*  setTimeout(
     () => scrollAction(), 
     100
   );  */
    setTimeout(() => {
      sectionRef.current?.scrollIntoView();
    }, 0);
  }
  const _renderItem = (data: any, index: number) => {
    const regex = new RegExp(`(${valueFind})`, "gi");
    const parts = data.name.split(regex);
    let result = "";
    parts.filter(String).map((part: any, i: number) => {
      if (regex.test(part)) {
        result +=
          '<strong class="text-orange-600 font-medium">' + part + "</strong>";
      } else {
        result += part;
      }
    });

    let resultOther = "";
    const partsother = data.nameOther.split(regex);
    partsother.filter(String).map((part: any, i: number) => {
      if (regex.test(part)) {
        resultOther +=
          '<strong class="text-orange-600 font-medium">' + part + "</strong>";
      } else {
        resultOther += part;
      }
    });

    return (
      <tr
        key={index + "-" + data.idDoc}
        className="border-b border-dotted border-slate-700 hover:border-dashed hover:border-sky-400"
      >
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="border border-dashed justify-center w-10/12 bg-slate-950/70 overflow-hidden rounded-md p-1 m-2">
            <ImageLoading
              url={data.image}
              title={`${config.configSetting.lbl_start_manga} ${data.name}`}
              classStyle={"w-full object-cover"}
            />
          </div>
        </td>
        <td className="w-1/2">
          <Link
            className="text-sm  text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="nofollow"
            href={`${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
            title={`${config.configSetting.lbl_start_manga} ${data.name}`}
          >
            <div dangerouslySetInnerHTML={{ __html: result }}></div>
          </Link>
          <div
            dangerouslySetInnerHTML={{ __html: resultOther }}
            className="break-word overflow-hidden first-line:uppercase line-clamp-2"
          ></div>
        </td>
        <td className="hidden sm:block py-5 align-middle">
          <div className="items-center">
            <div>
              {config.configSetting.lbl_inf_status}:{" "}
              <strong className="  text-sky-600 dark:text-sky-500">
                {data.status}
              </strong>
            </div>
            <div>
              {config.configSetting.lbl_inf_View}:{" "}
              <strong className=" text-sky-600 dark:text-sky-500">
                {data.view}
              </strong>
            </div>
          </div>
        </td>
        <td className="w-1/5 xs:1/2">
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {data.detail_documents &&
                data.detail_documents
                  .slice(0, 2)
                  .map((item: any, index: number) => (
                    <tr
                      className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                      key={index + "" + item.idDetail}
                    >
                      <td className="py-2 mr-1">
                        <Link
                          className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                          rel="nofollow"
                          href={`${config.configPrefix.url_host}${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${item.idDoc}/${config.configPrefix.startViewmanga}${item.idDetail}${config.configPrefix.endViewmanga}`}
                          title={`${config.configSetting.lbl_start_manga} ${data.name} ${config.configSetting.lbl_start_chapter} ${item.idDetail}`}
                        >
                          {config.configSetting
                            ? config.configSetting.lbl_text_chapter
                            : ""}{" "}
                          {item.idDetail}
                        </Link>
                      </td>
                      <td className="hidden sm:block justify-end float-right">
                        {getDate(item.date, config)}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </td>
      </tr>
    );
  };
  const PageAction = () => {
    return (
      <>
        <div id="next-prev" className="my-3 flex flex-row gap-2 mr-2">
          {page == 0 && (
            <a
              title={`${config.configSetting.lbl_prev_data} ${page - 1}`}
              className="cursor-pointer line-through hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-orange-500 dark:hover:orange-sky-400  hover:text-orange-500 dark:hover:text-orange-400"
            >
              <ChevronLeftIcon className="w-4 inline " />
              <b className="ml-3 font-semibold first-letter:uppercase">
                {config.configSetting.lbl_prev_data}
              </b>
            </a>
          )}
          {page > 0 && (
            <a
              onClick={FnPrev}
              title={`${config.configSetting.lbl_text_chapter} ${page - 1}`}
              className="cursor-pointer hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400"
            >
              <ChevronLeftIcon className="w-4 inline " />
              <b className="ml-3 font-semibold first-letter:uppercase">
                {config.configSetting.lbl_prev_data}
              </b>
            </a>
          )}
          {page >= data.totalPage - 1 && (
            <a
              title={`${config.configSetting.lbl_prev_data} ${page + 1}`}
              className="cursor-pointer line-through hover:border-dashed w-1/2 block border border-slate-700 rounded p-2 text-center hover:border-orange-500 dark:hover:orange-sky-400  hover:text-orange-500 dark:hover:text-orange-400"
            >
              <b className="mr-3 font-semibold first-letter:uppercase">
                {config.configSetting.lbl_next_data}
              </b>
              <ChevronRightIcon className="w-4 inline " />
            </a>
          )}
          {page < data.totalPage - 1 && (
            <a
              onClick={FnNext}
              title={`${config.configSetting.lbl_text_chapter} ${page + 1}`}
              className="cursor-pointer hover:border-dashed  w-1/2 block border border-slate-700 rounded p-2 text-center  hover:border-sky-500 dark:hover:border-sky-400  hover:text-sky-500 dark:hover:text-sky-400"
            >
              <b className="mr-3 font-semibold first-letter:uppercase">
                {config.configSetting.lbl_next_data}
              </b>
              <ChevronRightIcon className="w-4 inline " />
            </a>
          )}
        </div>
      </>
    );
  };

  const skeleton = () => {
    return (
      <tr className="animate-pulse border border-blue-300 shadow rounded-md">
        <td className="w-1">
          <div className="h-5 bg-slate-700 rounded-full "></div>
        </td>
        <td className="w-1/2 ml-1">
          <div className="h-3 bg-slate-700 rounded "></div>
        </td>
        <td className="w-1/5">
          <div className="h-7 bg-slate-700 rounded"></div>
        </td>
        <td className="w-1/5">
          <div className="h-3 bg-slate-700 rounded "></div>
        </td>
      </tr>
    );
  };
  const tableSkeleton = () => {
    return (
      <>
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
      </>
    );
  };

  console.log("genresData", {genresData,isgenresLoading});

  return (
    <>
      <GlobalNav />
      <div
        ref={sectionRef}
        className="lg:pl-60  bg-slate-900/70 border border-slate-700"
      >
        <main className="px-2">
          <Boundary labels={config.configSetting.lbl_Find_list} />
          <form onSubmit={funcSearchData}>
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="w-36 ">Name</td>
                  <td>
                    <input
                      type="text"
                      ref={inputRef}
                      onChange={(e) => handleChange(e)}
                      className="w-full pl-5 focus:outline-dotted text-sky-500 rounded-s-md
                    hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                      placeholder="name manga"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td>
                    <div
                      id="find-option"
                      className="items-center flex flex-row flex-wrap "
                    >
                      {block.map((option: any) => (
                        <label key={option.value} className="flex p-2">
                          <input
                            type="radio"
                            name="options"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={(e) => handleOptionChange(e)}
                          />
                          {option.lable}
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Genres</td>
                  <td>
                    <div  className="flex flex-row flex-wrap" >
                      {!isgenresLoading && genresData.map((g:any, index:number) => {
                        return (
                                <div key={index} className="flex w-1/3">
                                    <input type="checkbox"  name="Genres" value={g.id} onChange={handleCheckboxChange} />
                                    <label htmlFor="value1">{g.name}</label>
                                </div>
                              );
                          })}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <Boundary labels={`Result`} />
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {isFetching && tableSkeleton()}
              {!isFetching &&
                data &&
                data.data &&
                data.data.map((data: any, index: number) =>
                  _renderItem(data, index)
                )}
            </tbody>
          </table>
          {/*load more*/}
          {!isFetching &&
            data &&
            data.data &&
            data.data.length > 0 &&
            PageAction()}
        </main>
      </div>
    </>
  );
}
