import { sunset } from "../assets";
import TestimonyElement from "../elements/TestimonyElement";
import IntroHeading from "./IntroHeading";

export default function TestimonialSection() {
  return (
    <section className="h-max py-24 bg-primary sm:px-8">
      <IntroHeading heading="Testimonials" />
      <div className="flex flex-col gap-y-16 sm:flex-row  ">
        <TestimonyElement
          testimony="BAH Engineering Consultant is responsive, committed, honest in all
            business transactions and competent in their operational and
            technical constructs. BAH Engineering Consultant takes pride in its
            business and show passions over profit."
          testifier="Secured Records Management Solutions"
          image={sunset}
        />
        <TestimonyElement
          testimony="BAH Engineering Consultant is responsive, committed, honest in all
            business transactions and competent in their operational and
            technical constructs. BAH Engineering Consultant takes pride in its
            business and show passions over profit."
          testifier="Secured Records Management Solutions"
          image={sunset}
        />
        <TestimonyElement
          testimony="BAH Engineering Consultant has been a strong partner in our ability to deliver world-class material handling services to our clients. The company has delivered competencies in a specialty of forklift machinery, provided access to materials and mechanisms in warehousing and proven that collaboration is the real strength in business"
          testifier="Baun Limited"
          image={sunset}
        />
      </div>
    </section>
  );
}
