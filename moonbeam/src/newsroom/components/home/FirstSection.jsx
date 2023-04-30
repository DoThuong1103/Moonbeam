import firstBgr from "../../../assets/images/news-announcements.jpg";
const FirstSection = () => {
  return (
    <div className="w-full h-[35vh] lg:h-[65vh]">
      <div
        style={{ backgroundImage: `url(${firstBgr})` }}
        className="w-full h-full bg-cover bg-center bg-no-repeat flex justify-left items-center text-white"
      >
        <div className="w-full ">
          <div className="container max-w-[90%] mx-auto px-[16px] lg:px-0 text-[36px] font-VarelaRound">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Newsroom
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FirstSection;
