import Header from "../src/components/presentation/Header";
import AnimesSection from "../src/components/sections/AnimesSection";
import Main from "../src/components/presentation/Main";
import Footer from "../src/components/presentation/Footer";
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
