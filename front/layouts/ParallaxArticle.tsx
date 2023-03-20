import React from "react";
import { SectionProp } from "../util/Types";
import ImageElement from "../elements/ImageElement";

export default function ParallaxArticle(props: SectionProp) {
  return (
    <section
      className={`h-max sm:h-[40rem] ${props?.backgroundImage} bg-fixed bg-cover bg-center`}
    >
      <article className="h-max py-8 sm:h-[40rem] bg-blue-900/[0.6] sm:py-20 sm:px-20 flex flex-col sm-flex-row gap-y-4">
        <aside
          className={`${
            props?.type === "single" ? "bg-yellow-600" : ""
          } h-max sm:py-12 sm:px-6 sm:basis-1/2 hidden__element left__article`}
        >
          <h2 className="mb-3 text-2xl font-bold text-center sm:text-left">
            {props?.title}
          </h2>
          <p className="text-xl mb-6 text-justify">{props?.description?.[0]}</p>
          {props?.description?.[1] && (
            <p className="text-lg text-justify">{props?.description?.[1]}</p>
          )}
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
          ) : null}
        </aside>
      </article>
    </section>
  );
}
