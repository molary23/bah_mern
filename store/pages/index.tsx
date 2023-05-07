import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";
import Footer from "../layouts/Footer";
import Nav from "../layouts/Nav";
import HTMLHead from "../layouts/HTMLHead";

export default function Home() {
  return (
    <>
      <HTMLHead />
      <Nav />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}
