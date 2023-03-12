import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
import { sunset } from "../../assets";

const distilled = () => {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Distilled Water",
          subHeading: `As a company, we provide distilled water for multipurpose use.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <LeftArticle
        title="Distilled Water"
        description={[
          `We provide Battery Top up water, Battery Electrolyte Mixing water.`,
          `We also provide water used for industrial streaming iron and Laboratory uses for tests.`,
        ]}
        imageSrc={sunset}
        type="dual"
        backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
      />
    </section>
  );
};

export default distilled;
