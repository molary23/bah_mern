import { HeadingProps } from "../util/Types";

export default function PageHeading(props: HeadingProps) {
  const { intro, imageUrL, cover = true } = props;

  return (
    <div className={imageUrL && `${imageUrL} bg-no-repeat bg-cover bg-center`}>
      <div
        className={`w-full h-[35em] px-1 sm:px-20 flex items-center ${
          cover
            ? "bg-gradient-to-r from-zinc-800 to-zinc-900/[.6]"
            : "bg-gradient-to-r from-zinc-700 to-zinc-900/[.6]"
        }`}
      >
        <div className="lg:max-w-3xl lg:pl-20 px-4 md:max-w-xl">
          <h1 className="lg:text-6xl text-xl md:text-2xl font-bold text-white page__heading">
            {intro.heading}
          </h1>
          <h2 className="lg:text-2xl text-md text-justify md:text-xl lg:font-bold text-white page__heading mt-2 lg:mt-6">
            {intro.subHeading}
          </h2>
        </div>
      </div>
    </div>
  );
}
