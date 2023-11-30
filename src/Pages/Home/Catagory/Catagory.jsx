
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
import slide4 from '../../../assets/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Catagory = () => {
    return (
        <>
            <section>
                <SectionTitle
                    subheading={'Open 11.00am to 10.00pm'}
                    heading={'ORDER NOW'}
                >
                    {/* text-center py-10 mt-4 */}
                </SectionTitle>
            </section>
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

                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-white text-2xl -mt-16 text-center uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-white text-2xl -mt-16 text-center uppercase'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-white text-2xl -mt-16 text-center uppercase'>soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className=' text-white text-2xl -mt-16 text-center uppercase'>desert</h3>
                </SwiperSlide>

                <SwiperSlide><img src={slide1} alt="" />
                    <h3 className='text-white text-2xl text-center uppercase'>salad</h3>

                </SwiperSlide>
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