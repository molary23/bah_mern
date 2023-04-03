import React from "react";
import { SubIntro } from "../util/Types";

export default function PageSubIntro(props: SubIntro) {
  return (
    <section className="h-max py-8 lg:px-24 lg:py-24">
      <h3 className="text-xl md:text-2xl text-center lg:font-bold mb-8">
        {props?.heading}
      </h3>
    </section>
  );
}
