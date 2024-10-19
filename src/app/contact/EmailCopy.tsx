"use client";
import React from "react";
import { FaCopy } from "react-icons/fa";

type Props = {};

export default function EmailCopy({}: Props) {
  return (
    <p
      className="mail btn"
      onClick={() => {
        navigator.clipboard.writeText("PiaPiUFO@gmail.com");
      }}
    >
      PiaPiUFO@gmail.com <FaCopy />
    </p>
  );
}
