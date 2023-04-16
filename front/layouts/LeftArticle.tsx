import ImageElement from "../elements/ImageElement";
import { SectionProp } from "../util/Types";

export default function LeftArticle(props: SectionProp) {
  return (
    <section className="flex flex-col lg:flex-row gap-y-8 py-8 lg:py-20 lg:px-20 h-max lg:h-[40rem] bg-offBlue">
      <aside className="lg:basis-1/2 hidden__element left__aside">
        <ImageElement
          width={600}
          height={400}
          src={props?.imageSrc}
          alt={props?.imageAlt}
          className="mx-auto"
        />
      </aside>
      <article className="lg:basis-1/2 hidden__element left__article">
        <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center lg:text-left">
          {props?.title}
        </h2>
        <p className="text-xl md:text-2xl mb-6 text-justify">
          {props?.description?.[0]}
        </p>
        {props?.description?.[1] && (
          <p className="text-lg md:text-xl text-justify">
            {props?.description?.[1]}
          </p>
        )}
      </article>
    </section>
  );
}
