import ImageElement from "../elements/ImageElement";
import { SectionProp } from "../util/Types";

export default function LeftArticle(props: SectionProp) {
  return (
    <section className="flex flex-col sm:flex-row gap-y-4 py-8 sm:py-20 sm:px-20 h-max sm:h-[40rem] bg-red-900">
      <aside className="sm:basis-1/2 hidden__element left__aside">
        <ImageElement
          width={600}
          height={400}
          src={props?.imageSrc}
          alt="alt"
          className="mx-auto"
        />
      </aside>
      <article className="sm:basis-1/2 hidden__element left__article">
        <h2 className="text-3xl font-bold mb-4 sm:mb-8 text-center sm:text-left">
          {props?.title}
        </h2>
        <p className="text-2xl mb-6 text-justify">{props?.description?.[0]}</p>
        {props?.description?.[1] && (
          <p className="text-xl text-justify">{props?.description?.[1]}</p>
        )}
      </article>
    </section>
  );
}
