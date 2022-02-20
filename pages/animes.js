import Header from "../src/components/Header";
import AnimesSection from "../src/components/AnimesSection";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
export default function Animes() {
  return (
    <>
      <Header />
      <Main>
        <AnimesSection />
      </Main>
      <Footer />
    </>
  );
}
