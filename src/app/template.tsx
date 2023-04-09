"use client";

import { SelectMangaTypeByPage } from "@/constants/configBase";
import { GlobalNav } from "@/ui/global-nav";
import { DefaultSeo, NextSeo, SiteLinksSearchBoxJsonLd } from "next-seo";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

//react-query
import { QueryClient, QueryClientProvider } from "react-query";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
const queryClient = new QueryClient();

export default function Template({ children }: { children: React.ReactNode }) {
  let config = SelectMangaTypeByPage("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (document.getElementsByName('body') != undefined) {
      if (number >= 10) {
        setScroll('fixed');
      } else {
        setScroll('');
      }
    }
  }
  const Scroll = () => {
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  return (
    <>
      <ToastContainer />
      <NextSeo
        additionalMetaTags={[
          {
            property: "keywords",
            content: config.configSetting.sb_seo_page_default_key,
          },
        ]}
        additionalLinkTags={[
          {
            rel: "alternate",
            href: `${config.configPrefix.url_host}/api/rss.xml`,
            type: "application/rss+xml",
          },
          {
            rel: "alternate",
            href: `${config.configPrefix.url_host}/api/ror.xml`,
            type: "application/rss+xml",
          },
          {
            rel: "alternate",
            href: `${config.configPrefix.url_host}/api/sitemap.html`,
            type: "text/html",
          },
          {
            rel: "alternate",
            href: `${config.configPrefix.url_host}/api/urllist.txt`,
            type: "text/plain",
          },
          {
            rel: "alternate",
            href: `${config.configPrefix.url_host}/server-sitemap.xml`,
            type: "application/rss+xml",
          },
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        url={config.configPrefix.url_host}
        potentialActions={[
          {
            target: `${config.configPrefix.url_host}/search?q`,
            queryInput: "search_term_string",
          },
        ]}
      />
      <QueryClientProvider client={queryClient}>
        <div ref={sectionRef}></div>
        {children}
        <a onClick={Scroll} className={`${scroll} inset bottom-6 z-50 right-6 text-sky-400 hover:text-orange-500 cursor-pointer`} ><ArrowUpCircleIcon className="w-9" /> </a>

      </QueryClientProvider>

    </>
  );
}
