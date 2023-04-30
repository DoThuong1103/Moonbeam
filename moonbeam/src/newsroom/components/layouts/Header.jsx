import moonbeamLogo from "../../../assets/images/moonbeam-logo.png";
// import { AiOutlineMenu } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
// import { FaMedium } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { FaGithubAlt, FaTelegram } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      [window.scrollY]
    );
  });
  const showMenuMobile = () => {
    const menuMobile = document.getElementById("menuMobile");
    // const menuActive = document.getElementById("menuActive");
    const menuActive1 = document.getElementById("itemMenuActive1");
    const menuActive2 = document.getElementById("itemMenuActive2");
    const menuActive3 = document.getElementById("itemMenuActive3");
    // menuActive?.classList.toggle("gap-y-1");
    menuActive1?.classList.toggle("menuActiveOdd");
    menuActive2?.classList.toggle("even:hidden");
    menuActive3?.classList.toggle("menuActiveEven");

    menuMobile?.classList.toggle("h-[100vh]");
    // menuMobile?.classList.toggle("h-0");
  };
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
    <>
      <div
        className={`fixed bg-[rgba(13,17,38,.85)] text-white w-full h-[48px] z-50 lg:h-[116px] font-OpenSans transition-all duration-200 ease-in-out ${
          isScrolled ? "lg:h-[85px]" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-full w-[90%] px-[12px] lg:px-0 z-[100]">
          <div className="flex items-center w-[86px] h-[24px] lg:min-w-[120px] lg:min-h-[40px] xl:min-w-[214px] xl:min-h-[60px] rounded-full overflow-hidden z-[100]">
            <img
              src={moonbeamLogo}
              className="w-full transition-all duration-150 rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col h-full  lg:flex-1 justify-center ">
            <div
              id="menuActive"
              className="flex lg:hidden flex-col h-full gap-y-1 lg:flex-1 justify-center transition-all duration-200 ease-in-out"
              onClick={() => showMenuMobile()}
            >
              <div
                id="itemMenuActive1"
                className=" w-[20px] h-[2px] bg-white rotate-0 "
              ></div>
              <div
                id="itemMenuActive2"
                className=" w-[20px] h-[2px] bg-white rotate-0 "
              ></div>
              <div
                id="itemMenuActive3"
                className=" w-[20px] h-[2px] bg-white rotate-0 "
              ></div>
              {/* <AiOutlineMenu
              className="lg:hidden my-auto z-10"
              onClick={() => showMenuMobile()}
            ></AiOutlineMenu> */}
            </div>
            <div
              id="menuMobile"
              className={`absolute flex top-[48px] z-0 left-0 h-0 overflow-hidden bg-[#5dcdcb] opacity-95 w-full flex-col items-center justify-center gap-y-10 transition-all duration-500 ease-in-out
           lg:flex lg:flex-row lg:relative lg:top-0 lg:h-full lg:bg-[transparent] lg:items-center xl:justify-around ${
             isScrolled ? "lg:gap-x-[20px]" : ""
           }`}
            >
              <ul className="flex flex-col gap-y-2 mt-[-50px] text-center text-[#eefbfa] opacity-75 text-[11px] leading-[11px] lg:flex-row lg:mt-0 lg:items-center lg:text-[#f2f2f2] lg:opacity-100 lg:text-[16px] lg:gap-x-4 xl:gap-x-6 lg:h-full ">
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:h-full cursor-pointer relative group ">
                  <span className="relative ">
                    Builders
                    <div className="absolute left-[50%] translate-x-[-50%] mx-auto  h-[2px] bg-[#53cbc9] bottom-[-12px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:h-full cursor-pointer relative group">
                  <span className="relative ">
                    Community
                    <div className="absolute left-[50%] translate-x-[-50%] mx-auto  h-[2px] bg-[#53cbc9] bottom-[-12px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:h-full cursor-pointer relative group">
                  <span className="relative ">
                    Networks
                    <div className="absolute left-[50%] translate-x-[-50%] mx-auto  h-[2px] bg-[#53cbc9] bottom-[-12px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:h-full cursor-pointer relative group">
                  <span className="relative ">
                    Tokens
                    <div className="absolute left-[50%] translate-x-[-50%] mx-auto  h-[2px] bg-[#53cbc9] bottom-[-12px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:h-full cursor-pointer relative group">
                  <span className="relative ">
                    About
                    <div className="absolute left-[50%] translate-x-[-50%] mx-auto  h-[2px] bg-[#53cbc9] bottom-[-12px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400]  lg:h-full cursor-pointer group ">
                  <span className="lg:border-[1.6px] lg:border-white lg:rounded-sm lg:py-[10px] lg:px-[20px] group-hover:border-[rgb(225,20,123)] group-hover:text-[rgb(225,20,123)] transition-all duration-300 ease-in-out">
                    Foundation
                  </span>
                </li>
                <li className="flex h-[26px] font-[700] lg:items-center lg:font-[400] lg:w-[128px] lg:h-[34px] lg:bg-[rgb(225,20,123)] lg:rounded-sm lg:py-[10px] cursor-pointer hover:bg-[#C1146F] transition-all duration-300 ease-in-out">
                  <span className="lg:mx-auto">Launch App</span>
                </li>
              </ul>
              <ul className="flex lg:hidden xl:flex gap-x-[36px] items-center text-[#eefbfa] opacity-70 text-[18px] leading-[22px] xl:gap-x-4 xl:opacity-100">
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://twitter.com/moonbeamnetwork")
                    )}
                    // href="https://twitter.com/moonbeamnetwork"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <BsTwitter></BsTwitter>
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://twitter.com/moonbeamnetwork")
                    )}
                    // href="https://twitter.com/moonbeamnetwork"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <BsTwitter></BsTwitter>
                  </a>
                </li>
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink(
                        "https://www.youtube.com/c/MoonbeamNetwork?sub_confirmation=1"
                      )
                    )}
                    // href="https://www.youtube.com/c/MoonbeamNetwork?sub_confirmation=1"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <BsYoutube></BsYoutube>
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink(
                        "https://www.youtube.com/c/MoonbeamNetwork?sub_confirmation=1"
                      )
                    )}
                    // href="https://www.youtube.com/c/MoonbeamNetwork?sub_confirmation=1"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <BsYoutube></BsYoutube>
                  </a>
                </li>
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://github.com/PureStake/moonbeam")
                    )}
                    // href="https://github.com/PureStake/moonbeam"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <FaGithubAlt></FaGithubAlt>
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://github.com/PureStake/moonbeam")
                    )}
                    // href="https://github.com/PureStake/moonbeam"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <FaGithubAlt></FaGithubAlt>
                  </a>
                </li>
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(), setLink("https://t.me/Moonbeam_Official")
                    )}
                    // href="https://t.me/Moonbeam_Official"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <FaTelegram></FaTelegram>
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(), setLink("https://t.me/Moonbeam_Official")
                    )}
                    // href="https://t.me/Moonbeam_Official"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <FaTelegram></FaTelegram>
                  </a>
                </li>
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://medium.com/moonbeam-network")
                    )}
                    // href="https://medium.com/moonbeam-network"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <i
                      className="fa fa-medium text-white"
                      aria-hidden="true"
                    ></i>
                    {/* <FaMedium></FaMedium> */}
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(),
                      setLink("https://medium.com/moonbeam-network")
                    )}
                    // href="https://medium.com/moonbeam-network"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <i className="fa fa-medium " aria-hidden="true"></i>
                  </a>
                </li>
                <li className="relative flex group overflow-hidden h-[22px] w-[24px] justify-center cursor-pointer">
                  <a
                    onClick={() => (
                      showModelBox(), setLink("https://discord.gg/moonbeam")
                    )}
                    // href="https://discord.gg/moonbeam"
                    className="absolute top-[50%] translate-y-[-50%] group-hover:top-[-100%] transition-all duration-500 ease-in-out"
                  >
                    <RiDiscordFill></RiDiscordFill>
                  </a>
                  <a
                    onClick={() => (
                      showModelBox(), setLink("https://discord.gg/moonbeam")
                    )}
                    // href="https://discord.gg/moonbeam"
                    className="absolute top-[150%] translate-y-[-50%] group-hover:top-[50%] text-[#53cbc9] transition-all duration-500 ease-in-out"
                  >
                    <RiDiscordFill></RiDiscordFill>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden fixed top-0 right-0 bottom-0 left-0 z-10"
        id="modelBox"
      >
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
            target="_blank"
            rel="noreferrer"
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
    </>
  );
};

export default Header;
