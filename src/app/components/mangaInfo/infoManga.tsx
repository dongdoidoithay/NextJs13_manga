import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { AxiosPostApi, FetchApi } from "@/constants/FetchApi";
import { MangaLang } from "@/constants/configBase";
import { getStorage } from "@/utils/localFx";
import  InfoActionBlock  from "./InfoBlock";
import RenderChapterList from "./renderChapterList";
import InfoHeaderBlock from "./InfoHeaderBlock";
import InfoOtherBlock from "./InfoOtherBlock";


 const InfoManga = ({id,config,dataManga}:{id: string;config: MangaLang;dataManga: any}) => {

  let name_author = "";
  let name_author_org = "no-auth";
  let des_full = "";
  let des_meta = ""; //250 ky tu
  let key_word = "";
  let title = "";
  let manga_name = "";
  let url = "";
  let chapter_name_view = "";
  if (dataManga && dataManga) {
    url = `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}`;
    if (dataManga.listAuthors && dataManga.listAuthors.length > 0) {
      name_author = `(by ${dataManga.listAuthors[0].name})`;
      name_author_org = dataManga.listAuthors[0].name;
    }
    if (dataManga.desc != null && dataManga.desc != "") {
      des_full = dataManga.desc
        .replace(/"/gi, "")
        .replace(/{domain}/g, config.configSetting.lbl_domain_name);
      des_meta = dataManga.desc.replace(/"/gi, "").substring(0, 250) + "...";
    } else {
      des_full = config.configSetting.desc_info_manga
        .replace(/{name}/gi, dataManga.name)
        .replace(/{nameOther}/g, dataManga.nameOther)
        .replace(/{auth}/g, name_author)
        .replace(/{domain}/g, config.configSetting.lbl_domain_name)
        .replace(/{chapter}/g, chapter_name_view);
      des_meta = des_full;
    }

    key_word =
      config.configSetting.keyword_info_manga
        .replace(/{name}/gi, dataManga.name)
        .replace(/{nameOther}/g, dataManga.nameOther)
        .replace(/{auth}/g, name_author)
        .replace(/{domain}/g, config.configSetting.lbl_domain_name)
        .replace(/{chapter}/g, chapter_name_view) + dataManga.tags;
    title = config.configSetting.info_name_manga_title
      .replace(/{name}/gi, dataManga.name)
      .replace(/{nameOther}/g, dataManga.nameOther)
      .replace(/{auth}/g, name_author)
      .replace(/{domain}/g, config.configSetting.lbl_domain_name)
      .replace(/{chapter}/g, chapter_name_view);
    manga_name = config.configSetting.info_name_manga
      .replace(/{name}/gi, dataManga.name)
      .replace(/{nameOther}/g, dataManga.nameOther)
      .replace(/{auth}/g, name_author)
      .replace(/{domain}/g, config.configSetting.lbl_domain_name)
      .replace(/{chapter}/g, chapter_name_view);
  }
  const _rate = dataManga.rate
    ? dataManga.rate
    : Math.round((Math.random() * (10 - 3) + 3) * 10) / 10;
  const _ratingCount = Math.round((Math.random() * 90 + 90) * 100);
  const _worstRating = Math.round((Math.random() * (10 - 3) + 3) * 10);
  const _bestRating = _ratingCount - _worstRating;

  const SeoPageManga = () => {
    return (
      <>
        <NextSeo
          title={title}
          description={des_meta}
          canonical={url}
          openGraph={{
            title: title,
            description: des_full,
            url: url,
            type: "article",
            article: {
              publishedTime: new Date().toISOString(),
              modifiedTime: new Date().toISOString(),
              expirationTime: new Date().toISOString(),
              section: "News",
              authors: [
                dataManga.listAuthors &&
                  dataManga.listAuthors.map((auth: any) => {
                    return `${config.configPrefix.url_host}${config.configPrefix.pageAuth}/${config.configPrefix.startAuth}${auth.id}${config.configPrefix.endAuth}`;
                  }),
              ],
              tags: [key_word],
            },
            images: [
              {
                url: dataManga.image,
                alt: dataManga.name,
              },
            ],
          }}
          additionalMetaTags={[
            {
              property: "keywords",
              content: key_word,
            },
          ]}
          additionalLinkTags={[
            {
              rel: "alternate",
              href: `${config.configPrefix.url_host}/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}/feed`,
              type: "application/rss+xml",
            },
            {
              rel: "alternate",
              href: `${config.configPrefix.url_host}/api${config.configPrefix.pageViewManga}/${config.configPrefix.startManga}${dataManga.idDoc}${config.configPrefix.endManga}/rss.xml`,
              type: "application/rss+xml",
            },
          ]}
        />

        <ArticleJsonLd
          url={url}
          title={title}
          images={[dataManga.image]}
          datePublished={new Date().toISOString()}
          dateModified={new Date().toISOString()}
          authorName={[name_author_org]}
          publisherName={name_author_org}
          publisherLogo={dataManga.image}
          description={des_full}
        />
      </>
    );
  };



  return (
    <>
      {SeoPageManga()}
    
     <InfoHeaderBlock config={config} dataManga={dataManga}/>
     <InfoActionBlock id={id}  des_full={des_full} config={config} dataManga={dataManga}/>
     <RenderChapterList id={id} config={config} mangaName={dataManga.name} />
     <InfoOtherBlock id={id}  key_word={key_word} config={config} dataManga={dataManga}/>
    </>
  );
};
export default InfoManga;
