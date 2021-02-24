import React, { useState } from "react";
import Header from "../../components/Header";
import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import Stars from "../../functions/Stars";
import "./styles.css";

export default function Video() {
  const [like, setLike] = useState(false);

  return (
    <>
      <Header />
      <main className="container">
        <section id="content">
          <section id="detail">
            <img id="logo" src={NetflixLogo} alt="Netflix" title="Netflix" />
            <h2 id="detail__title">Captain America: The Winter Soldier</h2>
            <section id="detail__info">
              <span title={`${5} de 5`}>{Stars(5)}</span>
              <span>2014</span>
              <span>2h 16m</span>
            </section>
            <p id="detail__about">
              After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America (Chris Evans), lives in the nation's capital as he tries to adjust to modern times.
              An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow (Scarlett Johansson) and a new ally,
              the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.
            </p>
          </section>
          <section id="actions">
            <div id="actions__action-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
              </svg>
              <span>Play</span>
            </div>

            <div id="actions__action-container" className={like ? "liked" : ""} onClick={() => setLike(!like)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z" />
              </svg>
              <span>Like</span>
            </div>

            <div id="actions__action-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4 5v18h20v-18h-20zm4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm10 12h-8v-6h8v6zm0-8h-8v-6h8v6zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-1-6h-19v17h-2v-19h21v2z" />
              </svg>
              <span>Watch Trailer</span>
            </div>

            <div id="actions__action-container">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
              </svg>
              <span>Remove from list</span> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
              <span>Add to list</span>
            </div>
          </section>
        </section>
        <img id="aside-image" src="https://2.bp.blogspot.com/-tCDAlmCpOpU/V5zijdqlFlI/AAAAAAAAH04/iP229pnHw3sL7Py_7fdKcfPTi9ghkaflgCLcB/s1600/capitao%2Bffff.png" alt="Random" title="Random" />
        <div id="aside-background"></div>
      </main>
    </>
  );
}
