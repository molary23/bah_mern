import IntroHeading from "../IntroHeading";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";

export default function ClientsSection(props: RegularObject) {
  console.log(props);
  return (
    <section className="h-max py-24 bg-Stone-200 sm:px-8 px-4">
      <IntroHeading heading="Our Clients" />
      <div className="h-max py-8 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:flex-row">
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={300}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
      </div>
    </section>
  );
}
