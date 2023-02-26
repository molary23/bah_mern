import PageIntro from "./PageIntro";
import { HeadingProps } from "../util/Types";

const PageHeading = (props: HeadingProps) => {
  const { intro, imageUrL } = props;

  return (
    <div className={`${imageUrL} bg-no-repeat bg-cover bg-center`}>
      <div className="w-full bg-gradient-to-r from-cyan-500/[.08] to-blue-500  px-12 py-12 lg:h-max sm:h-96  sm:px-48 sm:py-48">
        <PageIntro heading={intro.heading} subHeading={intro.subHeading} />
      </div>
    </div>
  );
};

export default PageHeading;
