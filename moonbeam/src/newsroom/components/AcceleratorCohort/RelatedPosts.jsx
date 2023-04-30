const RelatedPosts = () => {
  const dataRelatedPosts = [
    {
      id: 1,
      image:
        "https://moonbeam.network/wp-content/uploads/2022/04/runtime-1400-900x604.png",
      title: ["Announcements"],
      content:
        "Upgraded Moonbeam Staking App and New Dynamic Fee Mechanism Live on Moonriver",
      author: "Moonbeam Team",
      time: "March 20, 2023",
    },
    {
      id: 2,
      image:
        "https://moonbeam.network/wp-content/uploads/2023/02/opengov-moonriver-runtime-2100-900x604.png",
      title: ["Announcements", "Blog"],
      content: "The First Implementation of OpenGov is Live on Moonriver",
      author: "Moonbeam Team",
      time: "February 14, 2023",
    },
    {
      id: 3,
      image:
        "https://moonbeam.network/wp-content/uploads/2022/11/Robonomics-Moonriver-Integration-900x604.png",
      title: ["Announcements"],
      content:
        "Moonriver Provides EVM Smart Contract Platform for Robonomics Applications with XCM Integration",
      author: "Moonbeam Team",
      time: "November 22, 2022",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F5] pb-[56px]">
      <div className="w-[80%] mx-auto">
        <h3 className="pt-[48px] pb-[40px] font-VarelaRound text-[18px] leading-[24px]">
          Related Posts
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {dataRelatedPosts.map((item, index) => {
            return (
              <div
                className="w-full bg-white mb-[30px] rounded overflow-hidden lg:w-[30%]"
                key={index}
              >
                <div className="w-full ">
                  <img className="w-full " src={item.image} alt="" />
                </div>
                <div className="px-[30px]">
                  <div className="flex pt-[20px] gap-x-[10px]">
                    {item.title.map((list, index) => {
                      return (
                        <p
                          className="text-[rgb(225,20,123)] text-[14px] leading-[19px] font-OpenSans font-[600]"
                          key={index}
                        >
                          {list}
                        </p>
                      );
                    })}
                  </div>
                  <div className=" pt-[20px] pb-[30px] ">
                    <h3 className="font-VarelaRound text-[18px] leading-[26px] pb-[12px]">
                      {item.content}
                    </h3>
                    <div className="flex gap-x-[12px] items-center">
                      <img
                        className="w-[38px] h-[38px]"
                        src="/images/moonbeam-favicon.png"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <a href="#">{item.author}</a>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
