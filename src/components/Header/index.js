import React from "react";
import "./styles.css";

export default function Header() {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <header>
      <div id="usernameDateTime">
        <img src="https://www.leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg" alt="" />
        <div id="dateTime">
          <span id="time">
            {new Date().getHours()}:{new Date().getMinutes()}
          </span>
          <span id="date">
            {days[new Date().getDay()]}, {new Date().getDate()} de {months[new Date().getMonth()]}
          </span>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <div>
          <span>18°</span>
          <span>Mongaguá, SP</span>
        </div>
      </div>
      <img src="" alt="" />
    </header>
  );
}
