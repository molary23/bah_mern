import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
import { RegularObject } from "../../util/Types";
import { useOutletContext } from "react-router-dom";

export default function Distilled(props: RegularObject) {
  const SITE_URL = useOutletContext();
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Distilled Water",
          subHeading: `As a company, we provide distilled water for multipurpose use.`,
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
    </section>
  );
}
