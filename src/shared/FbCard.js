import React from 'react';

import './FbCard.css';

const FbCard = () => {
	return (
		<>
			<div class='container'>
				<div class='testimonial-quote left-aligned'>
					<blockquote>
						<p>
							Một tâm lý tốt cùng với những kĩ năng được trau dồi qua từng buổi
							học đã giúp mình đạt mục tiêu chinh phục SAT Reading section và có
							kết quả như mong muốn vào tháng 5. Vậy nên, dù bạn đang có xuất
							phát điểm như thế nào, mình tin rằng Moji Education cũng có thể
							giúp được bạn hoàn thành được nguyện vọng của mình nha! ”
						</p>
					</blockquote>
					<cite>
						<span>Thanh Vân - 1580 SAT</span>
						<br />- Khóa Moji SAT 12/3/2022 -
					</cite>
				</div>
			</div>
		</>
	);
};

export default FbCard;
