/* "use client"; */
import { GroupStyle } from "@/ui/group-stype";
import Image from "next/image";

import { ItemPopular } from "@/ui/item-popular";
import { TableLastUpdate } from "@/ui/table-last-update";
import { Metadata } from "next";
import baseSeo from "@/constants/baseSeo";
import { SlideComponent } from "./components/components-slide";
export const metadata: Metadata = {
  title: "Home page",
  description: baseSeo.description,
  keywords: baseSeo.keywords,
  openGraph: {
    title: baseSeo.title,
    description: baseSeo.description,
    type: "article",
    images: baseSeo.images,
    siteName: baseSeo.domainName,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSeo.canonical,
    creator: baseSeo.domainName,
    images: baseSeo.images,
  },
  category: "manga, novels, comic, anime",
  archives: baseSeo.archives,
  appLinks: {
    ios: {
      app_store_id: "123456789",
      url: baseSeo.canonical,
    },
    android: {
      package: "com.example",
      url: baseSeo.canonical,
    },
    web: {
      url: baseSeo.canonical,
      should_fallback: false,
    },
  },
  icons: baseSeo.Icon,
};

export default function Home() {
  return (
    <main className="px-2">
      <SlideComponent/>
      <GroupStyle labels="Manga Poppular">
        <div className="flex flex-wrap items-stretch pt-1">
          <ItemPopular text="Tensei Shitara Slime Datta" />
          <ItemPopular text="Tensei Shitara Slime Datta" />
          <ItemPopular text="Tensei Shitara Slime Datta" />
          <ItemPopular text="Tensei Shitara Slime Datta" />
        </div>
      </GroupStyle>
      <GroupStyle labels="Manga last Update">
        <div className="">
          <TableLastUpdate />
        </div>
      </GroupStyle>
      <button
        type="button"
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
      >
        Hover me
      </button>
    </main>
  );
}
