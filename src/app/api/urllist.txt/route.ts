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
        return `${url}\n`;
      });

      xmlresult = xmlresult.concat(fields);
    }

    // Add urlSet to entire sitemap string
    const sitemap = `${xmlresult.join('')}`;
    return new Response(sitemap, {
      status: 200,
      headers: {
          'content-type': 'text/plain',
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
