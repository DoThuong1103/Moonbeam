import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import { VscArrowSmallUp } from "react-icons/vsc";
// import { VscArrowCircleUp } from "react-icons/vsc";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  console.log(isVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className={`${
        isVisible
          ? "hidden lg:fixed border rounded-[50%] bg-[rgba(0,0,0,0.25)] bottom-6 right-[4%] w-8 h-8 cursor-pointer"
          : "hidden"
      } transition-all duration-300 ease-in-out overflow-hidden group `}
      onClick={scrollToTop}
    >
      <div className="absolute top-[50%] right-[50%] rounded-[50%] text-white translate-y-[-50%]  translate-x-[50%] w-full h-full scale-0 bg-inherit group-hover:scale-100 group-hover:bg-[#e1147b]  group-hover:block transition-all duration-1000 ease-in-out "></div>
      <MdOutlineKeyboardArrowUp
        className="absolute top-[50%] right-[50%] text-white translate-y-[-50%]  translate-x-[50%] w-4 h-4 text-center group-hover:top-[-150%] transition-all duration-1000 ease-in-out"
        width={100}
      ></MdOutlineKeyboardArrowUp>
      <MdOutlineKeyboardArrowUp
        className="absolute top-[150%] right-[50%] text-white translate-y-[-50%]  translate-x-[50%] w-4 h-4 text-center group-hover:top-[50%] transition-all duration-1000 ease-in-out"
        width={100}
      ></MdOutlineKeyboardArrowUp>
    </div>
  );
};

export default BackToTopButton;
