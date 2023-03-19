import PageHeading from "../layouts/PageHeading";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiMailSendLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
export default function Contact() {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Contact Us",
          subHeading: `We are only a Buzz away`,
        }}
        imageUrL=""
      />

      <div className="w-full h-max my-4">
        <div className="fast__contact sm:w-10/12 mx-auto">
          <div className="flex flex-col gap-y-8 sm:flex-row sm:h-48 justify-between py-8 bg-red-500 fast__contact--box px-4">
            <div className="flex justify-between sm:justify-center w-full sm:gap-4">
              <div className="">
                <HiOutlineDevicePhoneMobile />
              </div>
              <div>
                <ul>
                  <li>
                    <a href="tel:+2348029409798">+234 (0) 8029409798</a>
                  </li>
                  <li>
                    <a href="tel:+2348052429800">+234 (0) 8052429800</a>
                  </li>
                  <li>
                    <a href="tel:+2348032448088">+234 (0) 8032448088</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between sm:justify-center w-full gap-4">
              <div className="">
                <RiMailSendLine />
              </div>
              <div>
                <ul>
                  <li>
                    <a href="mailto:bahengineeringconsultant@gmail.com">
                      bahengineeringconsultant@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:bahengineeringconsultant@yahoo.com">
                      bahengineeringconsultant@yahoo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <form className="contact__form-form w-11/12 mx-auto my-8">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contact__name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="contact__name"
                      id="contact__name"
                      autoComplete="on"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contact__email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="contact__email"
                      id="contact__email"
                      autoComplete="off"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contact__phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="contact__phone"
                      id="contact__phone"
                      autoComplete="on"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contact__subject"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="contact__subject"
                      id="contact__subject"
                      autoComplete="off"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="contact__message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="contact__message"
                        name="contact__message"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1.5"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <span className="mr-2">Submit</span>
                      <FiSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
