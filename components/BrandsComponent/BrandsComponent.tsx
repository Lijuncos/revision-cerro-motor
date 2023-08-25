'use client'
import data from '@/modules/es.json';
import { ImageInterface } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useWindowSize } from '@/utils/size/useWindowSize';

export default function BrandsComponent() {
    const { width } = useWindowSize()
    const imagenes = [...data.brands.images, ...data.brands.images];

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={
                    (width < 400) ?
                        1
                        : ((width < 992) ?
                            3
                            : ((width < 1500) ?
                                5
                                : 7))
                }
                //slidesPerGroup={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imagenes.map((card: ImageInterface, index: number) => (
                    <SwiperSlide className='swiperSlide' key={`${card.img_id}-${index}`}>
                        <div>
                            <Image
                                src={card.imgSrc}
                                alt={card.imgAlt}
                                width={120}
                                height={120}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}