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

      <div id="weatherSvgLocation">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path d="M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-12.776 6.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.253-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29z" />
        </svg>
        <div className="content">
          <span className="primaryText">18°C</span>
          <span className="secondaryText">Mongaguá, SP</span>
        </div>
      </div>

      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z" />
        </svg>
      </div>
    </header>
  );
}
