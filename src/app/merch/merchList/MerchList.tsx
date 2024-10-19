import React from "react";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

export default function MerchList({}: Props) {
  return (
    <section id="merch-list">
      <div className="confine">
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
        </div>
      </div>
      <div className="controls">
        <button className="btn btn-primary">
          {" "}
          <CgArrowLeft />
        </button>
        <p className="page"> 1 / 2</p>
        <button className="btn btn-primary">
          {" "}
          <CgArrowRight />
        </button>
      </div>
    </section>
  );
}
