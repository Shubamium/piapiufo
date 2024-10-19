import React from "react";
import "./watch.scss";
type Props = {};

export default function WatchPage({}: Props) {
  return (
    <main id="page_watch">
      <section id="watch">
        <figure>
          <img src="/gfx/pia-watch.png" alt="" className="art" />
        </figure>
        <article className="watch-c">
          <div className="watch-h">
            <h1 className="main-h">
              WATCH
              <svg
                width="98"
                height="93"
                viewBox="0 0 98 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_91_180)">
                  <path
                    d="M85 16.8437H59.863L70.1815 6.42487L63.8185 0L49 14.9626L34.1815 0L27.8185 6.42487L38.137 16.8437H13C8.0365 16.8437 4 20.9194 4 25.9312V75.9125C4 80.9243 8.0365 85 13 85H85C89.9635 85 94 80.9243 94 75.9125V25.9312C94 20.9194 89.9635 16.8437 85 16.8437Z"
                    fill="#89FFAA"
                  />
                </g>
                <rect
                  x="10"
                  y="23"
                  width="78"
                  height="50"
                  rx="6"
                  fill="black"
                />
                <defs>
                  <filter
                    id="filter0_d_91_180"
                    x="0"
                    y="0"
                    width="98"
                    height="93"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_91_180"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_91_180"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </h1>
            <p>
              I work a 200+ hour a month job at the probing factory, so
              sometimes my schedule is a little sporadic. I dual stream on both
              <strong>Twitch</strong> and <strong>Youtube</strong> usually at
              10(am) or 10(pm) JST.
            </p>
          </div>
          <div className="watch-btns">
            <a href="#" className="btn btn-primary">
              Twitch
            </a>
            <a href="#" className="btn btn-primary">
              Youtube
            </a>
            <a href="#" className="btn btn-primary">
              Anilive
            </a>
          </div>
          <div className="watch-info">
            <div className="times">
              <img src="/gfx/chibipi_b.png" alt="" />
              <h3>Daily @ 10am or 10pm JST</h3>
              <p> Check Twitter for this week's schedule!</p>
              <a href="#" className="btn btn-primary">
                Twitter
              </a>
            </div>
            <div className="discord">
              <img src="/gfx/piafan.gif" alt="" className="piafan" />
              <h3>Not Enough Pia? </h3>
              <p>Join the Discord!</p>
              <a href="#" className="btn btn-primary">
                Discord
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
