import React from 'react';

import { Cloudinary } from '@cloudinary/url-gen';

import './Welcome.css';
import Avatar from '../../shared/Avatar';

const Welcome = () => {
	const cld = new Cloudinary({ cloud: { cloudName: 'dweffaoxw' } });
	const logo = cld.image('bonafide').toURL();

	const data = {
		an: {
			name: 'An Ho',
			img: cld.image('an-ava'),
			intro:
				'An Ho là sinh viên ngành Sản xuất Âm nhạc (Music Technology & Production) và Kinh tế (Business Economics) của Providence College. Qua Mỹ từ năm lớp 9, với thiên hướng nghệ thuật bẩm sinh và được rèn luyện trong môi trường học thuật, Ân sẽ phụ trách việc thảo luận và đồng hành với các bạn có nhu cầu du học mảng nghệ thuật ở Mỹ.',
			school: cld.image('providence'),
			modalId: 'anModal',
		},
		nhan: {
			name: 'Nhan Nguyen',
			img: cld.image('nhan-ava'),
			intro:
				'Nhan Nguyen đã có kinh nghiệm dạy tiếng Anh ở Huế hơn 7 năm qua, thầy Nhân cung cấp các khóa học được thiết kế riêng cho từng học viên với các mục tiêu cụ thể phù hợp với khả năng và điều kiện của người học. \n Hiện tại, Nhan Nguyen đang theo học chương trình Thạc sĩ Giáo dục quốc tế tại Đại học tư thục Providence College và là đồng sáng lập Bona Fide Education.',
			school: cld.image('providence'),
			modalId: 'nhanModal',
		},
		brian: {
			name: 'Brian Huynh',
			img: cld.image('brian-ava'),
			intro:
				'Brian Huynh, là sinh viên chuyên ngành Tài chính tại Đại học top 10 nước Mỹ, Brown University.  Brian sinh ra và lớn lên tại Mỹ nhưng mang trong mình ước muốn công hiến và làm việc tại Việt Nam sau khi tốt nghiệp. Với thành tích học tập xuất sắc bao gồm Thủ khoa của Class of 2022 tại Henninger High School và luôn giữ thành tích 4.0 GPA tại Brown University. Brian sẽ phụ trách mảng SAT của Bona Fide Education.',
			school: cld.image('brown'),
			modalId: 'brianModal',
		},
		huy: {
			name: 'Le Gia Huy',
			img: cld.image('huy-ava'),
			intro:
				'Le Gia Huy là sinh viên ngành Công nghệ Máy tính (Computer Science) tại Đại học Cincinnati ở bang Ohio. Huy từng và học sinh chuyên Anh tại trường chuyên Quốc Học, Huế, với thành tích IELTS 8.5 overall và SAT 1530. Huy sẽ phụ trách IELTS Writing và Reading của Bona Fide Education.',
			school: cld.image('cincinnati'),
			modalId: 'huyModal',
		},
	};
	return (
		<>
			<div class='container-fluid p-4 welcome-bg globe text-center full-height'>
				<div className='title row text-center align-items-center height-20 pt-3 mt-2'>
					<h1>Welcome from our instructors</h1>
				</div>
				<div className='row height-80 mt-1'>
					<div class='col-md-5 d-flex justify-content-center align-items-center dove-welcome'>
						<p className='h1 bona-fide'>
							If something <br /> is made 'Bona Fide',
							<br /> it's sincere, genuine <br /> and authentic.
						</p>
					</div>
					<div class='col'>
						<div class='row row-cols-2 height-100'>
							<div class='col-12 d-flex justify-content-evenly align-items-center'>
								<Avatar
									image={data.an.img}
									imgClassName={'ava-large an-ava'}
									intro={data.an.intro}
									name={data.an.name}
									school={data.an.school}
									modalId={data.an.modalId}
								/>
								<Avatar
									image={data.brian.img}
									imgClassName='ava-large'
									intro={data.brian.intro}
									name={data.brian.name}
									school={data.brian.school}
									modalId={data.brian.modalId}
								/>
							</div>
							<div class='col-12 d-flex justify-content-evenly align-items-center'>
								<Avatar
									image={data.huy.img}
									imgClassName='ava-large'
									intro={data.huy.intro}
									name={data.huy.name}
									school={data.huy.school}
									modalId={data.huy.modalId}
								/>
								<Avatar
									image={data.nhan.img}
									imgClassName='ava-large'
									intro={data.nhan.intro}
									name={data.nhan.name}
									school={data.nhan.school}
									modalId={data.nhan.modalId}
								/>
							</div>
						</div>
					</div>
					<div />
				</div>
			</div>
		</>
	);
};

export default Welcome;
