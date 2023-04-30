// import theDefiant from "../../../assets/images/the-defiant.png";
// import coindes from "../../../assets/images/coindes.png";
// import theBlock from "../../../assets/images/the-block.png";
// import cointelegraph from "../../../assets/images/cointelegraph.png";
// import messari from "../../../assets/images/messari.png";
// import cryptobriefing from "../../../assets/images/cryptobriefing.png";
import { useState } from "react";

const dataRecent = [
  {
    id: 1,
    image: "images/the-defiant.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "January 19, 2023",
    title: "Cross-Chain Messaging Can Blow Open Interoperability",
    link2:
      "https://thedefiant.io/cross-chain-messaging-can-blow-open-interoperability",
    delay: "0",
  },
  {
    id: 2,
    image: "images/cointelegraph.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "August 29, 2022",
    title:
      "Polkadot Parachain Moonbeam Integrates Cross-Chain Messaging Protocol LayerZero",
    link2:
      "https://www.coindesk.com/business/2022/08/29/polkadot-parachain-moonbeam-integrates-cross-chain-messaging-protocol-layerzero/",
    delay: "200",
  },
  {
    id: 3,
    image: "images/the-block.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "July 25, 2022",
    title: "Moonbeam now lets you swap tokens between Polkadot and Cosmos",
    link2:
      "https://www.theblock.co/post/159447/moonbeam-now-lets-you-swap-tokens-between-polkadot-and-cosmos",
    delay: "400",
  },
  {
    id: 4,
    image: "images/cointelegraph.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "June 15, 2022",
    title:
      "Chainlink integrates with Moonbeam to provide price data to Polkadot developers",
    link2:
      "https://cointelegraph.com/news/chainlink-integrates-with-moonbeam-to-provide-price-data-to-polkadot-developers",
    delay: "200",
  },
  {
    id: 5,
    image: "images/coindes.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "June 8, 2022",
    title:
      "Arrington Capital Launches $100M Growth Fund for Moonbeam Ecosystem",
    link2:
      "https://www.coindesk.com/business/2022/06/08/arrington-capital-launches-100m-growth-fund-for-moonbeam-ecosystem/",
    delay: "0",
  },
  {
    id: 6,
    image: "images/the-defiant.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "May 5, 2022",
    title: "Polkadot Upgrade Locks in Parachain Messaging",
    link2: "https://thedefiant.io/polkadot-interoperable-multi-chain-ecosystem",
    delay: "0",
  },
  {
    id: 7,
    image: "images/cointelegraph.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "April 8, 2022",
    title:
      "Altcoin Roundup: Interoperability push puts attention back on Polkadot",
    link2:
      "https://cointelegraph.com/news/altcoin-roundup-interoperability-push-puts-attention-back-on-polkadot",
    delay: "200",
  },
  {
    id: 8,
    image: "images/messari.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "March 28, 2022",
    title: "Polkadot Ecosystem Overview",
    link2: "https://messari.io/report/polkadot-ecosystem-overview",
    delay: "400",
  },
  {
    id: 9,
    image: "images/cointelegraph.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "January 22, 2022",
    title:
      "Moonbeam (GLMR) Launch Brings EVM Interoperability Closer to the Polkadot Network",
    link2:
      "https://cointelegraph.com/news/moonbeam-glmr-launch-brings-evm-interoperability-closer-to-the-polkadot-network",
    delay: "200",
  },
  {
    id: 10,
    image: "images/cryptobriefing.png",
    link1:
      "https://cointelegraph.com/news/polkadot-parachains-full-of-promise-but-lack-of-launch-date-raises-concern",
    time: "January 11, 2022",
    title: "Moonbeam Becomes First Parachain to Launch on Polkadot",
    link2:
      "https://cryptobriefing.com/moonbeam-becomes-first-parachain-to-launch-on-polkadot/",
    delay: "0",
  },
];

