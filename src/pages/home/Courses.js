import React from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import Card from '../../shared/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Courses.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Courses = () => {
	const cld = new Cloudinary({ cloud: { cloudName: 'dweffaoxw' } });

	const data = {
		ielts: {
			title: 'IELTS',
			info: '(International English Language Testing System) kì thi chuẩn hóa để nộp đơn vào các Đại học ở Mỹ, chuẩn bị xa cho việc sử dụng tiếng Anh trong mảng học thuật.',
			image: cld.image('ielts'),
		},
		sat: {
			title: 'SAT',
			info: '(Scholastic Aptitude Test) là một trong những kỳ thi chuẩn hóa cho việc đăng ký vào một số trường đại học của Mỹ.',
			image: cld.image('sat'),
		},
		academic: {
			title: 'Academic Writing',
			info: 'Dành cho các bạn muốn nâng cao kĩ năng viết luận, tư duy phản biện, chuẩn bị cho việc làm bài ở các Đại học Mỹ, vốn yêu cầu viết essay rất nhiều.',
			image: cld.image('academicWriting'),
		},
		ipa: {
			title: 'IPA',
			info: '(International Phonetic Alphabet) khóa luyện phát âm cơ bản cho người Việt, sẽ do giảng viên người Mỹ, hoặc sinh viên Mỹ gốc Việt dạy (vì đa số chúng ta sẽ phát âm chưa chuẩn nên khóa này sẽ được thiết kế để xây lại căn bản về phát âm)',
			image: cld.image('ipa'),
		},
		no_border: {
			title: 'Teachers without borders',
			info: "Mỗi người học sẽ được kết nối với một sinh viên bản ngữ tại Mỹ để trò chuyện, trao đổi ý tưởng với tần suất 60’/tuần, trong 3 tháng. Đây là chương trình miễn phí, nhằm hỗ trợ những người học không có khả năng chi trả cho việc học trực tiếp với người bản ngữ. Một bài luận ngắn 'Who am I' sẽ được yêu cầu khi bạn đăng kí.",
			image: cld.image('brown-bg'),
		},
	};
	return (
		<>
			<div class='container-fluid courses-bg text-center full-height d-flex flex-column align-items-center globe'>
				<div className='container d-flex justify-content-center align-items-center height-20 pt-4'>
					<h1 className='courses-title'>Our courses</h1>
				</div>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 3,
						},
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<Card
							title={data.no_border.title}
							info={data.no_border.info}
							image={data.no_border.image}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							title={data.ielts.title}
							info={data.ielts.info}
							image={data.ielts.image}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							title={data.sat.title}
							info={data.sat.info}
							image={data.sat.image}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							title={data.ipa.title}
							info={data.ipa.info}
							image={data.ipa.image}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Card
							title={data.academic.title}
							info={data.academic.info}
							image={data.academic.image}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Courses;
