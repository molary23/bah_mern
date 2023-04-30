import { dummy, sunset } from "../../assets";
import ImageElement from "../../elements/ImageElement";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";
import IntroHeading from "../IntroHeading";

export default function ProductSection(props: RegularObject) {
  const SECTION_TITLE = "Product";
  return (
    <section className="h-max bg-offBlue py-24 home__page__service theme__section">
      <IntroHeading heading="Our Products" />
      <div className="h-max px-4 py-24 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:gap-3 gap-y-4 sm:flex-row ">
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt={`Consulting ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Consulting ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_logistics.jpg`}
            width={300}
            height={300}
            alt={`Logistics ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Logistics ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
        <div className="sm:basis-[23.5%] flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_maintenance.jpg`}
            width={300}
            height={300}
            alt={`Maintenance/Repair  ${SECTION_TITLE}`}
            section={SECTION_TITLE}
            text={`Maintenance/Repair  ${SECTION_TITLE}`}
          />
        </div>
      </div>
    </section>
  );
}
