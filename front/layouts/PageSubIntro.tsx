import React from "react";
import { SubIntro } from "../util/Types";

export default function PageSubIntro(props: SubIntro) {
  return (
    <section className="h-72 sm:px-24 py-24">
      <h3 className="text-2xl text-center font-bold mb-8">{props?.heading}</h3>
    </section>
  );
}
