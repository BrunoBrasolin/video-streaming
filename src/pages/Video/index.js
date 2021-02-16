import React from "react";
import Header from "../../components/Header";
import NetflixLogo from "../../assets/images/Netflix_Logo_RGB.png";
import "./styles.css";

export default function Video() {
  return (
    <>
      <Header />
      <main>
        <img id="logo" src={NetflixLogo} alt="Netflix" title="Netflix" />
        <section className="detail">
          <h2 id="detail__title">Video Title</h2>
          <div>
            <span>stars</span>
            <span>year</span>
            <span>seasons/duration</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis praesentium quia beatae odit labore, est repudiandae. Et earum quos architecto provident, quisquam laborum in id
            maiores asperiores, perferendis tempore!
          </p>
        </section>
      </main>
    </>
  );
}
