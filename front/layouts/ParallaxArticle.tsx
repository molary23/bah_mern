import React from "react";
import { SectionProp } from "../util/Types";
import ImageElement from "../elements/ImageElement";

export default function ParallaxArticle(props: SectionProp) {
  return (
    <section
      className={`h-max lg:h-[40rem] ${props?.backgroundImage} bg-fixed bg-cover bg-center`}
    >
      <article className="h-max py-8 px-4 lg:h-[40rem] bg-zinc-900/[0.6] text-white lg:py-20 lg:px-20 flex flex-col sm:flex-row gap-y-8">
        <aside
          className={`${
            props?.type === "single" ? "bg-white text-black/[0.6]" : ""
          } h-max p-4 lg:py-12 lg:px-6 lg:basis-1/2 hidden__element left__article`}
        >
          <h2 className="mb-3 text-3xl font-bold text-center lg:text-left">
            {props?.title}
          </h2>
          <p className="md:text-2xl text-xl mb-6 text-justify">
            {props?.description?.[0]}
          </p>
          {props?.description?.[1] && (
            <p className="md:text-xl text-lg text-justify">
              {props?.description?.[1]}
            </p>
          )}
        </aside>
        <aside className="lg:basis-1/2 hidden__element left__aside">
          {props?.type !== "single" ? (
            <ImageElement
              width={600}
              height={400}
              src={props?.imageSrc}
              alt={props?.imageAlt}
              className="mx-auto"
            />
          ) : null}
        </aside>
      </article>
    </section>
  );
}
