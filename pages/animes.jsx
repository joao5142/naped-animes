import Header from "../src/components/presentation/Header";
import AnimesSection from "../src/components/sections/AnimesSection";
import Main from "../src/components/presentation/Main";
import Footer from "../src/components/presentation/Footer";
import Seo from "../src/components/seo";
export default function Animes() {
  return (
    <>
      <Seo title="Naped Animes" />
      <Header />
      <Main>
        <AnimesSection />
      </Main>
      <Footer />
    </>
  );
}
