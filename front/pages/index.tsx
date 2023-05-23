import ClientsSection from "../layouts/Home/ClientsSection";
import ProductSection from "../layouts/Home/ProductSection";
import ServiceSection from "../layouts/Home/ServiceSection";
import TestimonialSection from "../layouts/Home/TestimonialSection";
import TopSection from "../layouts/Home/TopSection";
import { RegularObject } from "../util/Types";
import { SITE_CONSTANTS } from "../util/constants";

/* export async function getStaticProps() {
  const response = await fetch(
      `https://www.bahengineeringconsultant.com/outbox/products.json`
    ),
    data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
 */
export default function Home(props: RegularObject) {
  return (
    <>
      <TopSection siteURL={props?.siteURL} />
      <ServiceSection siteURL={props?.siteURL} />
      {/* {<ProductSection siteURL={props?.siteURL} products={props.products} />} */}
      <ClientsSection siteURL={props?.siteURL} />
      <TestimonialSection siteURL={props?.siteURL} />
    </>
  );
}
