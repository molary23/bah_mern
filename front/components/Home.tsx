import Footer from "./Footer";
import Nav from "../layouts/Nav";
import SubFooter from "./SubFooter";
import { useEffect } from "react";
import { useRouter } from "next/router";
import HTMLHead from "../layouts/HTMLHead";

export default function Home({ children }: any) {
  const router = useRouter();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden__element");
          entry.target.classList.add("show__element");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".hidden__element");
    hiddenElement?.forEach((element) => observer.observe(element));
  }, [router.pathname]);
  return (
    <>
      <HTMLHead />
      <Nav />
      <main className="min-h-fit">{children}</main>
      <SubFooter />
      <Footer />
    </>
  );
}
