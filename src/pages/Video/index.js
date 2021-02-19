import React from "react";
import Header from "../../components/Header";
import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import Stars from "../../functions/Stars";
import "./styles.css";

export default function Video() {
  return (
    <>
      <Header />
      <main>
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
              <span>Play S4 E10</span>
            </div>
            <div id="actions__action-container">
              <span>All episodes</span>
            </div>
            <div id="actions__action-container">
              <span>Audio & Subtitles</span>
            </div>
            <div id="actions__action-container">
              <span>Remove from list</span>
            </div>
          </section>
        </section>
        <img id="aside-image" src="https://source.unsplash.com/300x625/?anime" alt="Random" title="Random" />
        <div id="aside-background"></div>
      </main>
    </>
  );
}
