import PageHeading from "../layouts/PageHeading";
import { useOutletContext } from "react-router-dom";

const leaders = [
  {
    name: "Hassan Billy",
    qualification: "Msc, PMP, FHG",
    img: "home_power.jpg",
  },
  {
    name: "Abdulhammed Hamzat",
    qualification: "Msc, MNSE, R.Engr(COREN)",
    img: "home_power.jpg",
  },
  { name: "Hassan Adetayo", qualification: "Bsc", img: "home_power.jpg" },
];

export default function About() {
  const SITE_URL = useOutletContext();
  return (
    <section>
      <PageHeading
        intro={{
          heading: "About Us",
          subHeading: `We are only a Buzz away`,
        }}
        imageUrL={
          "bg-[url(https://bahengineeringconsultant.com/images/aboutus.png)]"
        }
      />
      <div className="about__content__all lg:w-full h-fit mx-auto pb-8">
        <article className="about__content__who h-fit lg:p-12 p-6 bg-stone-100 theme__section">
          <h2 className="text-center font-bold text-3xl lg:text-6xl about__subheading">
            Who we are
          </h2>

          <div className="about__content__who--details mt-6">
            <p className="about__content--para text-xl lg:text-2xl text-justify mb-3">
              BAH Engineering Consultant is a globally-focused company that
              seeks competitive advantage through quality, price peculiarity and
              value added products and services.
            </p>
            <p className="about__content--para text-xl lg:text-2xl text-justify mb-3">
              The company was incorporated in 1990 as an enterprise in Lagos and
              later moved to Kano in the year 1996 to oversee the sales and
              services of automotive product. BEC ran a skeletal business in
              Eket, Akwa Ibom within 1999 to 2002 and later moved to Lagos.
            </p>
            <p className="about__content--para text-xl lg:text-2xl text-justify mb-3">
              The management underwent special trainings on warehouse
              equipment’s such as stocking on racks & forklifts services. It was
              during this period the company found out that most clients buy
              wrong equipment’s for use on the stock racking system and the
              company decided to normalize this for future clients that pass
              through us.
            </p>
            <p className="about__content--para text-xl lg:text-2xl text-justify mb-3">
              Our main objective is centered on the need to provide additional
              services to the customers and inject a new innovation into the
              growing economy in Nigeria, and of in-fact, to drive a noble
              excellent idea from the world market at large BEC, a reputable
              company with a hundred percent indigenous team of manager, turns
              around by a team of experts and some well-qualified professionals
              from various part of the country.
            </p>
            <p className="about__content--para text-xl lg:text-2xl text-justify mb-3">
              This company founded over twenty years ago can boast of highly
              experienced and skilled staff.
            </p>

            <p className="about__content--para--m text-xl text-justify mb-3">
              Our area of specialization have grown from Automobile to
              procurement, maintenance, engineering services, fabrication,
              supply of labour, General contractor and sales and after sales
              services.
            </p>
            <p className="about__content--para--m text-xl text-justify mb-3">
              BEC has the capacity of turning around the trust contracted to it
              by any of it client BEC has its Corporate Registered Office at 45,
              Makinde Street, Ojuelegba, Surulere, Lagos state and now moved to
              Ogun State: 2, Akinremi Adekunle Crescent, By Km51, Lagos Abeokuta
              Expressway, Abule Oke, Ifo LGA. We have branches links in Kano,
              Port-Harcourt and Eket and we are planning to have more link
              nationwide.
            </p>
            <p className="about__content--para--m text-xl text-justify mb-3">
              As a company, we share skills and resources among business units
              to optimize performance and sustain market dominance. We are
              committed to a plan of sustained sales and profit growth that
              recognizes and balances both short and long-term objectives. Our
              businesses are closely-interrelated, providing the company with
              significant growth opportunities and our synergistic benefits.
            </p>
            <p className="about__content--para--m text-xl text-justify mb-3">
              Finally, we have a team of experts at our disposal to provide
              door-to-door services needed to derive home the quality, culture
              and motivation as entrenched in policy of BAH ENGINEERING
              CONSULTANT.
            </p>
          </div>
        </article>
        <article className="about__content__how h-fit lg:p-12 p-6">
          <h2 className="text-center font-bold text-3xl lg:text-6xl page__subheading">
            How We Measure Our Performance
          </h2>
          <div className="about__content__how--details mt-6">
            <p className="about__content--para text-2xl lg:text-3xl text-justify mb-5">
              Each business will make a positive contribution to the company’s
              objectives in the pursuit of creating genuine value for our
              stakeholders. Our “scorecard’ includes:
            </p>
            <ul className="list-disc list-outside ml-6">
              <li className="about__content--list text-xl lg:text-2xl">
                Human Resources – Employee satisfaction, Training
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                Customer Focus – Loyalty, Market Leadership Business
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                Processes – Productivity, Quality, Cost, Environment Business
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                Results – Return on Assets, Growth
              </li>
            </ul>
          </div>
        </article>

        <article className="about__content__obj h-fit lg:p-12 p-6 bg-offBlue theme__section">
          <h2 className="text-center font-bold text-3xl lg:text-6xl page__subheading">
            Our Strategic Objectives
          </h2>
          <div className="about__content__obj--details mt-6">
            <ul className="list-disc list-outside ml-6">
              <li className="about__content--list text-xl lg:text-2xl">
                To make all of our products and services market leaders in their
                core categories in terms of quality and price peculiarity while
                exceeding customer expectations.
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                To invest in Research and Development aimed at improving our
                approaches to production and service discharge to achieve
                further sustenance of price advantage, product quality and
                customer satisfaction.
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                To establish and maintain a dominant leadership position for
                whichever core categories we choose to operate.
              </li>
              <li className="about__content--list text-xl lg:text-2xl">
                To provide all our employees with challenging and rewarding
                work, satisfying work conditions and opportunities for personal
                development, advancement and performance-based remunerations.
              </li>
            </ul>
          </div>
        </article>

        <div className="about__team flex flex-wrap  mx-auto justify-between border border-gray-100 rounded-md h-full py-10 px-6 lg:h-72 lg:py-14 lg:px-12 w-11/12 mt-8">
          <div className="our__team lg:flex lg:flex-row w-full mx-auto lg:gap-6 justify-around">
            <div className="our__team--intro mb-6 lg:basis-1/4">
              <h2 className="our__team--heading mb-4 text-3xl font-black text-center lg:text-left">
                Meet Our Leadership
              </h2>
              <p className="our__team--para text-center lg:text-left mb-8">
                Our team is lead by the following honourable personalities.
              </p>
            </div>
            <div className="our__team--member sm:flex sm:justify-around sm:basis-3/4">
              {leaders.map((l, i) => {
                return (
                  <div
                    className="about__team--member flex mb-6 gap-4 lg:justify-between lg:gap-3"
                    key={i}
                  >
                    <div className="">
                      <img
                        className="h-24 w-24 rounded-full"
                        src={SITE_URL + l.img}
                        width={"256"}
                        height={"256"}
                        alt={l.name}
                      />
                    </div>
                    <div className="team_member--name mt-6">
                      <h3 className="about__team--name font-bold">{l.name}</h3>
                      <small className="team__member--title">
                        {l.qualification}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
