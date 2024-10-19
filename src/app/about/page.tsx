import React from "react";
import "./about.scss";
type Props = {};

export default function WatchPage({}: Props) {
  return (
    <main id="page_about">
      <div className="confine">
        <h1 className="main-h">
          ABOUT
          <svg
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.5916 37.2407C14.872 40.5557 8.66663 45.5997 8.66663 51.2504C8.66663 56.4807 13.9966 61.1997 22.5116 64.5017L16.7136 74.1651C16.299 74.9027 16.1884 75.773 16.4054 76.5909C16.6224 77.4088 17.1498 78.1098 17.8756 78.545C18.6013 78.9801 19.4682 79.115 20.2919 78.921C21.1155 78.727 21.831 78.2194 22.2863 77.5061L28.7863 66.6727L28.86 66.5427C34.697 68.0854 41.47 69.0561 48.75 69.2857V82.3334C48.75 83.1953 49.0924 84.022 49.7019 84.6315C50.3114 85.241 51.138 85.5834 52 85.5834C52.8619 85.5834 53.6886 85.241 54.298 84.6315C54.9075 84.022 55.25 83.1953 55.25 82.3334V69.2901C62.53 69.0647 69.303 68.0854 75.14 66.5471L75.2136 66.6771L81.7136 77.5104C81.9265 77.8891 82.2132 78.2213 82.5566 78.4873C82.9001 78.7534 83.2934 78.9478 83.7134 79.0592C84.1333 79.1707 84.5713 79.1967 85.0015 79.1359C85.4316 79.0752 85.8453 78.9287 86.2179 78.7053C86.5905 78.4819 86.9146 78.1861 87.1709 77.8353C87.4272 77.4845 87.6106 77.0859 87.7102 76.663C87.8098 76.2402 87.8236 75.8016 87.7508 75.3733C87.678 74.945 87.52 74.5356 87.2863 74.1694L81.4883 64.5061C90.0033 61.1997 95.3333 56.4851 95.3333 51.2461C95.3333 45.5997 89.128 40.5557 79.4083 37.2407C78.871 38.4974 77.974 39.7714 76.5136 40.7854C73.099 43.1601 66.3 45.5001 52 45.5001C37.7 45.5001 30.9053 43.1601 27.4863 40.7854C26.2058 39.9011 25.2021 38.6721 24.5916 37.2407ZM56.3333 56.3334C56.3333 57.4827 55.8767 58.5849 55.0641 59.3975C54.2514 60.2102 53.1492 60.6667 52 60.6667C50.8507 60.6667 49.7485 60.2102 48.9358 59.3975C48.1232 58.5849 47.6666 57.4827 47.6666 56.3334C47.6666 55.1841 48.1232 54.0819 48.9358 53.2693C49.7485 52.4566 50.8507 52.0001 52 52.0001C53.1492 52.0001 54.2514 52.4566 55.0641 53.2693C55.8767 54.0819 56.3333 55.1841 56.3333 56.3334ZM30.3333 56.3334C31.4826 56.3334 32.5848 55.8768 33.3974 55.0642C34.2101 54.2515 34.6666 53.1493 34.6666 52.0001C34.6666 50.8508 34.2101 49.7486 33.3974 48.9359C32.5848 48.1233 31.4826 47.6667 30.3333 47.6667C29.184 47.6667 28.0818 48.1233 27.2692 48.9359C26.4565 49.7486 26 50.8508 26 52.0001C26 53.1493 26.4565 54.2515 27.2692 55.0642C28.0818 55.8768 29.184 56.3334 30.3333 56.3334ZM78 52.0001C78 53.1493 77.5434 54.2515 76.7308 55.0642C75.9181 55.8768 74.8159 56.3334 73.6666 56.3334C72.5173 56.3334 71.4151 55.8768 70.6025 55.0642C69.7898 54.2515 69.3333 53.1493 69.3333 52.0001C69.3333 50.8508 69.7898 49.7486 70.6025 48.9359C71.4151 48.1233 72.5173 47.6667 73.6666 47.6667C74.8159 47.6667 75.9181 48.1233 76.7308 48.9359C77.5434 49.7486 78 50.8508 78 52.0001Z"
              fill="#89FFAA"
            />
            <path
              opacity="0.5"
              d="M30.5717 34.6884C31.3215 29.8539 33.7759 25.4471 37.4912 22.2643C41.2065 19.0814 45.9377 17.3325 50.83 17.3334H53.1787C58.0702 17.3335 62.8004 19.0829 66.5148 22.2657C70.2292 25.4485 72.6829 29.8547 73.4327 34.6884C73.295 34.9929 73.078 35.2549 72.8043 35.4467C71.0103 36.6947 65.8277 39 52.0043 39C38.181 39 32.9983 36.6947 31.2043 35.4467C30.9307 35.2549 30.7136 34.9929 30.576 34.6884"
              fill="#89FFAA"
            />
          </svg>
        </h1>
        <section id="about_intro">
          <figure>
            <img src="/gfx/chibipi_a.png" alt="" />
          </figure>
          <article className="intro_panel">
            <h2>Ohappi, Konnpi Earthlings! </h2>
            <p>
              My names <span className="name">PiaPiUFO</span>, Bratty Slime
              Alien VTuber with a heart of <span className="gold">gold</span>{" "}
            </p>
            <p className="smoll">
              (please don't ask me where I got the heart... or the gold.){" "}
            </p>
            <img src="/de/dialogue-bar.svg" alt="" className="decor_dialogue" />
          </article>
        </section>
        <section id="about_general">
          <div className="facts panel">
            <div className="banner">
              <img src="/gfx/fact-banner.png" alt="" className="fact-banner" />
            </div>
            <div className="facts-h">
              <hr />
              <img src="/de/star_sm.png" alt="" className="decor_star" />
              <h3>PIAPI FACTS</h3>
              <img src="/de/star_sm.png" alt="" className="decor_star" />
              <hr />
            </div>
            <div className="facts-list">
              <div className="item">
                <h4>Birthday</h4>
                <p>Pickles, UFOs, Boba</p>
              </div>
              <div className="item">
                <h4>Birthday</h4>
                <p>Pickles, UFOs, Boba</p>
              </div>
              <div className="item">
                <h4>Birthday</h4>
                <p>Pickles, UFOs, Boba</p>
              </div>
              <div className="item">
                <h4>Birthday</h4>
                <p>Pickles, UFOs, Boba</p>
              </div>
            </div>
            <div className="facts-ref">
              <button className="btn btn-primary">Reference Sheet</button>
            </div>
          </div>
          <div className="self-intro panel">
            <p>
              I'm <strong>creatively chaotic</strong> and all I want to do is
              destroy the planet, probe humans, and spoil my abductees with
              plenty of pickles! 🥒
            </p>
            <p>
              {" "}
              I'm a variety streamer on Twitch. I stream voice acting, gaming,
              music, art, VR, cooking, and more!
            </p>
            <p>
              I'm not edible and I don't provide any EXP points, but step into
              the light and we can be together forever! 🛸
            </p>
            <p>
              <strong>Most of all, Stay Happi~!</strong>
            </p>
          </div>
          <div className="giant-art">
            <img src="/gfx/aboutpia.png" alt="" className="about-pia" />
          </div>
        </section>
      </div>
    </main>
  );
}
