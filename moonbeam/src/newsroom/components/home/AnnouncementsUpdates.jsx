import { BsArrowRightShort } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const dataAnnouncements = [
  {
    id: 1,
    time: "April 13, 2023 in Announcements",
    title: "First Moonbeam Accelerator Cohort Announced",
    link: "announcements/moonbeam-accelerator-cohort/",
  },
  {
    id: 2,
    time: "March 20, 2023 in Announcements",
    title:
      "Upgraded Moonbeam Staking App and New Dynamic Fee Mechanism Live on Moonriver",
    link: "#",
  },
  {
    id: 3,
    time: "February 14, 2023 in Announcements",
    title: "The First Implementation of OpenGov is Live on Moonriver",
    link: "#",
  },
  {
    id: 4,
    time: "November 22, 2022 in Announcements",
    title:
      "Moonriver Provides EVM Smart Contract Platform for Robonomics Applications with XCM Integration",
    link: "#",
  },
  {
    id: 5,
    time: "November 17, 2022 in Announcements",
    title:
      "Bifrost Polkadot Integrates with Moonbeam to Power GLMR Liquid Staking with XCM",
    link: "#",
  },
];
const AnnouncementsUpdates = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container flex flex-col w-full max-w-[90%] lg:w-[90%] mx-auto py-[30px] ">
      <div
        className="text-center pt-[26px] lg:w-[50%] xl:w-[65%] mx-auto "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-[30px] leading-9 lg:text-[34px]  lg:leading-[40px] xl:text-[40px] xl:leading-[48px]  font-VarelaRound mb-[24px]">
          Announcements & Updates
        </h2>
        <span className="font-OpenSans text-[16px] leading-[26px]">
          The latest news, information, and technical releases for the Moonbeam
          project, all in one place.
        </span>
      </div>
      <div className="flex flex-col lg:flex-row pt-[88px]">
        <div
          className="flex flex-col  pr-[42px] lg:w-[50%] lg:pr-[100px]"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h3 className="text-[18px] lg:text-[19px] leading-[26px] mb-[10px] font-VarelaRound">
            Project Milestones
          </h3>
          <span className="text-[16px] leading-[26px] font-OpenSans pb-[27px]">
            Moonbeam completed its launch in January 2022, becoming the primary
            entry point for decentralized applications that want to connect to
            Polkadot. Moonbeam and Moonriver now have over 100 projects,
            integrations, and collaborations, representing a vibrant ecosystem
            for both developers and end-users.
          </span>
          <span className="text-[16px] leading-[26px] font-OpenSans pb-[27px]">
            Keep up to date with new integrations, technology, and
            accomplishments by signing up for the{" "}
            <a
              href="#"
              className="text-[#e1147b] hover:text-black transition-all duration-500 ease-in-out"
            >
              Moonbeam Newsletter
            </a>
            .
          </span>
        </div>
        <div
          className="flex flex-col gap-y-[22px] py-[40px] lg:w-[60vw] lg:pt-0"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          {dataAnnouncements.map((item) => {
            return (
              <div className="font-OpenSans group cursor-pointer" key={item.id}>
                <Link to={item.link}>
                  <div className="text-[#888] mb-[4px] flex flex-col gap-y-[4px]">
                    <span className="text-[11px]">{item.time}</span>
                    <h3 className="font-VarelaRound">{item.title}</h3>
                  </div>
                  <div className="flex text-[#e1147b] items-center gap-x-[6px]">
                    <span className="text-[12px] font-[700] tracking-[2px] uppercase ">
                      Read More
                    </span>
                    <BsArrowRightShort className="text-[23px] group-hover:translate-x-2 transition-all duration-500 ease-in-out"></BsArrowRightShort>
                  </div>
                </Link>
              </div>
            );
          })}
          <Link
            to="https://moonbeam.network/category/announcements/"
            className="w-fit ml-auto h-fit mt-[40px]"
          >
            <div className="flex items-center  gap-x-[8px] w-fit ml-auto group  cursor-pointer relative">
              <span className="font-VarelaRound">View All Announcements</span>
              <MdKeyboardArrowRight className="relative w-[24px] h-[24px] text-[rgba(0,0,0,0.5)] group-hover:translate-x-2 transition-all duration-500 ease-in-out"></MdKeyboardArrowRight>
              <div className="absolute border right-0 border-[rgba(0,0,0,0.5)] rounded-[50%] w-6 h-6 group-hover:opacity-0 transition-all duration-500 ease-in-out"></div>
              <div className="absolute border right-0 border-t-[rgba(0,0,0,0.5)] w-[16px] h-[1px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-[-3px] transition-all duration-500 ease-in-out"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsUpdates;
