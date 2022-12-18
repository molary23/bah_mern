import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Home;
