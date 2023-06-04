import { useState, useEffect } from "react";
import OverlayImage from "../../elements/OverlayImage";
import { RegularObject } from "../../util/Types";
import IntroHeading from "../IntroHeading";
import { useOutletContext } from "react-router-dom";

export default function ProductSection(props: RegularObject) {
  const [products, setProducts] = useState<RegularObject>([]),
    SECTION_TITLE = "Product",
    siteURL = useOutletContext();

  useEffect(() => {
    fetch(`https://www.bahengineeringconsultant.com/outbox/products.php`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.warn("Failed to fetch Products ", error));
  }, []);

  return (
    <>
      {products?.length > 0 && (
        <section className="h-max bg-offBlue py-24 home__page__service theme__section">
          <IntroHeading heading="Our Products" />
          <article className="h-max px-4 py-24 sm:w-11/12 mx-auto flex flex-col md:flex-wrap sm:gap-3 gap-y-4 sm:flex-row ">
            {products.map((item: RegularObject, i: number) => {
              return (
                <div className="sm:basis-[23.5%] flex justify-center" key={i}>
                  <a href={item.url} target="_blank" rel="noreferrer noopener">
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
