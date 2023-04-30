import firstBgr from "../../../assets/images/moonbeam-accelerator-banner.png";
const FirstSection = () => {
  return (
    <div className="w-full h-[50vh] lg:h-[87vh] pt-[48px] lg:pt-[116px] bg-[#0d1126] ">
      <div
        style={{ backgroundImage: `url(${firstBgr})` }}
        className="relative w-full h-full bg-cover bg-center bg-no-repeat flex justify-left items-center text-white"
      >
        <div className="absolute w-full h-full bg-[#2d2d2d] opacity-40"></div>
        <div className="w-full z-10">
          <div className="w-[70%] mx-auto ">
            <div className="w-fit mx-auto px-[16px] text-[36px] font-VarelaRound z-10 hover:translate-y-[-4px] transition-all duration-300 ease-in-out group cursor-pointer">
              <a className="text-[14px] font-[600] text-white font-OpenSans leading-[18px] border-[1.6px] border-[rgba(255,255,255,0.4)] px-[10px] py-[4px] rounded group-hover:bg-[rgb(225,20,123)] group-hover:border-[rgb(225,20,123)] transition-all duration-300 ease-in-out ">
                Announcements
              </a>
            </div>
            <h1 className="font-VarelaRound text-[38px] leading-[42px] tracking-[-1px] text-center py-[20px] lg:text-[44px] lg:leading-[54px]">
              First Moonbeam Accelerator Cohort Announced
            </h1>
            <div className="flex items-center justify-center gap-x-[20px] text-[14px] font-OpenSans leading-[26px] lg:text-[16px]">
              <span className="cursor-pointer">
                <a href="https://moonbeam.network/author/moonbeam-team/">
                  By Moonbeam Team
                </a>{" "}
              </span>
              <div className="w-[1px] h-[12px] bg-[rgba(255,255,255,.4)]"></div>
              <span>April 13, 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FirstSection;
