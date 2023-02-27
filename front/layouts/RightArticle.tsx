import ImageElement from "../elements/ImageElement";
import { SectionProp } from "../util/Types";

const RightArticle = (props: SectionProp) => {
  return (
    <section className="sm:flex sm:py-20 sm:px-20 h-[40rem] bg-red-900">
      <article className="sm:basis-1/2 hidden__element right__aside">
        <h2 className="text-3xl font-bold mb-8">{props?.title}</h2>
        <p className="text-2xl mb-6 text-justify">{props?.description?.[0]}</p>
        <p className="text-xl text-justify">{props?.description?.[1]}</p>
      </article>
      <aside className="sm:basis-1/2 hidden__element right__article">
        <ImageElement
          width={600}
          height={400}
          src={props?.imageSrc}
          alt="alt"
          className="mx-auto"
        />
      </aside>
    </section>
  );
};

export default RightArticle;
