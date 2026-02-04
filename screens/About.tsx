import AboutHero from "../components/about/AboutHero";
// import FoundersStory from "../components/about/FoundersStory";
// import OriginStory from "../components/about/OriginStory";
// import PersonalityStory from "../components/about/PersonalityStory";
import PhilosophySection from "../components/about/PhilosophySection";
import FlagshipPropertySection from "../components/about/FlagshipPropertySection";
import MeetHostsSection from "../components/about/MeetHostsSection";
import PropertiesSection from "../components/about/PropertiesSection";
import WhyLibertySection from "../components/about/WhyLibertySection";
import LookingAheadSection from "../components/about/LookingAheadSection";
import ValuesGrid from "../components/about/ValuesGrid";
import BookDirectMessage from "../components/about/BookDirectMessage";
import ClosingStatement from "../components/about/ClosingStatement";

const About = () => {
  return (
    <>
      <AboutHero />
      {/* <FoundersStory />
      <OriginStory />
      <PersonalityStory /> */}
      <PhilosophySection />
      <FlagshipPropertySection />
      <MeetHostsSection />
      <PropertiesSection />
      <WhyLibertySection />
      <LookingAheadSection />
      <ValuesGrid />
      <BookDirectMessage />
      <ClosingStatement />
    </>
  );
};

export default About;