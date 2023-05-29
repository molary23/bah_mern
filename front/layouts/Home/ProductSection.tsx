import { useEffect, useState } from "react";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";
import IntroHeading from "../IntroHeading";

export default function ProductSection(props: RegularObject) {
  const [products, setProducts] = useState<RegularObject>({}),
    [error, setError] = useState<boolean>(false),
    { siteURL } = props,
    SECTION_TITLE = "Product";

  useEffect(() => {
    fetch(`https://www.bahengineeringconsultant.com/outbox/info.php`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      {!error && (
        <section className="h-max bg-offBlue py-24 home__page__service theme__section">
          <IntroHeading heading="Our Products" />
          <article className="h-max px-4 py-24 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:gap-3 gap-y-4 sm:flex-row ">
            {products.map((item: RegularObject, i: number) => {
              return (
                <div className="sm:basis-[23.5%] flex justify-center" key={i}>
                  <a href={item.url} target="_blank">
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
          </article>
        </section>
      )}
    </>
  );
}
