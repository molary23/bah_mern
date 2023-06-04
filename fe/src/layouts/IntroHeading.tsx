import React from "react";
import { IntroProps } from "../util/Types";

const IntroHeading = (props: IntroProps) => {
  return (
    <h2 className="text-center text-4xl font-bold home__page--intro pb-10">
      {props?.heading}
    </h2>
  );
};

export default IntroHeading;
