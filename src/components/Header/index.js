import React, { useState } from 'react';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import './styles.css';
import './dark-theme.css';

export default function Header() {
	const [icon, setIcon] = useState(<FaMoon size={18} color="#000" />);
	const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
	const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	function switchTheme() {
		const body = document.querySelector('body');

		if (body.classList.contains('dark-theme')) {
			setIcon(<FaMoon size={18} color="#000" />);
			body.classList.remove('dark-theme');
		} else {
			setIcon(<FaSun size={18} color="#fff" />);
			body.classList.add('dark-theme');
		}
	}

	return (
		<header className="header">
			<div className="usernameDateTime">
				<FaUserAlt size={28} color={document.querySelector('body').classList.contains('dark-theme') ? '#fff' : '#000'} />

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

			<div className="svgContainer" onClick={switchTheme}>
				{icon}
			</div>
		</header>
	);
}
