"use client";
import SectionHeader from "../Common/SectionHeader";

// Importing necessary swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

// Static video data for the carousel
const videoData = [
  {
    id: "1",
    title: "Video 1",
    videoUrl: "video.mp4", // Replace with actual video URLs
    description: "/thumb.png",
  },
  {
    id: "2",
    title: "Video 2",
    videoUrl: "video.mp4", // Replace with actual video URLs
    description: "/51.png",
  },
  {
    id: "3",
    title: "Video 3",
    videoUrl: "/video.mp4", // Replace with actual video URLs
    description: "/52.png",
  },
  {
    id: "4",
    title: "Video 3",
    videoUrl: "/video.mp4", // Replace with actual video URLs
    description: "/thumb.png",
  },
  // Add more videos as needed
];

const VideoCarousel = () => {
  return (
    <>
      <section className="flex  w-[94%] mx-auto">
        <div className="w-4/12  p-[65px]">
            <h2 className="font-inter text-4xl text-black font-bold leading-[58.09px] text-left underline-from-font decoration-skip-ink-none">See What’s Happening in Real Time</h2>
            <p className="pr-3  text-gray-900 font-extrabold ">Stay connected with us through Instagram Reels! </p>
                <p className="flex gap-2 underline justify-center text-black font-extrabold ">Follow along and be part of the journey! <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50882 0.00752529C10.746 0.00752529 11.9831 -0.011625 13.2193 0.011173C16.0989 0.0640641 18.4356 2.38033 18.4757 5.2629C18.5103 7.77705 18.5085 10.2921 18.473 12.8063C18.4375 15.3861 16.3823 17.6257 13.8269 17.9422C13.632 17.9668 13.4343 17.9878 13.2375 17.9878C10.7405 17.9905 8.24345 18.017 5.74733 17.9823C2.89866 17.9422 0.563781 15.6004 0.524609 12.7461C0.490902 10.2474 0.490902 7.74696 0.524609 5.24831C0.564692 2.39675 2.90594 0.0677118 5.7528 0.0120849C7.0045 -0.0125369 8.25712 0.00843721 9.50882 0.00752529ZM9.51429 1.80035C8.3382 1.80035 7.1621 1.7967 5.98601 1.80309C5.73731 1.80491 5.48406 1.82133 5.23991 1.86966C3.49536 2.21892 2.3138 3.66613 2.31016 5.45349C2.3056 7.80076 2.30742 10.148 2.30924 12.4953C2.31016 14.6201 3.88253 16.1959 6.00514 16.1977C8.35004 16.2004 10.6949 16.2004 13.0398 16.1949C13.2812 16.1949 13.5263 16.1749 13.7632 16.1275C15.4968 15.78 16.6874 14.3356 16.692 12.5655C16.6984 10.2027 16.6956 7.84089 16.6938 5.47811C16.692 3.38344 15.1114 1.80126 13.0207 1.79853C11.8519 1.7967 10.6831 1.79853 9.5152 1.79853L9.51429 1.80035Z" fill="black"/>
<path d="M9.53624 4.49645C12.0196 4.52745 14.0247 6.56103 14.0019 9.02502C13.9782 11.5054 11.9413 13.5235 9.48341 13.5016C6.9964 13.4797 4.97581 11.4297 5.00679 8.96028C5.03776 6.47804 7.0793 4.46544 9.53624 4.49645ZM6.81238 8.99037C6.80964 10.4814 8.00942 11.6896 9.49525 11.6933C10.9847 11.6969 12.1918 10.495 12.1954 9.0077C12.1982 7.5158 11.0002 6.30842 9.51256 6.30478C8.02308 6.30113 6.81602 7.50303 6.81238 8.99037Z" fill="black"/>
<path d="M14.0013 3.61524C14.516 3.61706 14.895 3.99642 14.8913 4.50801C14.8877 5.00774 14.4896 5.40168 13.9904 5.39895C13.4939 5.39713 13.0976 4.99497 13.0994 4.49706C13.1012 3.98913 13.4866 3.61342 14.0022 3.61524H14.0013Z" fill="black"/>
</svg>
</p>
        </div>
            <div className="w-8/12"> 
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto  "
        >
          {/* Video Carousel */}
          <div className="swiper video-carousel mb-20 pb-22.5">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {videoData.map((video) => (
                <SwiperSlide key={video?.id}>
                  <div className="video-slide bg-white rounded-lg shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
                   
                    <div className="video-container mb-6">
                      <video
                        className="w-full rounded-lg"
                        controls
                        poster={video.description} // Optional thumbnail image
                      >
                        <source src={video?.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default VideoCarousel;
