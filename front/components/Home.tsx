import Footer from "./Footer";
import Nav from "../layouts/Nav";
import SubFooter from "./SubFooter";

const Home = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main className="min-h-fit">{children}</main>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
