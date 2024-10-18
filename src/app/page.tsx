"use client";
import "./home.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiPlayButton } from "react-icons/gi";
export default function Home() {
  const [mc, setMC] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseEvent = (ev: MouseEvent) => {
      setMC({
        x: ev.clientX / window.innerWidth - 0.5,
        y: ev.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", mouseEvent);

    return () => {
      window.removeEventListener("mousemove", mouseEvent);
    };
  }, []);

  return (
    <main id={"page_home"}>
      <section id="hero_nav">
        <figure>
          <img
            src="/gfx/main-hero-art.png"
            alt=""
            className="main-hero-art"
            style={{
              transform: `translateY(${-mc.y * 5}%) translateX(${-mc.x * 2}%)`,
            }}
          />
        </figure>
        <nav id="main_nav">
          <Link href={"/watch"} className="btn nav-planet">
            <div className="planet"></div>

            <svg
              width="98"
              height="93"
              viewBox="0 0 98 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_91_181)">
                <path
                  d="M85 16.8437H59.863L70.1815 6.42487L63.8185 0L49 14.9626L34.1815 0L27.8185 6.42487L38.137 16.8437H13C8.0365 16.8437 4 20.9194 4 25.9312V75.9125C4 80.9243 8.0365 85 13 85H85C89.9635 85 94 80.9243 94 75.9125V25.9312C94 20.9194 89.9635 16.8437 85 16.8437Z"
                  fill="#00456A"
                />
              </g>
              <rect x="10" y="23" width="78" height="50" rx="6" fill="white" />
              <defs>
                <filter
                  id="filter0_d_91_181"
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
                    result="effect1_dropShadow_91_181"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_91_181"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <p className="white-b">WATCH</p>
            <div className="stars">
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
            </div>
          </Link>
          <Link href={"/merch"} className="btn nav-planet">
            <div className="planet"></div>

            <svg
              width="124"
              height="124"
              viewBox="0 0 124 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M110.195 41.3333H95.0667L91.8427 22.072C91.1931 19.1577 89.7664 16.4738 87.7142 14.3051C85.6619 12.1364 83.0607 10.5639 80.1867 9.75466C77.2981 8.83028 74.2909 8.32908 71.2587 8.26666H52.7414C49.7092 8.32908 46.702 8.83028 43.8134 9.75466C40.9394 10.5639 38.3381 12.1364 36.2859 14.3051C34.2337 16.4738 32.807 19.1577 32.1574 22.072L28.9334 41.3333H13.8054C13.1543 41.3294 12.5115 41.4793 11.9293 41.7709C11.3471 42.0625 10.8421 42.4874 10.4553 43.0112C10.0685 43.535 9.81096 44.1427 9.70357 44.7849C9.59619 45.4271 9.64204 46.0856 9.83738 46.7067L25.3787 98.7867C26.1699 101.303 27.7427 103.501 29.8686 105.062C31.9945 106.623 34.5627 107.465 37.2 107.467H86.8C89.4233 107.448 91.9729 106.597 94.0822 105.037C96.1915 103.478 97.7518 101.289 98.5387 98.7867L114.08 46.7067C114.273 46.0922 114.32 45.4411 114.217 44.8052C114.114 44.1693 113.864 43.5663 113.487 43.0444C113.109 42.5224 112.615 42.0958 112.043 41.7987C111.472 41.5017 110.839 41.3423 110.195 41.3333ZM37.3654 41.3333L40.3414 23.3947C40.6676 21.93 41.4244 20.5964 42.5145 19.5652C43.6046 18.534 44.9782 17.8524 46.4587 17.608C48.4923 16.9632 50.6086 16.6077 52.7414 16.5333H71.2587C73.4246 16.605 75.5464 16.9632 77.6241 17.608C79.1046 17.8524 80.4781 18.534 81.5682 19.5652C82.6583 20.5964 83.4151 21.93 83.7414 23.3947L86.6347 41.3333H37.0347H37.3654Z"
                fill="#00456A"
              />
            </svg>

            <p className="white-b">MERCH</p>
            <div className="stars">
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
            </div>
          </Link>
          <Link href={"/about"} className="btn nav-planet">
            <div className="planet"></div>
            <svg
              width="178"
              height="178"
              className="big"
              viewBox="0 0 178 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.0896 63.7388C25.454 69.4126 14.8334 78.0456 14.8334 87.7169C14.8334 96.6688 23.9559 104.746 38.5296 110.397L28.6061 126.936C27.8965 128.199 27.7072 129.688 28.0786 131.088C28.45 132.488 29.3527 133.688 30.5949 134.433C31.837 135.177 33.3207 135.408 34.7304 135.076C36.1401 134.744 37.3648 133.875 38.144 132.654L49.269 114.113L49.395 113.89C59.3853 116.531 70.9775 118.192 83.4375 118.585V140.917C83.4375 142.392 84.0236 143.807 85.0668 144.85C86.1099 145.893 87.5248 146.479 89 146.479C90.4753 146.479 91.8901 145.893 92.9333 144.85C93.9765 143.807 94.5625 142.392 94.5625 140.917V118.592C107.023 118.207 118.615 116.531 128.605 113.898L128.731 114.12L139.856 132.662C140.22 133.31 140.711 133.879 141.299 134.334C141.887 134.789 142.56 135.122 143.279 135.313C143.997 135.504 144.747 135.548 145.483 135.444C146.22 135.34 146.928 135.089 147.565 134.707C148.203 134.325 148.758 133.818 149.196 133.218C149.635 132.618 149.949 131.935 150.119 131.212C150.29 130.488 150.314 129.737 150.189 129.004C150.064 128.271 149.794 127.57 149.394 126.944L139.47 110.404C154.044 104.746 163.167 96.6763 163.167 87.7095C163.167 78.0456 152.546 69.4126 135.91 63.7388C134.991 65.8897 133.456 68.0702 130.956 69.8057C125.112 73.87 113.475 77.875 89 77.875C64.525 77.875 52.8957 73.87 47.044 69.8057C44.8524 68.2922 43.1346 66.1887 42.0896 63.7388ZM96.4167 96.4167C96.4167 98.3837 95.6353 100.27 94.2444 101.661C92.8535 103.052 90.9671 103.833 89 103.833C87.033 103.833 85.1466 103.052 83.7557 101.661C82.3648 100.27 81.5834 98.3837 81.5834 96.4167C81.5834 94.4496 82.3648 92.5632 83.7557 91.1723C85.1466 89.7814 87.033 89 89 89C90.9671 89 92.8535 89.7814 94.2444 91.1723C95.6353 92.5632 96.4167 94.4496 96.4167 96.4167ZM51.9167 96.4167C53.8837 96.4167 55.7702 95.6353 57.1611 94.2444C58.552 92.8535 59.3334 90.967 59.3334 89C59.3334 87.033 58.552 85.1465 57.1611 83.7556C55.7702 82.3647 53.8837 81.5833 51.9167 81.5833C49.9497 81.5833 48.0632 82.3647 46.6723 83.7556C45.2814 85.1465 44.5 87.033 44.5 89C44.5 90.967 45.2814 92.8535 46.6723 94.2444C48.0632 95.6353 49.9497 96.4167 51.9167 96.4167ZM133.5 89C133.5 90.967 132.719 92.8535 131.328 94.2444C129.937 95.6353 128.05 96.4167 126.083 96.4167C124.116 96.4167 122.23 95.6353 120.839 94.2444C119.448 92.8535 118.667 90.967 118.667 89C118.667 87.033 119.448 85.1465 120.839 83.7556C122.23 82.3647 124.116 81.5833 126.083 81.5833C128.05 81.5833 129.937 82.3647 131.328 83.7556C132.719 85.1465 133.5 87.033 133.5 89Z"
                fill="#00456A"
              />
              <path
                opacity="0.5"
                d="M52.3246 59.3704C53.608 51.0961 57.8087 43.5537 64.1676 38.1061C70.5265 32.6586 78.6242 29.6651 86.9975 29.6667H91.0173C99.3893 29.6669 107.485 32.6611 113.843 38.1085C120.2 43.556 124.4 51.0974 125.683 59.3704C125.447 59.8917 125.076 60.34 124.607 60.6684C121.537 62.8044 112.667 66.75 89.0074 66.75C65.3483 66.75 56.4779 62.8044 53.4074 60.6684C52.939 60.34 52.5676 59.8917 52.332 59.3704"
                fill="#00456A"
              />
            </svg>
            <p className="white-b">ABOUT</p>
            <div className="stars">
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
            </div>
          </Link>
          <Link href={"/contact"} className="btn nav-planet">
            <div className="planet"></div>
            <svg
              className="smoll"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_298)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4937 4.47144C18.0247 2.94271 19.8632 1.75682 21.8872 0.992349C23.9112 0.227876 26.0746 -0.0977199 28.2339 0.0371369C30.3933 0.171994 32.4993 0.764224 34.4125 1.77458C36.3257 2.78494 38.0023 4.19035 39.3312 5.89769L55.0375 26.0752C57.9162 29.7764 58.9312 34.5977 57.7937 39.1477L53.0075 58.3102C52.7617 59.3028 52.776 60.342 53.0488 61.3275C53.3216 62.313 53.8438 63.2115 54.565 63.9364L76.0637 85.4352C76.7895 86.1578 77.6895 86.6809 78.6767 86.9538C79.6639 87.2266 80.7048 87.24 81.6987 86.9927L100.852 82.2064C103.098 81.6483 105.441 81.6063 107.705 82.0837C109.969 82.5611 112.096 83.5454 113.925 84.9627L134.102 100.66C141.356 106.304 142.021 117.023 135.529 123.506L126.481 132.554C120.006 139.029 110.329 141.873 101.307 138.696C78.2133 130.582 57.2472 117.362 39.97 100.021C22.6307 82.7467 9.41105 61.7837 1.29497 38.6927C-1.87253 29.6802 0.97122 19.9939 7.44622 13.5189L16.4937 4.47144Z"
                  fill="#00456A"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_298">
                  <rect width="140" height="140" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="white-b">CONTACT</p>
            <div className="stars">
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
              <img src="/de/nav-star.png" alt="" className="star" />
            </div>
          </Link>
        </nav>
        <div className="cta">
          <button className="btn btn-primary">
            Watch Pia <GiPlayButton />{" "}
          </button>
          <button className="btn btn-primary">Say Hi!</button>
        </div>
      </section>
      {/* <div className="blabla"></div> */}
    </main>
  );
}
