import { dummy, sunset } from "../../assets";
import ImageElement from "../../elements/ImageElement";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";
import IntroHeading from "../IntroHeading";

export default function ProductSection(props: RegularObject) {
  const { siteURL, products } = props;
  const SECTION_TITLE = "Product";
  return (
    <section className="h-max bg-offBlue py-24 home__page__service theme__section">
      <IntroHeading heading="Our Products" />
      <div className="h-max px-4 py-24 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:gap-3 gap-y-4 sm:flex-row ">
        {products?.products.map((item: RegularObject, i: number) => {
          return (
            <div className="sm:basis-[23.5%] flex justify-center" key={i}>
              <a href={item.url}>
                <OverlayImage
                  src={`${siteURL}${item.image}`}
                  width={400}
                  height={300}
                  alt={item.name}
                  section={SECTION_TITLE}
                  text={item.name}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
