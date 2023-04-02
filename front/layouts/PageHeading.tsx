import { HeadingProps } from "../util/Types";

export default function PageHeading(props: HeadingProps) {
  const { intro, imageUrL } = props;

  return (
    <div className={imageUrL && `${imageUrL} bg-no-repeat bg-cover bg-center`}>
      <div
        className={`w-full py-36 px-12 h-max lg:px-48 lg:py-48 ${
          imageUrL
            ? "bg-gradient-to-r from-cyan-500/[.08] to-blue-500"
            : "bg-blue-500"
        }`}
      >
        <div>
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
