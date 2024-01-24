import React from 'react';

import Card from '../../shared/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Courses.css';

import { FreeMode, Pagination } from 'swiper/modules';

const Courses = () => {
	return (
		<>
			<div class='container-fluid p-4 courses-bg text-center full-height d-flex flex-column align-items-center'>
				<div className='container d-flex justify-content-center align-items-center height-20 pt-4'>
					<h1 className='courses-title'>Our courses</h1>
				</div>
				<Swiper
					slidesPerView={3}
					spaceBetween={10}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Courses;
