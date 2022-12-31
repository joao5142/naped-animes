import Header from "../src/components/presentation/Header";
import Main from "../src/components/presentation/Main";
import HomeSection from "../src/components/sections/HomeSection";
import Footer from "../src/components/presentation/Footer";
import Head from "next/head";
import { useEffect } from "react";
import Seo from "../src/components/seo";

export default function Home() {
  return (
    <>
      <Seo title="Home Naped" />

      <Header />
      <Main>
        <HomeSection />
      </Main>
      <Footer />
    </>
  );
}
