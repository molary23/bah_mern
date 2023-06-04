import ImageElement from "../elements/ImageElement";
import { SectionProp } from "../util/Types";

export default function RightArticle(props: SectionProp) {
  return (
    <section className="flex flex-col lg:flex-row gap-y-8 lg:py-20 lg:px-20 h-max py-8 px-4 lg:h-[40rem] md:gap-x-2 theme__section">
      <article className="lg:basis-1/2 hidden__element right__aside">
        <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center lg:text-left">
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
      </article>
      <aside className="lg:basis-1/2 hidden__element right__article">
        <ImageElement
          width={600}
          height={400}
          src={props?.imageSrc}
          alt={props?.imageAlt!}
          className="mx-auto"
        />
      </aside>
    </section>
  );
}
