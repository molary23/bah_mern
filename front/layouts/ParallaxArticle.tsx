import React from "react";
import { SectionProp } from "../util/Types";
import ImageElement from "../elements/ImageElement";

const ParallaxArticle = (props: SectionProp) => {
  return (
    <section
      className={`h-[40rem] ${props?.backgroundImage} bg-fixed bg-cover bg-center`}
    >
      <article className="h-[40rem] bg-blue-900/[0.6] sm:py-20 sm:px-20 sm:flex">
        <aside
          className={`${
            props?.type === "single" ? "bg-yellow-600" : ""
          } h-max sm:py-12 sm:px-6 sm:basis-1/2 hidden__element left__article`}
        >
          <h2 className="mb-3 text-2xl font-bold">{props?.title}</h2>
          <p className="text-xl mb-2">{props?.description?.[0]}</p>
          <p className="text-lg">{props?.description?.[1]}</p>
        </aside>
        <aside className="sm:basis-1/2 hidden__element left__aside">
          {props?.type !== "single" ? (
            <ImageElement
              width={600}
              height={400}
              src={props?.imageSrc}
              alt="alt"
              className="mx-auto"
            />
          ) : (
            ""
          )}
        </aside>
      </article>
    </section>
  );
};

export default ParallaxArticle;
