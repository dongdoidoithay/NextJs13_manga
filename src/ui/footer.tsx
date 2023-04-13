import { FetchApi } from "@/constants/FetchApi";
import {
  MangaLang,
  SelectMangaTypeByPage,
  apiConfigPath,
} from "@/constants/configBase";
import { getStorage, setStorage } from "@/utils/localFx";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const FetchAllDataDomain = async (config: MangaLang) => {
    console.log("call Data Domain");
  return await FetchApi(apiConfigPath + config.endPointPath.configGetAllDomain);
};

const FotterPage = () => {
  //let dataDomain:any = [];
  const[dataDomain,setDataDomain]=useState<any[]>([])
  const [config, setConfig] = useState(SelectMangaTypeByPage(""));

  useEffect(() => {
    const _key =
      config.configSetting.lbl_domain_home + "-" + config.localKey.localType;
    let type = getStorage(_key);
    if (type != "" && type != null && type != undefined) 
    {
      setConfig(SelectMangaTypeByPage(type.toString()));
    }
    const _keydomain=config.configSetting.lbl_domain_home + "-domain";
    let _domainData =getStorage(_keydomain);
    if (_domainData != "" &&  _domainData != null && _domainData != undefined) 
    {
      let _data=JSON.parse(_domainData);
      setDataDomain(_data);
    }else{
        console.log("active call Api");
        refetch();
    }

  }, [setConfig]);

  let _SID = "";
  const { isLoading, data ,refetch} = useQuery(
    ["Get All Domain", config.configSetting.lbl_domain_Page],
    () => FetchAllDataDomain(config),
    {
      retry: 10,
      staleTime: 10000,
      cacheTime: 5000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled:false
    }
  );


  if(!isLoading&&data&& data.length)
  {
     const _infodomain=data.filter((x:any)=>x.domain==config.configSetting.lbl_domain_Page);
    if(_infodomain && _infodomain.length>0){
        _SID=_infodomain[0].histats_id;
    }

    //map
    if(data.length>30)
    {
      var randomIndices = [];
      while (randomIndices.length <= 20) {
        randomIndices.push(Math.floor(Math.random() * data.length));
      }
      var nyArr =randomIndices.map(function(i) {
        return data[i];
      });
      //setDataDomain(nyArr)
      //dataDomain=dataDomain.concat(nyArr);
      const _keydomain=config.configSetting.lbl_domain_home + "-domain";
      const _dataDomain=JSON.stringify(nyArr);
      setStorage( _keydomain,_dataDomain,7 * 24 * 60 * 60);
      window.location.reload();
    }

  }
  return (
    <>
      <div className="w-full h-80 pl-56 mt-14">
        <div id="heder" className="h-7 rounded bg-slate-700/70 align-middle justify-center ">
          <ul className="flex flex-row gap-3 align-middle justify-center items-center">
            <li ><a title="Site map " href={`${config.configPrefix.url_host}/server-sitemap.xml`}>SiteMap</a></li>
            <li ><a title="Site map " href={`${config.configPrefix.url_host}/api/sitemap.html`}>Google SiteMap</a></li>
            <li ><a title="Site map " href={`${config.configPrefix.url_host}/api/urllist.txt`}>Bing SiteMap</a></li>
          </ul>
        </div>
        <div id="box-inf" className="flex flex-col gap-3  bg-slate-900/70 border border-slate-700">
          <div className="flex flex-row">
            <div id="box-left" className="w-1/5 flex flex-col gap-2 flex-1 items-center">
              <a href="/" title={config.configSetting.lbl_Name_Page}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: config.configSetting.lbl_Name_Page,
                  }}
                  className="text-xl font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold"
                ></div>
              </a>
                 {_SID&& _SID!=''&& <a href={`https://www.histats.com/viewstats/?SID=${_SID}&f=2`} target="_blank" >
                        <div id="histatsC"><img  src={`https://s4is.histats.com/stats/i/${_SID}.gif?${_SID}&103`} alt={config.configSetting.lbl_Name_Page}/></div>
                    </a>}
               
                 <a href="//www.dmca.com/Protection/Status.aspx?ID=e4da793f-4aab-437a-85bc-033cbafb0b7c" title="DMCA.com Protection Status" className="dmca-badge">
                    <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=e4da793f-4aab-437a-85bc-033cbafb0b7c" alt="DMCA.com Protection Status" />
                </a> 
            </div>
            <div id="box-right" className="w-4/5">
                <div className="block py-1 text-sm justify-center">
                    <p className="text-center">Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. © 2019 {config.configSetting.lbl_domain_Page}</p>
                    <i className="text-xs text-center">If you have any problems with the image on our website, you can contact us via Gmail or Facebook, When requested, we will review and remove it immediately. Thanks for reading.My Gmail: mangavn1@gmail.com</i>
                </div>
                <div className="text-xs">
                    {dataDomain && dataDomain.map((item:any,index:number)=>{
                            return(
                                <a className="hover:text-sky-500 dark:hover:text-sky-400 before:content-['↗_'] after:content-[',_']" key={item.domain+'-'+index} title={item.domain_name} href={`https://${item.domain}`}>{item.domain_name}</a>
                            )
                    })}
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default FotterPage;
