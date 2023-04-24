import Image from "next/image";
import { TestimonyProps } from "../util/Types";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonyElement(props: TestimonyProps) {
  const { image, testifier, testimony } = props;
  return (
    <div className="sm:basis-1/3">
      <div className="w-10/12 mx-auto">
        <div className="mb-4">
          <p className="mb-4 text-justify">
            <FaQuoteLeft />
            <span>{testimony}</span>
          </p>
        </div>
        <div className="flex-col">
          <div className="mb-4">
            <span className="">- {testifier}</span>
          </div>
          <div className="">
            <Image
              className="h-24 w-24 rounded-full"
              src={image}
              width={"256"}
              height={"256"}
              alt={`testimonial`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
