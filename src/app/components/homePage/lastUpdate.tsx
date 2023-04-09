"use client";
import { FetchApi } from "@/constants/FetchApi";
import { MangaLang, SelectMangaTypeByPage } from "@/constants/configBase";
import getDate from "@/utils/caldate";
import Link from "next/link";
import { useQuery } from "react-query";
const FetchDataPage = async (config: MangaLang, pageParam: number) => {
  return await FetchApi(
    config.apiPath + config.endPointPath.homeLastUpdate + pageParam
  );
};
const LastUpdateHome = ({ typeManga }: any) => {
  let config = SelectMangaTypeByPage(typeManga);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["LastUpdate", typeManga, 0],
    () => FetchDataPage(config, 0),
    {
      retry: 10,
      staleTime: 10000,
      cacheTime: 5000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const skeleton = () => {
    return (
        <tr className="animate-pulse border border-blue-300 shadow rounded-md">
          <td className="w-1"><div className="h-5 bg-slate-700 rounded-full "></div></td>
          <td className="w-1/2 ml-1"><div className="h-3 bg-slate-700 rounded "></div></td>
          <td className="w-1/5"><div className="h-7 bg-slate-700 rounded"></div></td>
          <td className="w-1/5"><div className="h-3 bg-slate-700 rounded "></div></td>
        </tr>
      )
  };
  const tableSkeleton=()=>{
    return (
      <>
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
      </>
    )
  }
  const _renderItem = (data: any, index: number) => {
    return (
      <tr key={index + "-" + data.idDoc} className="border-b border-dashed hover:border-dashed hover:border-sky-400">
        <td className="w-1/12 justify-center text-center text-lg font-semibold">
          <div className="font-semibold border border-dotted rounded-full justify-center w-2/3 bg-slate-950/70 hover:border-dashed hover:border-sky-400">
            {index + 1}
          </div>
        </td>
        <td className="w-1/2">
          <a
            className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-200"
            rel="nofollow"
            href={`${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`}
            title={`${config.configSetting.lbl_start_manga} ${data.name}`}
          >
            {data.name}
          </a>
        </td>
        <td className="hidden sm:block py-5 align-middle">
          <div>
            {config.configSetting.lbl_inf_status}: <strong className="  text-sky-600 dark:text-sky-500">{data.status}</strong>
          </div>
          <div>
            {config.configSetting.lbl_inf_View}: <strong className=" text-sky-600 dark:text-sky-500">{data.view}</strong>
          </div>
        </td>
        <td className="w-1/5 xs:1/2">
          <table className="w-full text-left border-collapse text-sm ">
            <tbody>
              {data.detail_documents &&
                data.detail_documents.slice(0,2).map((item: any, index: number) => (
                  <tr
                    className="m-3 border-b border-dotted border-slate-600 hover:border-dashed hover:border-sky-400"
                    key={index + "" + item.idDetail}
                  >
                    <td className="py-2 mr-1">
                      <a
                        className="text-sm text-sky-500 dark:text-sky-400 hover:text-md hover:font-semibold hover:text-sky-300"
                        rel="nofollow"
                        href={`${config.configPrefix.url_host}${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${item.idDoc}/${config.configPrefix.startViewmanga}${item.idDetail}${config.configPrefix.endViewmanga}`}
                        title={`${config.configSetting.lbl_start_manga} ${data.name} ${config.configSetting.lbl_start_chapter} ${item.idDetail}`}
                      >
                        {config.configSetting
                          ? config.configSetting.lbl_text_chapter
                          : ""} {item.idDetail}
                      </a>
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
  return (
    <>
      <div className="py-1 font-semibold first-line:uppercase text-md text-sky-300 border-t border-b border-t-transparent border-b-sky-300 items-center first-letter:text-2xl first-letter:font-bold">
        {config.configSetting.Lbl_Home_New_Upadte}
      </div>

      <table className="w-full text-left border-collapse text-sm ">
        <tbody>
          {isFetching &&  tableSkeleton()}
          {!isFetching && data && data.data && data.data.map((data: any, index: number) => (_renderItem(data, index)))} 
        </tbody>
      </table>
      {/*load more*/}
    </>
  );
};
export default LastUpdateHome;
