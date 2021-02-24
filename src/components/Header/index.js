import React from "react";
import "./styles.css";

export default function Header() {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <header>
      <div id="usernameDateTime">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
        </svg>

        <div className="content">
          <span className="primaryText">
            {new Date().getHours()}:{new Date().getMinutes() < 10 ? "0" : ""}
            {new Date().getMinutes()}
          </span>
          <span className="secondaryText">
            {days[new Date().getDay()]}, {new Date().getDate()} de {months[new Date().getMonth()]}
          </span>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" title="Movies">
              Movies
            </a>
          </li>
          <li>
            <a href="#" title="Series">
              Series
            </a>
          </li>
        </ul>
      </nav>

      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z" />
        </svg>
      </div>
    </header>
  );
}
