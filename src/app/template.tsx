"use client";

import { SelectMangaTypeByPage } from "@/constants/configBase";
import { GlobalNav } from "@/ui/global-nav";
import { DefaultSeo, NextSeo, SiteLinksSearchBoxJsonLd } from "next-seo";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

//react-query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function Template({ children }: { children: React.ReactNode }) {
  let config = SelectMangaTypeByPage("");
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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
