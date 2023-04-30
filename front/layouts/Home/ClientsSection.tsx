import IntroHeading from "../IntroHeading";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";

export default function ClientsSection(props: RegularObject) {
  const SECTION_TITLE = "Client",
    clientDetails = "One of our clients: ";
  return (
    <section className="h-max py-24 bg-Stone-200 sm:px-8 px-4">
      <IntroHeading heading="Our Clients" />
      <div className="h-max py-8 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:flex-row">
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}cfao.png`}
            width={300}
            height={300}
            alt={`${clientDetails} CFAO`}
            section={SECTION_TITLE}
            text="CFAO"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}gsk.png`}
            width={300}
            height={300}
            alt={`${clientDetails} GSK`}
            section={SECTION_TITLE}
            text="GSK"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}unilever.png`}
            width={300}
            height={300}
            alt={`${clientDetails} Unilever`}
            section={SECTION_TITLE}
            text="Unilever"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}sygen.png`}
            width={300}
            height={300}
            alt={`${clientDetails} Sygen`}
            section={SECTION_TITLE}
            text="Sygen"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}ups.png`}
            width={300}
            height={300}
            alt={`${clientDetails} UPS`}
            section={SECTION_TITLE}
            text="UPS"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}promasidor.png`}
            width={300}
            height={300}
            alt={`${clientDetails} Promasidor`}
            section={SECTION_TITLE}
            text="Promasidor"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}eterna.png`}
            width={300}
            height={300}
            alt={`${clientDetails} Eterna`}
            section={SECTION_TITLE}
            text="Eterna"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}evans.png`}
            width={300}
            height={300}
            alt={`${clientDetails} Evans Medical`}
            section={SECTION_TITLE}
            text="Evans Medical"
          />
        </div>
      </div>
    </section>
  );
}
