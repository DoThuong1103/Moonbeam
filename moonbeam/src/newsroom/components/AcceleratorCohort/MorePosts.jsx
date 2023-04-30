const MorePosts = () => {
  return (
    <div className="w-full bg-white h-[50vh] flex flex-col justify-center items-center relative ">
      <div className="pb-[20px]">
        <img
          className="w-[60px] h-[60px]"
          src="/images/moonbeam-favicon.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center text-center pb-[32px] gap-y-[5px]">
        <span className="text-[12px] leading-[12px] font-VarelaRound">
          Author
        </span>
        <h3 className="text-[18px] leading-[26px] font-VarelaRound">
          Moonbeam Team
        </h3>
      </div>
      <a
        className="text-[14px] leading-[20px] font-OpenSans font-[600] py-[13px] px-[20px] border-[1.6px] border-black rounded mb-[10px] hover:bg-[rgb(225,20,123)] hover:border-[rgb(225,20,123)] hover:text-white transition-all duration-500 ease-in-out"
        href="#"
      >
        More posts by Moonbeam Team
      </a>
      <div className="absolute bottom-[40px] border-t-[rgba(0,0,0,0.2)] border-[0.8px] w-full"></div>
    </div>
  );
};

export default MorePosts;
