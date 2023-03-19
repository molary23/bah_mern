import { HeadingProps } from "../util/Types";

const PageHeading = (props: HeadingProps) => {
  const { intro, imageUrL } = props;

  return (
    <div className={imageUrL && `${imageUrL} bg-no-repeat bg-cover bg-center`}>
      <div
        className={`w-full px-12 py-12 lg:h-max sm:h-96  sm:px-48 sm:py-48 ${
          imageUrL
            ? "bg-gradient-to-r from-cyan-500/[.08] to-blue-500"
            : "bg-blue-500"
        }`}
      >
        <div>
          <h1 className="sm:text-6xl text-3xl font-bold text-white page__heading">
            {intro.heading}
          </h1>
          <h2 className="sm:text-2xl text-xl sm:font-bold text-white page__heading mt-1 sm:mt-6">
            {intro.subHeading}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
