import React from "react";
import { SubIntro } from "../util/Types";

export default function PageSubIntro(props: SubIntro) {
  return (
    <section className="h-max py-8 sm:h-72 sm:px-24 sm:py-24">
      <h3 className="text-xl sm:text-2xl text-center sm:font-bold mb-8">
        {props?.heading}
      </h3>
    </section>
  );
}
