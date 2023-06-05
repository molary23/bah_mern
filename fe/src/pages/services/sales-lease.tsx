import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
import { RegularObject } from "../../util/Types";
import { useOutletContext } from "react-router-dom";
import RightArticle from "../../layouts/RightArticle";

export default function Sales(props: RegularObject) {
  const SITE_URL = useOutletContext();
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Sales & Leasing",
          subHeading: `As a company, we provide warehouse equipments for sales and some for leasing.`,
        }}
        imageUrL="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      />
      <LeftArticle
        title="Distilled Water"
        description={[
          `We provide Battery Top up water, Battery Electrolyte Mixing water.`,
          `We also provide water used for industrial streaming iron and Laboratory uses for tests.`,
        ]}
        imageSrc={`${SITE_URL}drive_in_racking.jpg`}
        imageAlt="Distilled Water"
        type="dual"
        backgroundImage="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      />
      <RightArticle
        title="Battery Electrolyte"
        description={[
          `We provide Battery Top up water, Battery Electrolyte Mixing water.`,
          `The electrolyte in your battery is a mixture of sulfuric acid and water. Battery water, on the other hand, is the clean water used to refill the electrolyte when its levels run low. The water used in battery water is usually distilled water or deionized water.`,
        ]}
        imageSrc={`${SITE_URL}drive_in_racking.jpg`}
        imageAlt="Distilled Water"
        type="dual"
        backgroundImage="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      />
    </section>
  );
}
