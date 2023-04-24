import Image from "next/image";
import { sunset } from "../../assets";
import { RegularObject } from "../../util/Types";

export default function TopSection(props: RegularObject) {
  return (
    <section className="h-[50em] bg-white bg-no-repeat bg-cover bg-center bg-[url(../assets/images/sunset.jpeg)]">
      <article className="h-[50em] bg-gradient-to-r from-zinc-500/[.3] to-zinc-800">
        <div className="max-w-3xl py-12 lg:py-60 lg:pl-20 px-4 pt-60">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-6xl text-white">
            BAH Engineering Consultant
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            BAH Engineering Consultant is a globally-focused company that seeks
            competitive advantage through quality, price peculiarity and value
            added products and services. The company was incorporated in 1990 as
            an enterprise in Lagos and later moved to Kano in the year 1996 to
            oversee the sales and services of automotive product.
          </p>
          <div className="mt-5 lg:mt-10 gap-x-6">
            <a
              href="/about"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
