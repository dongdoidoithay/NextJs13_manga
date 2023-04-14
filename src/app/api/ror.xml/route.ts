import { FetchApi } from "@/constants/FetchApi";
import { ActMangaSource, MangaLang, SelectMangaTypeByPage } from "@/constants/configBase";
const FetchData = async (config: MangaLang) => {
  return await FetchApi(config.apiPath + config.endPointPath.sitemapDoc + 20);
};
export async function GET(request: Request) {
  try {
    let config = SelectMangaTypeByPage("");
    let xmlresult:any = [];
    for (const item of ActMangaSource) {
      config = SelectMangaTypeByPage(item.value);
      let _data = await FetchData(config);
      //console.log("server-sitemap", _data);
      let fields = _data.map((item: any) => {
        const url = `${config.configPrefix.url_host}${config.configPrefix.pageManga}/${config.configPrefix.startManga}${item.idDoc}${config.configPrefix.endManga}`;
        return `<item>
        <link>${url}</link>
        <title><![CDATA[${item.name}]]></title>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <description><![CDATA[${item.nameOther} ${item.desc?item.desc.replace(/{domain}/gm,config.configSetting.lbl_domain_Page):''} tag ${item.tags?item.tags:''}]]></description>
        <ror:updatePeriod>always</ror:updatePeriod>
        <ror:sortOrder>0</ror:sortOrder>
        <ror:type>Product</ror:type>
        </item>`;
      });
      xmlresult = xmlresult.concat(fields);
    }



  // Add urlSet to entire sitemap string

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:ror="http://rorweb.com/0.1/"  xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
    <title>${config.configSetting.sb_seo_df_title}</title>
    <link>${config.configPrefix.url_host}</link>
    <item>
       <title>${config.configSetting.sb_seo_df_title}</title>  
       <link>${config.configPrefix.url_host}</link>
       <description>${config.configSetting.sb_seo_page_default_desc}</description>
       <ror:type>Main</ror:type>
       <ror:keywords>${config.configSetting.sb_seo_page_default_key}</ror:keywords>
      <ror:image>${config.configSetting.sb_seo_default_image}</ror:image>
       <ror:updated>${new Date().toUTCString()}</ror:updated>
       <ror:updatePeriod>day</ror:updatePeriod>
    </item>

    ${xmlresult.join("")}

  <item>
      <title>Sitemap</title>
      <ror:type>SiteMap</ror:type>
      <ror:seeAlso>${config.configPrefix.url_host}/server-sitemap.xml</ror:seeAlso>
  </item>
    </channel>
    </rss>`;
      return new Response(sitemap, {
        status: 200,
        headers: {
            'content-type': 'text/xml; charset=utf-8',
            'Accept-Encoding':'*'
        },
    })
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e;
    }
    return new Response(JSON.stringify(e), {
      status: 500,
      headers: {
          'content-type': 'text/plain',
          },
      })
  }
}
