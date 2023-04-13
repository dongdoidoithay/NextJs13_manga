import baseSeo from "@/constants/baseSeo";
import { GlobalNav } from "@/ui/global-nav";
import { Metadata } from "next";
import SliderHome from "../components/homePage/slideHome";
import PopupHome from "../components/homePage/popupHome";
import LastUpdateHome from "../components/homePage/lastUpdate";
import TopComment from "../components/homePage/topComments";
import HistoryHome from "../components/homePage/historyHome";

export const metadata: Metadata = {
  title: "Type Page",
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
export default function PageInTye({ params }: { params: { type: string } }) {
  return (
    <>
      <GlobalNav />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
          <SliderHome typeManga={params.type} />
          <HistoryHome/>
          <PopupHome typeManga={params.type} />
          <LastUpdateHome typeManga={params.type} />
          <TopComment />
        </main>
      </div>
    </>
  );
}
