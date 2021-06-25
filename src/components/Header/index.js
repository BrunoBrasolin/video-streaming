import React from 'react';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import './styles.css';

export default function Header() {
	const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
	const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	return (
		<header className="header">
			<div className="usernameDateTime">
				<FaUserAlt size={28} color="#000" />

				<div className="content">
					<span className="primaryText">
						{new Date().getHours()}:{new Date().getMinutes() < 10 ? '0' : ''}
						{new Date().getMinutes()}
					</span>
					<span className="secondaryText">
						{days[new Date().getDay()]}, {new Date().getDate()} de {months[new Date().getMonth()]}
					</span>
				</div>
			</div>

			<nav className="navbar">
				<ul className="list">
					<li className="item">
						<a href="#" title="Home" className="link">
							Home
						</a>
					</li>
					<li className="item">
						<a href="#" title="Movies" className="link">
							Movies
						</a>
					</li>
					<li className="item">
						<a href="#" title="Series" className="link">
							Series
						</a>
					</li>
				</ul>
			</nav>

			<div className="svgContainer">
				<FaMoon size={16} color="#000" />
				{/* <FaSun size={16} color="#fff" /> */}
			</div>
		</header>
	);
}
