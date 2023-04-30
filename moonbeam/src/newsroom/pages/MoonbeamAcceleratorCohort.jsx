import Container from "../components/AcceleratorCohort/Container";
import FirstSection from "../components/AcceleratorCohort/FirstSection";
import MorePosts from "../components/AcceleratorCohort/MorePosts";
import RelatedPosts from "../components/AcceleratorCohort/RelatedPosts";
import Social from "../components/AcceleratorCohort/Social";
import BackToTopButton from "../components/backToTop";

const MoonbeamAcceleratorCohort = () => {
  return (
    <div>
      <FirstSection />
      <Social />
      <Container />
      <RelatedPosts />
      <MorePosts />
      <BackToTopButton />
    </div>
  );
};

export default MoonbeamAcceleratorCohort;
