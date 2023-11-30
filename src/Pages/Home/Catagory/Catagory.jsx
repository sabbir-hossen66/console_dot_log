
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
import slide4 from '../../../assets/slide4.jpg'

const Catagory = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                {/* <SwiperSlide>slide5</SwiperSlide> */}
                {/* <SwiperSlide>slide </SwiperSlide>
                <SwiperSlide>slide</SwiperSlide>
                <SwiperSlide>slide 7</SwiperSlide>
                <SwiperSlide>slide 8</SwiperSlide>
                <SwiperSlide>slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
};

export default Catagory;