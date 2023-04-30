import ClientsSection from "../layouts/Home/ClientsSection";
import ProductSection from "../layouts/Home/ProductSection";
import ServiceSection from "../layouts/Home/ServiceSection";
import TestimonialSection from "../layouts/Home/TestimonialSection";
import TopSection from "../layouts/Home/TopSection";
import { RegularObject } from "../util/Types";
export default function Home(props: RegularObject) {
  return (
    <>
      <TopSection siteURL={props?.siteURL} />
      <ServiceSection siteURL={props?.siteURL} />
      <ProductSection siteURL={props?.siteURL} />
      <ClientsSection siteURL={props?.siteURL} />
      <TestimonialSection siteURL={props?.siteURL} />
    </>
  );
}
