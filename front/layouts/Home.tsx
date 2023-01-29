import { JsxAttribute } from "typescript";
import Footer from "./Footer";
import HTMLHead from "./HTMLHead";
import Nav from "./Nav";

const Home = ({ children }: JsxAttribute | any) => {
  return (
    <>
      <HTMLHead />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Home;
