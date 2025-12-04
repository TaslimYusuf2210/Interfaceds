import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//Carousel Images
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"

function Carousel() {
    const slides = [
        {id: "01", src: img1, alt:"image 1"},
        {id: "02", src: img2, alt:"image 2"},
        {id: "03", src: img3, alt:"image 3"},
        {id: "04", src: img4, alt:"image 4"},
        {id: "05", src: img5, alt:"image 5"},
        {id: "06", src: img6, alt:"image 6"},
        {id: "07", src: img7, alt:"image 7"},
        {id: "08", src: img8, alt:"image 8"},
    ]
    return ( 
        <div className='flex justify-center items-center h-screen bg-accent'>
            <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
            delay: 2000, // change slide every 4 seconds
            disableOnInteraction: false, // keeps autoplay running after manual swipe
            }}
            loop={true}
            className="w-[340px] md:w-[400px] [--swiper-pagination-color:white] [--swiper-pagination-bullet-inactive-color:white]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div>
                            <img className='w-fit' src={slide.src} alt={slide.alt} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
     );
}

export default Carousel;