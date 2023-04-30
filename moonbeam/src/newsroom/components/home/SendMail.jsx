import senMailBg from "../../../assets/images/background-texture.jpg";
const SendMail = () => {
  return (
    <div className="w-full h-[50vh] lg:h-[40vh]  relative">
      <div
        className="w-full h-full bg-no-repeat bg-cover absolute "
        style={{
          backgroundImage: `url(${senMailBg})`,
          backgroundPosition: "center bottom",
        }}
      ></div>
      <div className="w-full h-full bg-[#12081b] opacity-95 text-white flex items-center ">
        <div className="w-[90%] mx-auto lg:flex lg:flex-col ">
          <div className="pt-[32px] pb-[40px]">
            <h2 className="text-[30px] leading-[36px] lg:text-[34px] lg:leading-[40px] font-VarelaRound">
              Sign Up for <br />
              Project Updates
            </h2>
          </div>
          <div className="lg:flex lg:gap-x-[30px]">
            <p className="font-OpenSans pb-[32px] flex-1">
              Keep up with the latest project deployments and network updates!
            </p>
            <div className="flex gap-x-[20px] w-[100%] lg:w-[65%] h-[44px] items-center ">
              <input
                className="bg-[#12081b] text-[12px] border border-[rgba(255,255,255,.6)] p-[8px] flex-1 rounded-md placeholder:text-[rgba(255,255,255,0.4)]"
                type="text"
                placeholder="mail address"
              />
              <button className="bg-[#e1147b] h-fit opacity-100 py-[10px] px-[12px] lg:px-[20px] rounded-md hover:translate-x-[4px] hover:bg-[#BA1469] transition-all duration-300 ease-in-out ">
                Send Me Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
