import Header from "/src/components/presentation/Header";
import Main from "/src/components/presentation/Main";
import NewsSection from "/src/components/sections/NewsSection";
import Post from "/src/components/sections/Post";
import Footer from "/src/components/presentation/Footer";
import Seo from "../../src/components/seo";

export default function PostPage(props) {
  return (
    <>
      <Seo title="Naped Post" />
      <Header />
      <Main>
        <Post />
        <NewsSection />
      </Main>
      <Footer />
    </>
  );
}
