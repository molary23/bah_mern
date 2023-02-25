import { ClientRequest } from "http";
import ClientsSection from "../layouts/ClientsSection";
import HTMLHead from "../layouts/HTMLHead";
import ProductSection from "../layouts/ProductSection";
import ServiceSection from "../layouts/ServiceSection";
import TestimonialSection from "../layouts/TestimonialSection";
import TopSection from "../layouts/TopSection";
export default function Home() {
  const meta = {
    title: "Home",
    description: "This is BAH Engineering Consultant about page",
    keywords: "about us, about",
  };

  return (
    <>
      <HTMLHead meta={meta} />

      <TopSection />
      <ServiceSection />
      <ClientsSection />
      <TestimonialSection />
    </>
  );
}
