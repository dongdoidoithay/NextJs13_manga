"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

import "@/styles/slide.css";
import { ItemSlide } from "@/ui/item-slide";
import { ItemSlideStart } from "@/ui/item-slide-start";
import { GroupStyle } from "@/ui/group-stype";


export const SlideComponent=()=>{
    return(
        <GroupStyle labels="Manga Hot">
        <div className="flex lg:flex-row flex-col items-stretch pt-1">
          <div className="w-1/3 flex mr-11">
            <ItemSlideStart text="start" />
          </div>
          <div className="w-3/4 flex">
            <Swiper
              slidesPerView={5}
              spaceBetween={1}
              /* loop={true} */
              /*  freeMode={true} */
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
             /*  pagination={{
                clickable: true,
              }} */
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
              <SwiperSlide>
                <ItemSlide text="Tensei Shitara Slime Datta" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </GroupStyle>
    );
}