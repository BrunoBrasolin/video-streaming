import React from "react";
import Header from "../../components/Header";
import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import Stars from "../../functions/Stars";
import "./styles.css";

export default function Video() {
  return (
    <>
      <Header />
      <main className="container">
        <section id="content">
          <img id="logo" src={NetflixLogo} alt="Netflix" title="Netflix" />
          <section id="detail">
            <h2 id="detail__title">Video Title</h2>
            <section id="detail__info">
              <span title={`${3.5} de 5`}>{Stars(3.5)}</span>
              <span>2021</span>
              <span>4 Seasons</span>
            </section>
            <p id="detail__about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis praesentium quia beatae odit labore, est repudiandae. Et earum quos architecto provident, quisquam laborum in id
              maiores asperiores, perferendis tempore!
            </p>
          </section>
          <section id="actions">
            <div id="actions__action-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
              </svg>
              <span>Play S4 E10</span>
            </div>

            <div id="actions__action-container">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M15 21v-10l9 5-9 5zm-3 0h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-6v2h-24v-2h24z" />
              </svg>
              <span>All episodes</span>
            </div>

            <div id="actions__action-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 23v-11c-4.036 0-6 2.715-6 5.5 0 2.807 1.995 5.5 6 5.5zm18-5.5c0-2.785-1.964-5.5-6-5.5v11c4.005 0 6-2.693 6-5.5zm-12-13.522c-3.879-.008-6.861 2.349-7.743 6.195-.751.145-1.479.385-2.161.716.629-5.501 4.319-9.889 9.904-9.889 5.589 0 9.29 4.389 9.916 9.896-.684-.334-1.415-.575-2.169-.721-.881-3.85-3.867-6.205-7.747-6.197z" />
              </svg>
              <span>Audio & Subtitles</span>
            </div>

            <div id="actions__action-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
              </svg>
              <span>Remove from list</span>
            </div>
          </section>
        </section>
        <img id="aside-image" src="https://source.unsplash.com/random/300x625" alt="Random" title="Random" />
        <div id="aside-background"></div>
      </main>
    </>
  );
}