const RecentNewsCoverage = () => {
  const [link, setLink] = useState("");
  const hiddenModelBox = () => {
    const modelBox = document.getElementById("modelBox");
    console.log("box");
    modelBox?.classList.toggle("hidden");
  };
  const showModelBox = () => {
    const modelBox = document.getElementById("modelBox");
    console.log("box");
    modelBox?.classList.toggle("hidden");
  };
  return (
    <div className="w-full flex flex-col bg-[#f2f2f2] pt-[70px] pb-[52px]">
      <div className="container w-[90%] mx-auto ">
        <div
          className="flex flex-col text-center gap-y-[21px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-[30px] lg:text-[34px] leading-[36px] font-VarelaRound">
            Recent News Coverage
          </h2>
          <span className="font-OpenSans text-[16px] leading-[26px] ">
            A sampling of recent press coverage for Moonbeam.
          </span>
        </div>
        <div className="flex flex-col pt-[80px] gap-y-[48px] ">
          <div className="flex flex-wrap gap-y-[40px] lg:gap-y-[80px] mx-auto tr delay-3000">
            {dataRecent.map((item) => {
              return (
                <div
                  className="flex flex-col gap-y-[20px] w-full lg:w-[20%] px-[24px]"
                  key={item.id}
                  data-aos-delay={item.delay}
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="cursor-pointer">
                    <img
                      className="mx-auto h-[200px] lg:h-[60px]"
                      src={item.image}
                      alt=""
                      onClick={() => (showModelBox(), setLink(item.link1))}
                    />
                  </div>
                  <div className="text-center font-VarelaRound">
                    <h5 className="text-[16x] leading-[26px] pb-[7px]">
                      {item.time}
                    </h5>
                    <p
                      className="text-[18px] text-[#e1147b] hover:text-black cursor-pointer"
                      onClick={() => (showModelBox(), setLink(item.link2))}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="font-OpenSans text-center text-[11px] leading-[12px] italic pt-[80px] lg:w-[70%] mx-auto">
            <span className=" ">
              All information made available, including claims, content,
              designs, algorithms, estimates, roadmaps, specifications, and
              performance measurements described in this project are provided
              for informational purposes only. It is up to the reader to check
              and validate the accuracy and truthfulness. Furthermore, nothing
              in this project information constitutes a solicitation for
              investment. No developer or entity involved in creating the
              Moonbeam Network or Moonriver Network or authoring this
              information will be liable for any claims or damages whatsoever
              associated with your use, inability to use, or your interaction
              with other users of, the Moonbeam Network or Moonriver Network or
              any information made available on this website, including any
              direct, indirect, incidental, special, exemplary, punitive or
              consequential damages, or loss of profits, cryptocurrencies,
              tokens, or anything else of value. All information contained
              herein is subject to modification without notice.
            </span>
          </div>
        </div>
      </div>
      <div className="hidden fixed top-0 right-0 bottom-0 left-0" id="modelBox">
        <div
          className="absolute w-full h-full bg-[rgba(145,145,145,0.5)]"
          onClick={() => hiddenModelBox()}
        ></div>
        <div className="absolute top-[50%]  translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col w-[50%] bg-white p-[20px] text-center">
          <h2 className="px-[30px] text-[20px] leading-[36px] font-VarelaRound font-[600] text-[#595959] mb-[8px]">
            You&apos;re Leaving the Moonbeam Website
          </h2>
          <span className="font-OpenSans text-[15px] text-[#545454] px-[30px]">
            You are now leaving the Moonbeam Network for an independent,
            third-party website that is not affiliated with Moonbeam or the
            Moonbeam Foundation.
          </span>
          <a
            href={link}
            className="bg-[#E1147B] w-fit mx-auto py-[8px] px-[28px] text-[14px] text-white rounded-md mt-[20px] mb-[10px]"
          >
            Continue to External Site
          </a>
          <button
            className="bg-[#999999] w-fit mx-auto py-[8px] px-[28px] text-[14px] text-white rounded-md "
            onClick={() => hiddenModelBox()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNewsCoverage;
