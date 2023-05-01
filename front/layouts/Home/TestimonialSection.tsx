import TestimonyElement from "../../elements/TestimonyElement";
import IntroHeading from "../IntroHeading";
import { RegularObject } from "../../util/Types";
import { SITE_CONSTANTS } from "../../util/constants";

export default function TestimonialSection(props: RegularObject) {
  return (
    <section className="h-max py-24 bg-primary text-white px-4 sm:px-8 theme__section testimony__section">
      <IntroHeading heading="Testimonials" />
      <div className="flex flex-col gap-y-16 md:gap-x-8 sm:flex-row  ">
        <div className="sm:basis-1/3">
          <TestimonyElement
            testimony="BAH Engineering Consultant is responsive, committed, honest in all
            business transactions and competent in their operational and
            technical constructs. BAH Engineering Consultant takes pride in its
            business and show passions over profit."
            testifier="Secured Records Management Solutions"
            image={SITE_CONSTANTS.image + "srmsl.jpg"}
          />
        </div>
        <div className="sm:basis-1/3">
          <TestimonyElement
            testimony="BAH Engineering Consultant has been a strong partner in our ability to deliver world-class material handling services to our clients. The company has delivered competencies in a specialty of forklift machinery, provided access to materials and mechanisms in warehousing and proven that collaboration is the real strength in business"
            testifier="Baun Limited"
            image={SITE_CONSTANTS.image + "baun.jpg"}
          />
        </div>
        <div className="sm:basis-1/3">
          <TestimonyElement
            testimony="BAH Engineering Consultant is responsive, committed, honest in all
            business transactions and competent in their operational and
            technical constructs. BAH Engineering Consultant takes pride in its
            business and show passions over profit."
            testifier="Secured Records Management Solutions"
            image={SITE_CONSTANTS.image + "srmsl.jpg"}
          />
        </div>
      </div>
    </section>
  );
}
