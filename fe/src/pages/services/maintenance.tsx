import PageHeading from "../../layouts/PageHeading";
import PageSubIntro from "../../layouts/PageSubIntro";
import LeftArticle from "../../layouts/LeftArticle";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import RightArticle from "../../layouts/RightArticle";
import { RegularObject } from "../../util/Types";
import { useOutletContext } from "react-router-dom";

export default function Maintenance(props: RegularObject) {
  const SITE_URL = useOutletContext();
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Maintenance and Repair",
          subHeading: `We are into maintenance and repairs of shelves, racks, reach trucks, narrow trucks, pallets, stackers, weightier, pallet trucks. We perform routine actions which keep devices, equipment, and supporting utilities in working order and prevent trouble from arising.`,
        }}
        imageUrL="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      />

      <PageSubIntro heading="Maintenance is necessary for every equipment to achieve the required level of performance, and to keep them running efficiently during at least its usual life cycle; hence, we are the best firm for the Maintenance and Repairs of all your equipments." />
      <LeftArticle
        title="Warehouse Handling Equipment Maintenance and Repair"
        description={[
          `A warehouse is a critical part of any manufacturing, logistics or value chain operations. It is important to keep all equipment and areas of a warehouse in prime condition with the help of regular cleaning and maintenance. Data shows that better organized and regular maintained storage facility leads to higher operational safety, productivity and efficiency.`,
          `Taking care of regular maintenance is a mundane task yet, it is the most important activity that needs to be carried out with meticulousness and uniformity. Neglecting this aspect of warehouse management can prove to be harmful to the employees as well as to the business. Conversely, safe operations due to well-maintained equipment will ensure high productivity and better usage of time and resources. Our company has track record in handling warehouse handling equipment maintenance and repairs.`,
        ]}
        imageSrc={`${SITE_URL}warehouse_equip.jpg`}
        imageAlt="Warehouse Handling Equipment Maintenance and Repair"
      />
      <ParallaxArticle
        title="Racks Maintenance and Repair"
        description={[
          `Unsafe racking and shelving systems are not only great hazards to warehouse workers, they can ultimately be very expensive in terms of lost business opportunities, damaged products, customer dissatisfaction and damage to the brand and corporate reputation. In order to prevent unfavorable incidents due to faulty or unsafe racking systems, it is critical that regular inspections are carried out and also frequent maintenance operations performed for optimum performance of all equipment.`,
          `Our company has expertise in maintaining and repairing racks to the utmost satisfaction of our clients.`,
        ]}
        imageSrc={`${SITE_URL}rack_maintenance.jpg`}
        imageAlt="Racks Maintenance and Repair"
        type="dual"
        backgroundImage="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      />
      <RightArticle
        title="Power System Maintenance and Repair"
        description={[
          `All electrical systems require periodic maintenance in addition to non-scheduled maintenance caused by unpredictable events such as storms, accidents, and equipment failure.`,
          `The intent of periodic maintenance is to keep the system operating at an acceptable level of service. At BAH Engineering Consultant, we are competent to maintain and repair your power system.`,
        ]}
        imageSrc={`${SITE_URL}power_maintenance.jpg`}
        imageAlt="Power System Maintenance and Repair"
      />
    </section>
  );
}
