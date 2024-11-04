// import React from "react";

// export default function Carousel({ pictures }) {
//   return (
//     <div className="carousel mx-3 md:mx-0 md:w-full rounded">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img src={pictures[0]} className="w-full" alt="Number 1" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide4" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <img src={pictures[1]} className="w-full" alt="Number 2"/>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide1" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img src={pictures[2]} className="w-full" alt="Number 3" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <img src={pictures[3]} className="w-full" alt="Number 4"/>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide3" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel({pictures}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded"
      >
        <SwiperSlide><img src={pictures[0]} alt='swiper slide' /></SwiperSlide>
        <SwiperSlide><img src={pictures[1]} alt='swiper slide' /></SwiperSlide>
        <SwiperSlide><img src={pictures[2]} alt='swiper slide' /></SwiperSlide>
        <SwiperSlide><img src={pictures[3]} alt='swiper slide' /></SwiperSlide>
      </Swiper>
    </>
  );
}
