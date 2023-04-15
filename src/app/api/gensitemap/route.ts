import { FetchApi } from '@/constants/FetchApi';
import { ActMangaSource, MangaLang, SelectMangaTypeByPage } from '@/constants/configBase';
import { promises as fs } from 'fs'
import path from 'path'


const FetchData = async (config: MangaLang, skip: number) => {
    return await FetchApi(config.apiPath + config.endPointPath.sitemapAll + skip + '/' + 2000);
}
export async function GET(request: Request) {
    //console.log("root ==>", process.cwd())
    const publicDirectory = path.join(process.cwd(), 'public')
    //console.log("pub", publicDirectory)

    const filenames = await fs.readdir(publicDirectory)
    //console.log("filenames =>", filenames.join(";"))

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });
    //xoa All file sitemap.xml
    targetFiles.forEach(item => {
      //  console.log("delete==>", publicDirectory + "/" + item)
      //  fs.unlink(publicDirectory + "/" + item)
    });



    let index = 1;
    let config = SelectMangaTypeByPage('');
    for (const item of ActMangaSource) {
        let config = SelectMangaTypeByPage(item.value);

        let loop = true;
        let skip = 0;
        while (loop) {
            const data = await FetchData(config, skip);
            // console.log(list_manga);
            if (data.length <= 0) { loop = false; break; }
            gendocfile(publicDirectory, data, index, config.configPrefix);
            skip = skip + 1;
            index++;

        }
    }

    genIndexSite(config);


    return new Response(JSON.stringify({ ms: "oke" }), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    })
}




async function gendocfile(path: any, data: any, index: any, configPrefix: any) {
    const xml = require('xml')
    const _date = new Date().toISOString();
    const xmlObject = {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9"
                },
            },
            ...data.map((page: any) => {
                return {
                    url: [
                        { loc: `${configPrefix.url_host}${configPrefix.pageManga}/${configPrefix.startManga}${page.idDoc}${configPrefix.endManga}` },
                        { lastmod: _date },
                        { changefreq: 'hourly' },
                        { priority: 0.9 }
                    ]
                }
            })
        ]
    }
    // Generate the XML markup
    const xmlString = xml(xmlObject)
    // Write the file to disk
    await fs.writeFile(
        path + "/sitemap-index" + index + ".xml",
        `<?xml version="1.0" encoding="UTF-8"?>` + xmlString
    )
}

async function genIndexSite(config: any) {
    let xmlString = '';

    const publicDirectory = path.join(process.cwd(), 'public')
    const filenames = await fs.readdir(publicDirectory)

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    targetFiles.map((page) => {
        xmlString += `<sitemap><loc>${config.configPrefix.url_host}/${page}</loc></sitemap>`
    });


    let data_robot = targetFiles.map((page) => {
        return `Sitemap: ${config.configPrefix.url_host}/` + page
    });

    let str_item = `User-agent: *\nAllow: /\n`;

    str_item += `Sitemap: ${config.configPrefix.url_host}/server-sitemap.xml \n`;
    str_item += `Sitemap: ${config.configPrefix.url_host}/sitemap-index.xml \n`;
    try {
        await fs.unlink(publicDirectory + "/robots.txt")
    } catch (e) {
       // console.log("xxxx", e);
    }
    await fs.writeFile(
        publicDirectory + "/robots.txt",
        str_item + data_robot.join('\n')
    )


    //console.log(xmlString);
    // Write the file to disk
    await fs.writeFile(
        publicDirectory + "/sitemap-index.xml",
        `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
        + xmlString + `</sitemapindex>`
    )
}