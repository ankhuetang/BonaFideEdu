import React from 'react';

const Avapic = (className) => {
	return (
		<>
			<img
				className={`${className} rounded-circle img-thumbnail`}
				src='https://m.media-amazon.com/images/M/MV5BNzEwOTcxZmItZmZhZC00ZmU1LWExNDItNzBhZTdiMmRkNzIwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg'
				data-bs-toggle='modal'
				data-bs-target='#avatarModal'
			/>
		</>
	);
};

export default Avapic;
