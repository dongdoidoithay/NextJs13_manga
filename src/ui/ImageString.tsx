/* "use client"; */
import LRU from "lru-cache";
import { useState, useEffect } from "react";
/* import { LazyImageFull, ImageState, LazyImage } from "react-lazy-images"; */

const cache = new LRU({ max: 100 });

const ImageString = (url:any) => {
  const loadingUrl = "/loading.gif";
  const [imgSrc, setImgSrc] = useState<any>();
  const errorUrl = "/next.svg";
  const noImageUrl = "/noimage.jpg";
//console.log("ImageString=>:",url);

  useEffect(() => {
    if (cache.has(url)) {
      const _x = cache.get(url) as string;
      setImgSrc(_x);
      return;
    }

    const img = new Image();
    img.onload = () => {
      setImgSrc(url);
      cache.set(url, url);
    };
    img.onerror=( e)=>{
      console.log('error image',e)
      setImgSrc(noImageUrl);
      cache.set(url, noImageUrl);
    }
    img.src = url;
  }, [url]);

return imgSrc;
};

export default ImageString;
