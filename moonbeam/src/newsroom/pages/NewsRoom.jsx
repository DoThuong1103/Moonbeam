import BackToTopButton from "../components/backToTop";
import AnnouncementsUpdates from "../components/home/AnnouncementsUpdates";
import FirstSection from "../components/home/FirstSection";
import RecentNewsCoverage from "../components/home/RecentNewsCoverage";
import SendMail from "../components/home/SendMail";

const NewsRoom = () => {
  return (
    <div>
      <FirstSection />
      <AnnouncementsUpdates />
      <RecentNewsCoverage />
      <SendMail />
      <BackToTopButton />
    </div>
  );
};

export default NewsRoom;
