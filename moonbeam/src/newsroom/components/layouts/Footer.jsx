const Footer = () => {
  return (
    <div className="bg-[#252525] min-h-[90vh] flex flex-col text-white">
      <div className="w-[90%] mx-auto py-[55px] flex flex-col  lg:justify-between lg:flex-row">
        <div className="mb-[40px] ">
          <a href="https://moonbeam.foundation/">
            <img
              className="pb-[30px] mx-auto lg:ml-0"
              src="/images/Moonbeam-Foundation-Footer.png"
              alt=""
            />
          </a>
          <div className="flex justify-center lg:justify-start gap-x-[20px] mb-[30px] font-OpenSans text-[12px] leading-[26px]  ">
            <a href="https://moonbeam.foundation/privacy-policy/">
              <p>Privacy Policy</p>
            </a>{" "}
            <a href="https://moonbeam.network/terms-of-use/">
              <p>Terms of Use</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-[80px] sm:flex-row justify-between flex-wrap lg:justify-between lg:flex-nowrap lg:gap-x-[18px]">
          <div className="sm:w-[45%] lg:w-[20%]">
            <div className="w-full h-[1.6px] bg-[rgb(83,203,201)] mb-[28px]"></div>
            <div>
              <p className="mb-[12px]">ABOUT</p>
              <ul className="flex flex-col gap-y-[8px] text-[rgb(204,204,204)] text-[16px] leading-[26px] font-OpenSans">
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/blog/cross-chain-smart-contracts/"
                  >
                    Connected Contracts
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/blog/introducing-xc-20s/"
                  >
                    XC-20s
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://moonbeam.network/networks/moonbeam/"
                    target="_blank"
                  >
                    Moonbeam
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://moonbeam.network/networks/moonriver/"
                    target="_blank"
                  >
                    Moonriver
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://moonbeam.network/community/projects/"
                    target="_blank"
                  >
                    Ecosystem
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-[45%] lg:w-[20%]">
            <div className="w-full h-[1.6px] bg-[rgb(83,203,201)] mb-[28px]"></div>
            <div>
              <p className="mb-[12px]">DEVELOPERS</p>
              <ul className="flex flex-col gap-y-[8px] text-[rgb(204,204,204)] text-[16px] leading-[26px] font-OpenSans">
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="https://moonbeam.network/builders/"
                  >
                    Build on Moonbeam
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/builders/get-started/networks/moonbase/"
                    target="_blank"
                  >
                    Moonbase Alpha TestNet
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/"
                    target="_blank"
                  >
                    Documentation Site
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/learn/platform/code/"
                    target="_blank"
                  >
                    Moonbeam GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/builders/build/eth-api/dev-env/"
                    target="_blank"
                  >
                    Dev Environments
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/builders/get-started/networks/moonbeam-dev/"
                    target="_blank"
                  >
                    Create a Dev Node
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/builders/get-started/networks/moonbeam/"
                    target="_blank"
                  >
                    Deploy on Moonbeam
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://docs.moonbeam.network/builders/get-started/networks/moonriver/"
                    target="_blank"
                  >
                    Deploy on Moonriver
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://academy.moonbeam.network/"
                    target="_blank"
                  >
                    Moonbuilders Academy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-[45%] lg:w-[20%]">
            <div className="w-full h-[1.6px] bg-[rgb(83,203,201)] mb-[28px]"></div>
            <div>
              <p className="mb-[12px]">DEVELOPERS</p>
              <ul className="flex flex-col gap-y-[8px] text-[rgb(204,204,204)] text-[16px] leading-[26px] font-OpenSans">
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="https://moonbeam.network/community/"
                  >
                    Join the Community
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="https://moonbeam.network/community/ambassadors/"
                    target="_blank"
                  >
                    Become an Ambassador
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="https://moonbeam.network/community/collators/"
                  >
                    Become a Collator
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="https://immunefi.com/bounty/moonbeamnetwork/"
                    rel="nofollow undefined"
                  >
                    Submit a Bug Bounty
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/tutorial/stake-glmr/"
                  >
                    Stake GLMR &amp; MOVR
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/tutorial/participate-in-moonbeam-governance-with-polkassembly/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Vote in Governance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-[45%] lg:w-[20%]">
            <div className="w-full h-[1.6px] bg-[rgb(83,203,201)] mb-[28px]"></div>
            <div>
              <p className="mb-[12px]">LEARN POLKADOT</p>
              <ul className="flex flex-col gap-y-[8px] text-[rgb(204,204,204)] text-[16px] leading-[26px] font-OpenSans">
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/blog/xcm-on-polkadot/"
                  >
                    XCM
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/blog/opengov/"
                  >
                    OpenGov (Gov2)
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/blog/polkadots-fundraising-method-fundamental/"
                  >
                    Fundraising
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    href="/education/what-is-a-crowdloan/"
                  >
                    Crowdloans
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[rgb(225,20,123)]"
                    rel="noreferrer noopener"
                    href="/education/how-parachain-slot-auctions-work/"
                    target="_blank"
                  >
                    Parachain Auctions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
