"use client";
import React, { useEffect, useState } from "react";
import "./loading.scss";
import { CgSpinner } from "react-icons/cg";
type Props = {};

export default function Loading({}: Props) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3500);
  }, []);
  return (
    <div id="loading-screen" className={load ? "loaded" : ""}>
      <h2 className="loading">
        <CgSpinner /> Preparing ...{" "}
      </h2>
      <div className="loading-bar loading">
        <div className="bar"></div>
      </div>
      <div className="ufo">
        <img src="/gfx/obby_load.png" alt="" className="obby" />
        <img src="/gfx/ufo-beam.svg" alt="" className="beam" />
        <img src="/gfx/loading-pickle.png" alt="" className="pickle" />
      </div>
    </div>
  );
}
