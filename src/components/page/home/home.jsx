import Container from "../../UI/container";
import Hero from "./components/hero";
import HowWork from "./components/howWork";
import Recycle from "./components/recycle";
import Blog from "./components/blogs";
import InfoSection from "./components/Info";
import Certificate from "./components/Certificate";
import Partners from "./components/partners";
import ContactUs from "./components/contact-us";
import RecycleBox from "./components/recyclebox";
import YouTobe from "./components/youtube";
import News from "./components/news";

export default async function HomePage({ lang }) {
  return (
    <main>
      <Container>
        <Hero />
        <InfoSection />
      </Container>
      <RecycleBox />
      <Container>
        <Partners />
        <h1>how work</h1>
        <YouTobe />
      </Container>
      <Recycle />
      <Container>
        <Blog />
        <Certificate />
        <News />
        <ContactUs />
      </Container>
    </main>
  );
}
