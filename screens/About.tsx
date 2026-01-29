import AboutHero from "../components/about/AboutHero";
import FoundersStory from "../components/about/FoundersStory";
import OriginStory from "../components/about/OriginStory";
import PersonalityStory from "../components/about/PersonalityStory";
import BrandStatement from "../components/about/BrandStatement";
import ValuesGrid from "../components/about/ValuesGrid";
import BookDirectMessage from "../components/about/BookDirectMessage";
import ClosingStatement from "../components/about/ClosingStatement";

const About = () => {
  return (
    <>
      <AboutHero />
      <FoundersStory />
      <OriginStory />
      <PersonalityStory />
      <BrandStatement />
      <ValuesGrid />
      <BookDirectMessage />
      <ClosingStatement />
    </>
  );
};

export default About;