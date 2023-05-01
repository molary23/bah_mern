import PageHeading from "../../layouts/PageHeading";
import PageSubIntro from "../../layouts/PageSubIntro";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import { RegularObject } from "../../util/Types";

export default function consultanct(props: RegularObject) {
  const SITE_URL = props?.siteURL;
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Consultancy",
          subHeading: `As a company, we provide comprehensive and full-scope services for major projects. We are ready to offer consultancy service to any company as regards maintenance and repair or valuation of equipment’s; and also on the operations of the equipment.`,
        }}
        imageUrL="bg-[url(/assets/images/home_power.jpg)]"
      />

      <PageSubIntro heading="Maintenance is necessary for every equipment to achieve the required level of performance, and to keep them running efficiently during at least its usual life cycle; hence, we are the best firm for the Maintenance and Repairs of all your equipments." />
      <ParallaxArticle
        title="Consulting"
        description={[
          `We have knowledgeable experts in our firm, who can provide consultancy services to your firm. Our consultancy charge is cheap and affordable for our clients.`,
          `We are ready to offer consultancy service to any company as regards maintenance and repair of equipments; and also on the operations of the equipments. Our team of professionals provide wide range of consultancy services. We use our technical expertise, and knowledge to assist clients.`,
        ]}
        imageSrc=""
        type="single"
        backgroundImage="bg-[url(/assets/images/home_power.jpg)]"
      />
    </section>
  );
}
