import { dummy, sunset } from "../assets";
import ImageElement from "../elements/ImageElement";
import OverlayImage from "../elements/OverlayImage";
import IntroHeading from "./IntroHeading";

export default function ServiceSection() {
  return (
    <section className="h-max bg-offBlue py-12 home__page__service">
      <IntroHeading heading="Our Services" />
      <div className="h-max px-4 py-8 sm:w-11/12 mx-auto flex flex-col sm:flex-row gap-y-4 sm:gap-5 ">
        <div className="sm:basis-1/3 flex justify-center">
          <OverlayImage
            src={dummy}
            width={1000}
            height={1250}
            alt="service 1"
            section="service"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/3 flex justify-center">
          <OverlayImage
            src={dummy}
            width={1000}
            height={1250}
            alt="service 1"
            section="service"
            text="Hello service"
          />
        </div>
        <div className="sm:basis-1/3 flex justify-center">
          <OverlayImage
            src={dummy}
            width={1000}
            height={1250}
            alt="service 1"
            section="service"
            text="Hello service"
          />
        </div>
      </div>
    </section>
  );
}
