import "@/styles/globals.css";

import { Metadata } from "next";

import baseSeo from "@/constants/baseSeo";
import { GlobalNav } from "@/ui/global-nav";
import { Boundary } from "@/ui/boundary";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible"
    >
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 bg-[url('/grid.svg')]">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="px-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
