import { ChangeEvent, ChangeEventHandler, useState } from "react";
import PageHeading from "../layouts/PageHeading";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { RegularObject } from "../util/Types";
import InputElement from "../elements/InputElement";

const API = "url to submit page";

export default function Contact() {
  const [inputs, setInputs] = useState<RegularObject>({}),
    [errors, setErrors] = useState<RegularObject>({}),
    [loading, setLoading] = useState<boolean>(false),
    changeHandler = (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setInputs((values) => ({ ...values, [name]: value }));
    };
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
              <div>
                <GrMapLocation />
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/BAH+Engineering+Consultant/@6.7531317,3.2126805,17z/data=!3m1!4b1!4m6!3m5!1s0x103b97308126e639:0xa72b73099ff342d8!8m2!3d6.7531317!4d3.2152608!16s%2Fg%2F11h551fllx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <address>No 2, Akinremi Adekunle Crescent </address>
                  <address>off KM 51/52 Lagos-Abeokuta expressway,</address>
                  <address>Abule-Oke (Beside Aucco Filling station)</address>
                  <address>Ogun state, Nigeria</address>
                </a>
              </div>
            </div>
            <div className="flex justify-between sm:justify-center w-full sm:gap-4">
              <div>
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
              <div>
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
                  <InputElement
                    type="text"
                    name="name"
                    id="contact__name"
                    autoComplete="on"
                    value={inputs.name || ""}
                    onChange={changeHandler}
                    error={errors.name || ""}
                  />

                  <InputElement
                    type="email"
                    name="email"
                    id="contact__email"
                    autoComplete="off"
                    value={inputs.email || ""}
                    onChange={changeHandler}
                    error={errors.email || ""}
                  />

                  <InputElement
                    type="tel"
                    name="phone"
                    id="contact__phone"
                    autoComplete="on"
                    value={inputs.phone || ""}
                    onChange={changeHandler}
                    error={errors.phone || ""}
                  />

                  <InputElement
                    type="text"
                    name="subject"
                    id="contact__subject"
                    autoComplete="off"
                    value={inputs.subject || ""}
                    onChange={changeHandler}
                    error={errors.subject || ""}
                  />

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
                        name="message"
                        rows={3}
                        value={inputs.message || ""}
                        onChange={changeHandler}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1.5"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div>
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
