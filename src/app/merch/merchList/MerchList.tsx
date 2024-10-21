"use client";
import { urlFor } from "@/app/db/db";
import { VisualEditing } from "next-sanity";
import React, { useState } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  merchList: any[];
};

export default function MerchList({ merchList }: Props) {
  const [page, setPage] = useState(0);

  let toChop = [...merchList];
  let visibleMerch = [];
  while (toChop.length > 0) {
    visibleMerch.push(toChop.splice(0, 4));
  }
  // const visibleMerch = [...merchList];

  const next = () => {
    setPage((page) => Math.min(page + 1, visibleMerch.length - 1));
  };
  // console.log(visibleMerch, page);
  const prev = () => {
    setPage((page) => Math.max(page - 1, 0));
  };
  return (
    <section id="merch-list">
      <img src="/gfx/merch_r.png" alt="" className="decor_merch l" />
      <img src="/gfx/merch_l.png" alt="" className="decor_merch r" />
      <div className="confine">
        {visibleMerch[page].map((merch: any) => {
          return (
            <div className="merch" key={merch._id}>
              <div className="display">
                <img src="/de/merch-decor.png" alt="" className="ufo dc" />
                <div className="stars dc">
                  <img src="/de/star_sm.png" alt="" className="star" />
                  <img src="/de/star_sm.png" alt="" className="star" />
                  <img src="/de/star_sm.png" alt="" className="star" />
                </div>
                <img
                  src={merch.image && urlFor(merch.image).url()}
                  alt=""
                  className="product-img"
                />
              </div>
              <div className="info">
                <h2>{merch.name}</h2>
                <p>{merch.description}</p>
                <div className="info-footer">
                  <p className="price">{merch.price}</p>
                  <a href={merch.link} className="btn btn-buy">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="merch">
          <div className="display">
            <img src="/de/merch-decor.png" alt="" className="ufo dc" />
            <div className="stars dc">
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
            </div>
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt=""
              className="product-img"
            />
          </div>
          <div className="info">
            <h2>Product Name</h2>
            <p>
              Short description --- Oh no! Pia's trapped in the jar again!
              Better not shake it up...
            </p>
            <div className="info-footer">
              <p className="price">$15</p>
              <a href="#" className="btn btn-buy">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </div>
        <div className="merch">
          <div className="display">
            <img src="/de/merch-decor.png" alt="" className="ufo dc" />
            <div className="stars dc">
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
            </div>
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt=""
              className="product-img"
            />
          </div>
          <div className="info">
            <h2>Product Name</h2>
            <p>
              Short description --- Oh no! Pia's trapped in the jar again!
              Better not shake it up...
            </p>
            <div className="info-footer">
              <p className="price">$15</p>
              <a href="#" className="btn btn-buy">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </div>
        <div className="merch">
          <div className="display">
            <img src="/de/merch-decor.png" alt="" className="ufo dc" />
            <div className="stars dc">
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
              <img src="/de/star_sm.png" alt="" className="star" />
            </div>
            <img
              src="https://placehold.co/600x400/EEE/31343C"
              alt=""
              className="product-img"
            />
          </div>
          <div className="info">
            <h2>Product Name</h2>
            <p>
              Short description --- Oh no! Pia's trapped in the jar again!
              Better not shake it up...
            </p>
            <div className="info-footer">
              <p className="price">$15</p>
              <a href="#" className="btn btn-buy">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="controls">
        <button className="btn btn-primary" onClick={prev}>
          {" "}
          <CgArrowLeft />
        </button>
        <p className="page">
          {" "}
          {page + 1}/ {visibleMerch.length}
        </p>
        <button className="btn btn-primary" onClick={next}>
          {" "}
          <CgArrowRight />
        </button>
      </div>
    </section>
  );
}
