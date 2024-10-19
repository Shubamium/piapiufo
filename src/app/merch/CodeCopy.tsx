"use client";
import React from "react";
import { PiCopyFill } from "react-icons/pi";

type Props = { code: string };

export default function CodeCopy({ code }: Props) {
  return (
    <div className="code">
      <div className="l">
        <p> Sponsor Code:</p> <strong>{code}</strong>
      </div>
      <div className="r">
        <button
          className="btn btn-copy"
          onClick={() => {
            navigator.clipboard.writeText(code);
            console.log("je");
          }}
        >
          <PiCopyFill />
        </button>
      </div>
    </div>
  );
}
