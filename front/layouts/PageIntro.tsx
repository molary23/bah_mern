import { IntroProps } from "../util/Types";

const PageIntro = (props: IntroProps) => {
  return (
    <div>
      <h1 className="sm:text-7xl text-3xl font-bold text-white page__heading">
        {props.heading}
      </h1>
      <h2 className="sm:text-2xl text-xl font-bold text-white page__heading mt-6">
        {props.subHeading}
      </h2>
    </div>
  );
};

export default PageIntro;
