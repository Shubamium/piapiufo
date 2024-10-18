import Link from "next/link";
import React from "react";
import "./header.scss";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <nav id="nav">
        <Link href={"/"} className="btn btn-home">
          <img src="/gfx/btn_home.png" alt="" className="ufo" />
          <img src="/de/header-blob.png" alt="" className="blob" />
        </Link>
        <div className="socials">
          <a
            href="https://youtube.com/@piapiufo"
            target="_blank"
            className="btn btn-social"
          >
            <img src="/gfx/icon/ico_yt.png" alt="" />
          </a>
          <a
            href="https://www.twitch.tv/piapiufo"
            target="_blank"
            className="btn btn-social"
          >
            <img src="/gfx/icon/ico_t.png" alt="" />
          </a>
          <a
            href="https://twitter.com/PiaPiUFO"
            target="_blank"
            className="btn btn-social"
          >
            <img src="/gfx/icon/ico_x.png" alt="" />
          </a>
          <a href="#" target="_blank" className="btn btn-social">
            <img src="/gfx/icon/ico_d.png" alt="" />
          </a>
          <a href="#" target="_blank" className="btn btn-social">
            <img src="/gfx/icon/ico_a.png" alt="" />
          </a>
        </div>
        <div className="credits">
          <p>
            a website design by{" "}
            <a href="https://x.com/Shubamium2" target="_blank">
              shubamium
            </a>
          </p>
        </div>
      </nav>
    </header>
  );
}
