"use client"
import LRU from 'lru-cache';
import { useState, useEffect } from 'react';

const cache = new LRU({ max: 100 });

const ImageLoading = ({url,title,}:{url:string,title:string}) => {
  const [imgSrc, setImgSrc] = useState<string>();

  useEffect(() => {
    if (cache.has(url)) {
      const _x=cache.get(url) as string;
      setImgSrc(_x);
      return;
    }

    const img = new Image();
    img.onload = () => {
      setImgSrc(url);
      cache.set(url, url);
    }
    img.src = url;
    img.alt=title;

  }, [url]);

  return <img src={imgSrc} alt="My Image" />;
};

export default ImageLoading;