import IntroHeading from "./IntroHeading";
import { sunset } from "../assets";
import ImageElement from "../elements/ImageElement";

export default function ClientsSection() {
  return (
    <section className="h-max py-24 bg-blue-500 sm:px-8 px-4">
      <IntroHeading heading="Our Clients" />
      <div className="flex flex-wrap gap-y-4">
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
        <div className="sm:basis-1/4 flex justify-center">
          <ImageElement src={sunset} width="400" height="400" alt="service 1" />
        </div>
      </div>
    </section>
  );
}
