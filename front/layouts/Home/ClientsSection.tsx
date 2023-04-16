import IntroHeading from "../IntroHeading";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";

export default function ClientsSection(props: RegularObject) {
  console.log(props);
  return (
    <section className="h-max py-24 bg-Stone-200 sm:px-8 px-4">
      <IntroHeading heading="Our Clients" />
      <div className="flex flex-wrap">
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={300}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={`${props?.siteURL}home_consulting.jpg`}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
      </div>
    </section>
  );
}
