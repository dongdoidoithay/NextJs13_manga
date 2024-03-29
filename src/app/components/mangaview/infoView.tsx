import React, { useState } from "react";

import { toast } from "react-toastify";
import { MangaLang } from "@/constants/configBase";
import { getStorage, setStorage } from "@/utils/localFx";
import StoreLocalView from "./storeLocalView";
import ContenView from "./contenView";
import InfoActionView from "./infoActionView";
import RenderChapterList from "../mangaInfo/renderChapterList";
import InfoActionViewSkeletion from "./infoActionViewSkeletion";
import ContenViewSkeletion from "./contenViewSkeletion";
import DisqusComments from "../mangaInfo/disquscomment";
import InfoActionViewBt from "./infoActionViewBt";
import AdsDetail from "../ads/ads_detail";

const InfoViewManga = ({ config, data ,loading}: { config: MangaLang, data: any,loading:boolean }) => {

    let _viewmode = getStorage("View-Mode-Option");
    if (_viewmode == '' || _viewmode == null)
        _viewmode = 'N';
        
    const [viewMode, setViewMode] = useState(_viewmode);
    const fnChangeVidewMode = () => {
        let value='';
        if(_viewmode=='Y')
            value='N';
        else
        value='Y'
        setStorage("View-Mode-Option", value, 30 * 24 * 60 * 60);

        setViewMode(value);
    }
    /**FN next Prev Image */
    const [CurrentImage, SetCurrentImage] = useState(0);
    const [ImageSelect, SetImageSelect] = useState('');
    const [listImg, SetlistImg] = useState([]);
    const prev_img = () => {
        if ((CurrentImage - 1) >= 0) {
            SetImageSelect('');
            SetCurrentImage(CurrentImage - 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            if (data && data.idDetailPrev != '') {
                SetlistImg([]);
                SetImageSelect('');
                SetCurrentImage(0);
                toast.success('🦄 you are reading prev chapter:' + data.idDetailPrev, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                window.location.href = `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetailPrev}${config.configPrefix.endViewmanga}`;
            }
            else

                toast.warn('🦄 you are reading the First chapter. You can click next chapter to read', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
        }
    }
    const next_img = () => {
        if ((CurrentImage + 1) < listImg.length) {
            SetImageSelect('');
            SetCurrentImage(CurrentImage + 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            if (data && data.idDetailNext != '') {
                SetlistImg([]);
                SetImageSelect('');
                SetCurrentImage(0);
                toast.success('🦄 you are reading next chapter:' + data.idDetailNext, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                window.location.href = `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}/${config.configPrefix.startViewmanga}${data.idDetailNext}${config.configPrefix.endViewmanga}`;
            }
            else

                toast.warn('🦄 you are reading the last chapter. You can read other Manga waiting for the new chapter to update !', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
        }
    }
    //set hist
    if (data) {
        StoreLocalView(config, data);
    }


    return (
        <>
            { loading &&<InfoActionViewSkeletion/>}
            {data && <InfoActionView  config={config} viewMode={viewMode}  data={data} fnChangeVidewMode={fnChangeVidewMode} listImg={listImg} CurrentImage={CurrentImage} SetCurrentImage={SetCurrentImage}  ImageSelect={ImageSelect} SetImageSelect={SetImageSelect} prev_img={prev_img} next_img={next_img}/>}
            <div id="read-view" className="mt-2 mx-1 flex flex-col items-center">
            { loading &&<ContenViewSkeletion/>}
            {data && <ContenView config={config} viewMode={viewMode} data={data} listImg={listImg} SetlistImg={SetlistImg} CurrentImage={CurrentImage} SetCurrentImage={SetCurrentImage} ImageSelect={ImageSelect} SetImageSelect={SetImageSelect} prev_img={prev_img} next_img={next_img} />}
            </div>
            {data && <InfoActionViewBt config={config} viewMode={viewMode}  data={data} fnChangeVidewMode={fnChangeVidewMode} listImg={listImg} CurrentImage={CurrentImage} SetCurrentImage={SetCurrentImage} ImageSelect={ImageSelect} SetImageSelect={SetImageSelect} prev_img={prev_img} next_img={next_img}/>}
            <AdsDetail/>
            {data && <RenderChapterList id={data.idDoc} config={config} mangaName={data?.nameDoc} idchapter={data.idDetail} isSeo={false} dataManga={null}/>}
            {data &&<div id="manga-comments" className="w-full bg-slate-900/70 ">
            <h3 className="font-semibold text-white/80 first-letter:uppercase before:content-['_↗']">
                {config.configSetting.lbl_inf_comment}
            </h3>
                <DisqusComments image={data.manga.image} type={config.typeManga} url={`${config.configPrefix.url_host}${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${data.idDoc}${config.configPrefix.endManga}`} id={data.idDoc} title={data.manga.name} />
            </div>
            } 
        </>
    );
};
export default InfoViewManga;
