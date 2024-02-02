import React from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import { motion } from 'framer-motion';

import Footer from '../../shared/Footer';

import './About.css';

const About = () => {
	const cld = new Cloudinary({ cloud: { cloudName: 'dweffaoxw' } });
	const church = cld.image('church').toURL();

	return (
		<>
			<div className='container-fluid about-head d-flex align-items-center justify-content-center'>
				<motion.div
					className='header-title'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.0 }}
				>
					<h1 className='mb-4 fs-1 fw-bold font-monospace '>About Us</h1>
					<a
						href='https://forms.office.com/r/K9kxsJB88m?origin=lprLink'
						className='register'
						target='_blank'
						rel='noopener noreferrer'
					>
						Register here!
					</a>
				</motion.div>
			</div>
			<div
				className='container-fl56uid about-info about-bg d-flex flex-column align-items-center justify-content-center'
				style={{ backgroundImage: `url(${church})` }}
			>
				<div className='about-text'>
					<div className='row h-20 align-items-center justify-content-center'>
						<h1 className='about-title'>...with good faith</h1>
					</div>
					<div className='row h-80 align-items-start justify-content-center'>
						<p>
							Bona Fide Education được thành lập để hỗ trợ người học tiếng Anh
							trong hành trình tiếp cân với ngôn ngữ này để chuẩn bị gần và xa
							cho một viễn cảnh rộng hơn khi có cơ hội tiếp cận với văn hóa và
							cuộc sống tại Hoa Kỳ. Chúng tôi mong muốn trở thành mối dây kết
							nối giúp các bạn ở Việt Nam có thể tiếp cận gần hơn với nền giáo
							dục chúng tôi đang theo đuổi tại Hoa Kỳ, dù nó không hoàn hảo
							nhưng vẫn có thật nhiều điều bổ ích đẻ chúng ta có thể cùng nhau
							gieo hạt và vun xới mảnh vườn trí thức của mình… <br /> Bona Fide
							có thể được hiểu là: with good faith - với niềm tin chân thành.
							Nếu một điều gì đó gọi là bona fide, nghĩa là nó đã được thực hiện
							một cách thật chân thành và hết lòng. If something was made bona
							fide, then it is sincere, genuine or authentic.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
