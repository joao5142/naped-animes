import Header from "../../src/components/Header";
import Main from "../../src/components/Main";
import NewsSection from "../../src/components/NewsSection";
import Post from "../../src/components/Post";
import Footer from "../../src/components/Footer";

export default function PostPage(props) {
  return (
    <>
      <Header />
      <Main>
        <Post />
        <NewsSection />
      </Main>
      <Footer />
    </>
  );
}
