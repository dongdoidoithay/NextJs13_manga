import { FetchApi } from '@/constants/FetchApi';
import { SelectMangaTypeByPage } from '@/constants/configBase';
import { promises as fs } from 'fs'
import path from 'path'

let config = SelectMangaTypeByPage('');

export async function GET(request: Request) {
    //console.log("root ==>", process.cwd())
    const publicDirectory = path.join(process.cwd(), 'public')
    //console.log("pub", publicDirectory)

    const filenames = await fs.readdir(publicDirectory)
    //console.log("filenames =>", filenames.join(";"))

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });


    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    let data_robot = targetFiles.map((page) => {
        return `Sitemap: ${config.configPrefix.url_host}/` + page
    });
    //console.log(data_robot)

    let str_item = `User-agent: *\n
 Allow: /\n
 Sitemap: ${config.configPrefix.url_host}/server-sitemap.xml\n\n`
try{
    await fs.unlink(publicDirectory + "/robots.txt")
    await fs.writeFile(
        publicDirectory + "/robots.txt",
        str_item + data_robot.join('\n')
    )
    }catch(e){
console.log(e)
    }
    genIndexSite();
    return new Response(JSON.stringify({ ms: "oke" }), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    })

}

async function genIndexSite() {
    let xmlString = '';

    const publicDirectory = path.join(process.cwd(), 'public')
    const filenames = await fs.readdir(publicDirectory)

    var targetFiles = filenames.filter(function (file) {
        return path.extname(file).toLowerCase() === ".xml";
    });

    targetFiles.map((page) => {
        xmlString += `<sitemap><loc>${config.configPrefix.url_host}/${page}</loc></sitemap>`
    });

    //console.log(xmlString);
    // Write the file to disk
    await fs.writeFile(
        publicDirectory + "/sitemap-index.xml",
        `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
        + xmlString + `</sitemapindex>`
    )
}