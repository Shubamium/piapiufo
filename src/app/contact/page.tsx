import React from "react";
import "./contact.scss";
import { FaCopy } from "react-icons/fa";
type Props = {};

export default function ContactPage({}: Props) {
  return (
    <main id="page_contact">
      <div className="confine">
        <section id="contact-info">
          <div className="heading">
            <h1 className="main-h">
              CONTACT{" "}
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_61_1044)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.013 2.16832C12.7566 1.42577 13.6495 0.849735 14.6326 0.478403C15.6157 0.107071 16.6664 -0.0510831 17.7152 0.0144218C18.764 0.0799267 19.7869 0.367595 20.7161 0.858362C21.6454 1.34913 22.4597 2.03179 23.1052 2.8611L30.7337 12.6621C32.1319 14.4599 32.6249 16.8017 32.0724 19.0118L29.7477 28.3198C29.6283 28.8019 29.6353 29.3067 29.7678 29.7854C29.9003 30.2641 30.1539 30.7005 30.5042 31.0526L40.9461 41.4954C41.2986 41.8464 41.7358 42.1005 42.2152 42.233C42.6947 42.3655 43.2003 42.372 43.683 42.2519L52.986 39.9271C54.0767 39.6559 55.2146 39.6356 56.3143 39.8674C57.414 40.0993 58.4469 40.5774 59.3353 41.2659L69.1355 48.8907C72.6586 51.6321 72.9816 56.8386 69.8282 59.988L65.4338 64.3827C62.2889 67.5278 57.5886 68.9091 53.207 67.3663C41.9902 63.4246 31.8069 57.0033 23.4154 48.5804C14.9937 40.1895 8.57295 30.007 4.63098 18.7908C3.09253 14.4131 4.47374 9.70817 7.61864 6.56302L12.013 2.16832Z"
                    fill="#89FFAA"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_61_1044"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
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
                      result="effect1_dropShadow_61_1044"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_61_1044"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </h1>
          </div>
          <article>
            <p>
              <span className="big">I'm Pia,</span> a variety focused content
              creator and VTuber that has been making content for over 3 years.
              I am affiliated on Twitch and partnered on YouTube where my
              content is quite broad- I do art, singing, gaming, cooking, and
              more. I excel at skit-based humor, improv, and I've cultivated an
              audience that's culturally diverse and Igbtqia+ friendly.
            </p>
            <p>
              I target a mix-gendered audience in N. America, but due to my
              bilingualism (Eng./Japanese) I've also capture the attention of
              viewers in Japan/SEA. Current sponsorships include{" "}
              <strong>Gamer Supps</strong>
              (partner), <strong>ViteRamen</strong> (ambassador), and
              <strong> Captain.TV</strong>(partner).
            </p>
            <p>
              I've also been sponsored by numerous gaming companies such as
              Xseed and Nintendo and have worked with brands such as Sony,
              Mattel, VRChat, and Wonderverse. I communicate quickly and operate
              professionally. Looking forward to working with you!
            </p>
          </article>
          <div className="planet-stat">
            <div className="stat">
              <div className="planet"></div>
              <h2 className="white-b">15.2K</h2>
              <p className="white-b">YOUTUBE</p>
            </div>
            <div className="stat">
              <div className="planet"></div>
              <h2 className="white-b">15.2K</h2>
              <p className="white-b">YOUTUBE</p>
            </div>
            <div className="stat">
              <div className="planet"></div>
              <h2 className="white-b">15.2K</h2>
              <p className="white-b">YOUTUBE</p>
            </div>
          </div>
          <div className="contact-action">
            <a href="mailto:PiaPiUFO@gmail.com" className="btn btn-primary">
              Email Me!
            </a>
            <p className="mail btn">
              PiaPiUFO@gmail.com <FaCopy />
            </p>
          </div>
        </section>
        <figure id="contact-art">
          <img src="/gfx/contact-art.png" alt="" className="art dc" />
        </figure>
      </div>
    </main>
  );
}
