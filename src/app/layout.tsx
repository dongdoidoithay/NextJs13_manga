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
};

export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-950 bg-[url('/grid.svg')]">
        <GlobalNav/>
        <div className="lg">
          <div className="mx-auto max-w-4xl space-y-8 px-1 pt-1 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                {/* <AddressBar /> */}
                đâsd
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          
          </div>
          <div className="mx-auto max-w-xs">
            sugget manga
          </div>
        </div>
      </body>
    </html>
  );
}
