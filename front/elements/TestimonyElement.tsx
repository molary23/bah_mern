import Image from "next/image";
import { TestimonyProps } from "../util/Types";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonyElement(props: TestimonyProps) {
  const { image, testifier, testimony } = props;
  return (
    <div className="w-10/12 mx-auto">
      <div className="mb-4">
        <div className="mb-4 text-justify">
          <FaQuoteLeft />
          <p>{testimony}</p>
        </div>
      </div>
      <div className="testifier flex flex-col items-end">
        <div className="mb-4 ">
          <p>- {testifier}</p>
        </div>
        <div>
          <Image
            className="h-24 w-24 rounded-full"
            src={image}
            width={256}
            height={256}
            alt={`testimonial`}
          />
        </div>
      </div>
    </div>
  );
}
