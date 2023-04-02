import "@/styles/globals.css";

import { Metadata } from "next";

import baseSeo from "@/constants/baseSeo";

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
    <html lang="en">
      <body>{children}</body>
      {/* JS */}
     
    </html>
  );
}
