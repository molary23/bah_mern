import Image from "next/image";
import { sunset } from "../../assets";
import { RegularObject } from "../../util/Types";

export default function TopSection(props: RegularObject) {
  return (
    <section className="h-max bg-white">
      <div className="flex justify-between">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 lg:py-56">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                BAH Engineering Consultant
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                BAH Engineering Consultant is a globally-focused company that
                seeks competitive advantage through quality, price peculiarity
                and value added products and services.
              </p>
              <div className="mt-5 lg:mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/about"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-2xl py-12 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <Image
                className=""
                src={sunset}
                width={"800"}
                height={"400"}
                alt={`testimonial`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
