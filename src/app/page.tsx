/* "use client"; */
import { Metadata } from 'next'; 
import baseSeo from "@/constants/baseSeo";
import  {GlobalNav}  from "@/ui/global-nav";
import SliderHome from "./components/homePage/slideHome";
import PopupHome from "./components/homePage/popupHome";
import LastUpdateHome from "./components/homePage/lastUpdate";
import TopComment from './components/homePage/topComments';
import HistoryHome from './components/homePage/historyHome';
import AdsTop from './components/ads/ads_top_body';
import AdsDetail from './components/ads/ads_detail';

export const metadata: Metadata = {
  title: baseSeo.title,
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
  /*   ios: {
      app_store_id: "123456789",
      url: baseSeo.canonical,
    },
    android: {
      package: "com.example",
      url: baseSeo.canonical,
    }, */
    web: {
      url: baseSeo.canonical,
      should_fallback: false,
    },
  },
  icons: baseSeo.Icon,
  publisher:baseSeo.publisher,
  viewport:baseSeo.viewport,
  robots:baseSeo.robots,
  alternates:baseSeo.alternates,
  bookmarks:baseSeo.bookmarks,
  
};


export default function Home() {
  
  return (
    <>
  
      <GlobalNav />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
            <SliderHome typeManga={null}/>
            <AdsTop/>
            <HistoryHome/>
            <PopupHome typeManga={null} nameLable={null}/>
            
            <LastUpdateHome typeManga={null}/>
            <AdsDetail/>
            <TopComment />
           
        </main>
      </div>
    </>
  );
}
