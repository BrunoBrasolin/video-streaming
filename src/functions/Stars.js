import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Stars(score) {
	if (score === 0)
		return (
			<>
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 0.5)
		return (
			<>
				<FaStarHalfAlt color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 1)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 1.5)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStarHalfAlt color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 2)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 2.5)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStarHalfAlt color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 3)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 3.5)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStarHalfAlt color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 4)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaRegStar color="#ffcd1b" size={24} />
			</>
		);
	if (score === 4.5)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStarHalfAlt color="#ffcd1b" size={24} />
			</>
		);
	if (score === 5)
		return (
			<>
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
				<FaStar color="#ffcd1b" size={24} />
			</>
		);
}
