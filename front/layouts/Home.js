import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Home({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Home;
