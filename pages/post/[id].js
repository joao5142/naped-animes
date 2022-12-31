import Header from "/src/components/presentation/Header";
import Main from "/src/components/presentation/Main";
import NewsSection from "/src/components/sections/NewsSection";
import Post from "/src/components/sections/Post";
import Footer from "/src/components/presentation/Footer";

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
