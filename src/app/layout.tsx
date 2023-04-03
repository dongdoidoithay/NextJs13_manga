import "@/styles/globals.css";

import { Metadata } from "next";

import baseSeo from "@/constants/baseSeo";
import { GlobalNav } from "@/ui/global-nav";

export const metadata: Metadata = {
  title: {
    default: baseSeo.title,
    template: "%s | " + baseSeo.domainName,
  },
  description: baseSeo.description,
  keywords: baseSeo.keywords,
  openGraph: {
    title: baseSeo.title,
    description: baseSeo.description,
    type: "website",
    images: baseSeo.images,
    siteName: baseSeo.domainName,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSeo.canonical,
    creator: baseSeo.domainName,
    images: baseSeo.images,
  },
  category:"manga, novels, comic, anime",
  archives:baseSeo.archives,
  appLinks:{
     ios: {
       app_store_id: "123456789", 
       url:  baseSeo.canonical
      }, 
     android: {
       package: "com.example",
       url:  baseSeo.canonical
      },
    web:{
      url: baseSeo.canonical,
      should_fallback:false
    } 
    },
    icons:baseSeo.Icon
};

export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="antialiased text-slate-500 dark:text-slate-400 dark:bg-slate-900  overflow-y-scroll bg-gray-950 bg-[url('/grid.svg')]">
        <GlobalNav/>
       
        <div className="lg:pl-72 flex flex-row">
          <div className="grow px-1 max-w-4xl space-y-2 pt-1 lg:py-2 ">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                {/* <AddressBar /> */}
                breacrum
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          
          </div>
          <div className="flex-none max-w-xs space-y-2 pt-1 lg:py-2 ">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">
                sugges
              </div>
          </div>
        </div>
      </body>
    </html>
  );
}
