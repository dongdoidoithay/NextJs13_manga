import baseSeo from "@/constants/baseSeo";
import { GroupStyle } from "@/ui/group-stype";
import { Metadata } from "next";

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
export default function Type() {
  return (
    <main className="px-2">
      <GroupStyle labels="Manga Page type">
        <div> Type</div>
      </GroupStyle>
    </main>
  );
}
