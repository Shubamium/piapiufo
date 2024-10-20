import React from "react";
import "./merch.scss";
import MerchList from "./merchList/MerchList";
import { fetchData } from "../db/db";
import CodeCopy from "./CodeCopy";
type Props = {};

export default async function MerchPage({}: Props) {
  const merch = await fetchData<any[]>(`
		*[_type == 'merch']{...}
	`);
  const general = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{...}[0]
	`);
  console.log(general);
  return (
    <main id="merch_page">
      <section id="merch-h">
        <div className="heading">
          <h1 className="main-h">
            MERCH
            <img src="/de/saturn.png" alt="" className="decor_sat" />
            <svg
              width="95"
              height="89"
              viewBox="0 0 95 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.2991 29.6667H77.5626L74.6351 12.3858C74.0453 9.77122 72.7498 7.36324 70.8864 5.41754C69.0229 3.47185 66.6609 2.06107 64.0513 1.335C61.4284 0.505661 58.6978 0.0559952 55.9445 0H39.1305C36.3771 0.0559952 33.6465 0.505661 31.0237 1.335C28.414 2.06107 26.0521 3.47185 24.1886 5.41754C22.3251 7.36324 21.0297 9.77122 20.4398 12.3858L17.5124 29.6667H3.77591C3.18471 29.6631 2.60102 29.7976 2.0724 30.0592C1.54379 30.3208 1.08519 30.7021 0.73399 31.172C0.382784 31.6419 0.148901 32.1872 0.051395 32.7633C-0.0461105 33.3395 -0.00447928 33.9303 0.172895 34.4875L14.2847 81.2125C15.0031 83.4697 16.4313 85.4418 18.3616 86.8423C20.2919 88.2427 22.6239 88.9986 25.0187 89H70.0563C72.4383 88.9829 74.7533 88.2198 76.6686 86.8204C78.5839 85.4211 80.0007 83.4577 80.7152 81.2125L94.827 34.4875C95.0025 33.9362 95.0452 33.352 94.9517 32.7815C94.8581 32.2111 94.6309 31.6701 94.2882 31.2018C93.9455 30.7334 93.4967 30.3507 92.9778 30.0842C92.4588 29.8177 91.8839 29.6747 91.2991 29.6667ZM25.1688 29.6667L27.871 13.5725C28.1673 12.2584 28.8545 11.0619 29.8443 10.1368C30.8341 9.21165 32.0814 8.60013 33.4257 8.38083C35.2722 7.80233 37.1938 7.48342 39.1305 7.41667H55.9445C57.9112 7.48094 59.8378 7.80233 61.7243 8.38083C63.0687 8.60013 64.3159 9.21165 65.3057 10.1368C66.2956 11.0619 66.9828 12.2584 67.279 13.5725L69.9062 29.6667H24.8685H25.1688Z"
                fill="#89FFAA"
              />
            </svg>
          </h1>
          <p>Some description text here</p>
        </div>
        <div className="other">
          <CodeCopy code={general.code} />
          <div className="merchsites">
            <a
              href="https://throne.com/piapiufo"
              target="_blank"
              className="btn btn-primary btn-merch"
            >
              Throne
            </a>
            <a
              href="https://studionekomata.com/products/piapiufo-pickle-jar-enamel-pin?_pos=1&_sid=664e4a764&_ss=r"
              target="_blank"
              className="btn btn-primary btn-merch"
            >
              Studio Nekomata
            </a>
            <a
              href="https://merch.kawaentertainment.com/en-jp/search?q=piapi&options%5Bprefix%5D=last"
              target="_blank"
              className="btn btn-primary btn-merch"
            >
              Kawa Entertainment
            </a>
          </div>
        </div>
      </section>

      <MerchList merchList={merch} />
    </main>
  );
}
