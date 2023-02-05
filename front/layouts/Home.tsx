import Footer from "./Footer";
import Nav from "./Nav";

const Home = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main className="min-h-fit">{children}</main>
      <Footer />
    </>
  );
};

export default Home;
