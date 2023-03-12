import PageHeading from "../../layouts/PageHeading";
import PageSubIntro from "../../layouts/PageSubIntro";
import RightArticle from "../../layouts/RightArticle";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import LeftArticle from "../../layouts/LeftArticle";
import { sunset } from "../../assets";

export default function logistics() {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Logistics",
          subHeading: `As a company, we are into the purchase, transport, storage, distribution, and warehousing of materials and finished products.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />

      <PageSubIntro heading="Across the nook and cranny of Nigeria, BAH Engineering and Consultants Limited can deliver shelves, racks, reach trucks, narrow trucks, pallets, stackers, weightier, pallet trucks; and we ensure that the products are distributed in the most efficient way." />
      <RightArticle
        title="Human Resources"
        description={[
          `Our Company have highly qualified engineers, and our technicians are factory-trained experts. BAH Engineering Consultant management are seasoned professionals, who have garnered experience over the years.`,
          `We work tremendously towards satisfying our clients. We also regularly train our staff and organize quarterly Staff Development Program towards improving productivity. We are remarkably known for out-of-the-box thinkers and reliable professionals as staff. We can also train your staff towards yielding better services for your company.`,
        ]}
        imageSrc={sunset}
      />
      <ParallaxArticle
        title="Production"
        description={[
          `We also produce shelves, racks and other engineering tools/equipment’s. With our cutting-edge technologies, we produce items that are perfect and can be used for a longer period of time.`,
          `Our products are remarkably trusted in the market.`,
        ]}
        imageSrc={sunset}
        type="dual"
        backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <LeftArticle
        title="Transportation"
        description={[
          `We are a reputable provider of top notch transport services of equipment’s and engineering products. We also offer direct full-load or part-load haulage to any location and from any location in Nigeria and work closely with many manufacturers, mining and construction companies, oil & gas and engineering companies.`,
          `BAH Engineering Consultants have well trained, skilled, competent and professional drivers who are proficient in transporting of equipment’s.`,
        ]}
        imageSrc={sunset}
      />
    </section>
  );
}
