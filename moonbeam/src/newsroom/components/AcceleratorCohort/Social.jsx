import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";
// import { VscArrowSmallUp } from "react-icons/vsc";
// import { VscArrowCircleUp } from "react-icons/vsc";
const Social = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) + 100 >=
      document.body.offsetHeight
    ) {
      setIsVisible(false);
    } else if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  console.log(window.innerHeight);
  console.log(Math.ceil(window.pageYOffset));
  console.log("a" + (window.innerHeight + Math.ceil(window.pageYOffset) - 100));
  console.log(document.body.offsetHeight);
  console.log(isVisible);

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden group z-10  ${
        isVisible
          ? "fixed lg:flex bottom-4 right-[0%] lg:right-[92%] lg:bottom-[50%] lg:translate-y-[50%] lg:flex-col cursor-pointer"
          : "hidden"
      } `}
    >
      <div className=" top-[50%] right-[50%] rounded-[50%] text-white translate-y-[-50%]  translate-x-[50%] w-full h-full scale-0 bg-inherit group-hover:scale-100 group-hover:bg-[#e1147b]  group-hover:block transition-all duration-1000 ease-in-out "></div>
      <div className="flex gap-[16px] lg:flex-col">
        <a href="https://twitter.com/moonbeamnetwork">
          <BsTwitter className="text-[rgb(206,52,122)] text-[24px] hover:text-[rgba(206,52,122,0.8)]"></BsTwitter>
        </a>
        <a href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fmoonbeam.network%2Fannouncements%2Fmoonbeam-accelerator-cohort%2F&linkname=First%20Moonbeam%20Accelerator%20Cohort%20Announced&linknote=April%2013%2C%202023%20%E2%80%93%20Miami%2C%20FL%20%E2%80%93%20Moonbeam%2C%20the%20top%20destination%20for%20multi-chain%20applications%20on%20Polkadot%2C%20is%20excited%20to%20announce%20the%20debut%20cohort%20of%20Web3%20startups%20in%E2%80%A6">
          <GrMail className="text-[rgb(206,52,122)] text-[24px] hover:text-[rgba(206,52,122,0.8)]"></GrMail>
        </a>
        <a href="https://www.addtoany.com/add_to/reddit?linkurl=https%3A%2F%2Fmoonbeam.network%2Fannouncements%2Fmoonbeam-accelerator-cohort%2F&linkname=First%20Moonbeam%20Accelerator%20Cohort%20Announced&linknote=April%2013%2C%202023%20%E2%80%93%20Miami%2C%20FL%20%E2%80%93%20Moonbeam%2C%20the%20top%20destination%20for%20multi-chain%20applications%20on%20Polkadot%2C%20is%20excited%20to%20announce%20the%20debut%20cohort%20of%20Web3%20startups%20in%E2%80%A6">
          <FaRedditAlien className="text-[rgb(206,52,122)] text-[24px] hover:text-[rgba(206,52,122,0.8)]"></FaRedditAlien>
        </a>
        <a href="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fmoonbeam.network%2Fannouncements%2Fmoonbeam-accelerator-cohort%2F&linkname=First%20Moonbeam%20Accelerator%20Cohort%20Announced&linknote=April%2013%2C%202023%20%E2%80%93%20Miami%2C%20FL%20%E2%80%93%20Moonbeam%2C%20the%20top%20destination%20for%20multi-chain%20applications%20on%20Polkadot%2C%20is%20excited%20to%20announce%20the%20debut%20cohort%20of%20Web3%20startups%20in%E2%80%A6">
          <FaTelegramPlane className="text-[rgb(206,52,122)] text-[24px] hover:text-[rgba(206,52,122,0.8)]"></FaTelegramPlane>
        </a>
      </div>
    </div>
  );
};

export default Social;
