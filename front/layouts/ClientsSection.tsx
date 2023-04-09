import IntroHeading from "./IntroHeading";
import { sunset } from "../assets";
import ImageElement from "../elements/ImageElement";
import OverlayImage from "../elements/OverlayImage";

export default function ClientsSection() {
  return (
    <section className="h-max py-24 bg-Stone-200 sm:px-8 px-4">
      <IntroHeading heading="Our Clients" />
      <div className="flex flex-wrap">
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
            width={400}
            height={400}
            alt="service 1"
            section="client"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <OverlayImage
            src={sunset}
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
