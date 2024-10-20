import { url } from "inspector";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";
import IntroHeading from "../IntroHeading";
import { useOutletContext } from "react-router-dom";

export default function ServiceSection(props: RegularObject) {
  const SECTION_TITLE = "Service",
    siteURL = useOutletContext();

  const sectionArray = [
    {
      name: "Sales and Leasing",
      img: "home_leasing.jpg",
      url: "/services/sales-lease",
    },
    {
      name: "Logistics",
      img: "home_logistics.jpg",
      url: "/services/logistics",
    },
    {
      name: "Maintenance/Repair",
      img: "home_maintenance.jpg",
      url: "/services/maintenance",
    },
  ];

  return (
    <section className="h-max py-24 home__page__service theme__section">
      <IntroHeading heading="Our Services" />
      <div className="h-max px-4 py-8 sm:w-11/12 mx-auto flex flex-col sm:flex-row gap-y-4 sm:gap-5 ">
        {sectionArray.map((item: RegularObject, i: number) => (
          <div className="sm:basis-1/3 flex justify-center" key={i}>
            <OverlayImage
              src={`${siteURL}${item.img}`}
              width={400}
              height={300}
              alt={`${item.name} ${SECTION_TITLE}`}
              section={SECTION_TITLE}
              text={`${item.name} ${SECTION_TITLE}`}
              url={item.url}
            />
          </div>
        ))}
        {/* <div className="sm:basis-1/3 flex justify-center">
          <OverlayImage
            src={`${siteURL}home_logistics.jpg`}
            width={400}
            height={300}
            alt={`Logistics ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Logistics ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-1/3 flex justify-center">
          <OverlayImage
            src={`${siteURL}home_maintenance.jpg`}
            width={400}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div> */}
      </div>
    </section>
  );
}
