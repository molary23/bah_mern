import ClientsSection from "../layouts/Home/ClientsSection";
import ProductSection from "../layouts/Home/ProductSection";
import ServiceSection from "../layouts/Home/ServiceSection";
import TestimonialSection from "../layouts/Home/TestimonialSection";
import TopSection from "../layouts/Home/TopSection";
import { RegularObject } from "../util/Types";

export async function getStaticProps() {
  const response = await fetch(
    "http://bahengineeringconsultant.com/outbox/info.php"
  );

  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}

export default function Home(props: RegularObject) {
  return (
    <>
      <TopSection siteURL={props?.siteURL} />
      <ServiceSection siteURL={props?.siteURL} />
      <ProductSection siteURL={props?.siteURL} products={props.products} />
      <ClientsSection siteURL={props?.siteURL} />
      <TestimonialSection siteURL={props?.siteURL} />
    </>
  );
}
