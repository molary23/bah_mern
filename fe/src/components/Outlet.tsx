import Footer from "./Footer";
import Nav from "../layouts/Nav";
import SubFooter from "./SubFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HTMLHead from "../layouts/HTMLHead";
import { Outlet } from "react-router-dom";
import { SITE_CONSTANTS } from "../util/constants";

export default function OutletComponent() {
  const router = useLocation();
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
      <main className="min-h-fit">
        <Outlet context={SITE_CONSTANTS.imageURL} />
      </main>
      <SubFooter />
      <Footer />
    </>
  );
}
