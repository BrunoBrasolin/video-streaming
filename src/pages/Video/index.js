import React, { useState } from 'react';
import Stars from '../../functions/Stars';
import Header from '../../components/Header';
import NetflixLogo from '../../assets/images/Netflix_Logo_RGB.png';
import { FaPlayCircle, FaThumbsUp, FaPlusCircle, FaTimesCircle, FaFilm } from 'react-icons/fa';

import './styles.css';
import './dark-theme.css';

export default function Video() {
	const [like, setLike] = useState(false);
	const rate = 3.5;

	return (
		<>
			<Header />
			<main className="video-page container">
				<section className="detail">
					<img className="logo" src={NetflixLogo} alt="Netflix" title="Netflix" />
					<h2 className="detail__title">Captain America: The Winter Soldier</h2>
					<section className="detail__info">
						<span title={`${rate} de 5`}>{Stars(rate)}</span>
						<span>2014</span>
						<span>2h 16m</span>
					</section>
					<p className="detail__about">
						After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's
						capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the
						whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally, the Falcon, Rogers struggles to expose an
						ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.
					</p>
				</section>
				<section className="actions">
					<div className="actions__action-container">
						<FaPlayCircle size={24} />
						<span>Play</span>
					</div>

					<div className={`actions__action-container ${like ? 'liked' : ''}`} onClick={() => setLike(!like)}>
						<FaThumbsUp size={24} />
						<span>Like</span>
					</div>

					<div className="actions__action-container">
						<FaFilm size={24} />
						<span>Watch Trailer</span>
					</div>

					<div className="actions__action-container">
						{/* <FaTimesCircle size={24} />
              <span>Remove from list</span> */}
						<FaPlusCircle size={24} />
						<span>Add to list</span>
					</div>
				</section>
				<img
					className="aside-image"
					src="https://2.bp.blogspot.com/-tCDAlmCpOpU/V5zijdqlFlI/AAAAAAAAH04/iP229pnHw3sL7Py_7fdKcfPTi9ghkaflgCLcB/s1600/capitao%2Bffff.png"
					alt="Random"
					title="Random"
				/>
				<div className="aside-background"></div>
			</main>
		</>
	);
}
