import { dummy, sunset } from "../assets";
import ImageElement from "../elements/ImageElement";
import IntroHeading from "./IntroHeading";

export default function ServiceSection() {
  return (
    <section className="h-max bg-blue-900 py-12 home__page__service">
      <IntroHeading heading="Our Services" />
      <div className="h-max px-4 py-8 sm:w-11/12 mx-auto flex flex-col sm:flex-row gap-y-4 sm:gap-5 ">
        <div className="sm:basis-1/3 flex justify-center">
          <ImageElement
            src={dummy}
            width="1000"
            height="1250"
            alt="service 1"
          />
        </div>
        <div className="sm:basis-1/3 flex justify-center">
          <ImageElement
            src={dummy}
            width="1000"
            height="1250"
            alt="service 1"
          />
        </div>
        <div className="sm:basis-1/3 flex justify-center">
          <ImageElement
            src={sunset}
            width="1000"
            height="1250"
            alt="service 1"
          />
        </div>
      </div>
    </section>
  );
}
