"use client";
import { GroupStyle } from "@/ui/group-stype";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper";
import "@/styles/slide.css"
import { Navigation } from "swiper";
import { ItemSlide } from "@/ui/item-slide";
import { ItemSlideStart } from "@/ui/item-slide-start";
import { ItemPopular } from "@/ui/item-popular";
import { TableLastUpdate } from "@/ui/table-last-update";



export default function Home() {
  return (
    <main>
      <GroupStyle labels="Manga Hot">
        <div className="flex flex-wrap items-stretch pt-1">
          <ItemSlideStart text="start"/>
          <ItemSlide text="Tensei Shitara Slime Datta"/>
          <ItemSlide text="Tensei Shitara Slime Datta"/>
          <ItemSlide text="Tensei Shitara Slime Datta"/>
          <ItemSlide text="Tensei Shitara Slime Datta"/>
        </div>
       
      </GroupStyle>
      <GroupStyle labels="Manga Poppular">
        <div className="flex flex-wrap items-stretch pt-1">
          <ItemPopular text="Tensei Shitara Slime Datta"/>
          <ItemPopular text="Tensei Shitara Slime Datta"/>
          <ItemPopular text="Tensei Shitara Slime Datta"/>
          <ItemPopular text="Tensei Shitara Slime Datta"/>
        </div>
       
      </GroupStyle>
      <GroupStyle labels="Manga last Update">
        <div className="bg-gradient-to-tr from-slate-800 from-10% via-slate-200 via-70% to-slate-800 to-10%">
       <TableLastUpdate/>
       </div>
      </GroupStyle>
      <button
        type="button"
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
      >
        Hover me
      </button>
    </main>
  );
}
