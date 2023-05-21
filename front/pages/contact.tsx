import { ChangeEvent, FormEvent, useState } from "react";
import PageHeading from "../layouts/PageHeading";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbMap2 } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { RegularObject } from "../util/Types";
import InputElement from "../elements/InputElement";
import Modal from "../layouts/Modal";
import { SITE_CONSTANTS } from "../util/constants";
import { BiLoader } from "react-icons/bi";

import useInputValidate from "../hooks/useInputValidate";

const API = `${SITE_CONSTANTS.url}outbox/send.php`;

export default function Contact() {
  const [inputs, setInputs] = useState<RegularObject>({}),
    [errors, setErrors] = useState<RegularObject>({}),
    [loading, setLoading] = useState<boolean>(false),
    [modal, setModal] = useState<boolean>(false),
    [status, setStatus] = useState<boolean>(false),
    changeHandler = (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setInputs((values) => ({ ...values, [name]: value }));
    },
    modalHandler = (close: boolean) => {
      setModal(close);
    },
    submitHandler = async (e: FormEvent) => {
      e.preventDefault();

      if (useInputValidate(inputs, "name")) {
        setErrors({
          name: "Please enter a valid name",
        });
      } else if (useInputValidate(inputs, "email")) {
        setErrors({
          email: "Please enter a valid email",
        });
      } else if (useInputValidate(inputs, "phone") || isNaN(inputs.phone)) {
        setErrors({
          phone: "Please enter a valid phone",
        });
      } else if (useInputValidate(inputs, "subject")) {
        setErrors({
          subject: "Please enter a valid subject",
        });
      } else if (useInputValidate(inputs, "message")) {
        setErrors({
          message: "Please enter a valid message",
        });
      } else {
        setLoading(true);
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...inputs,
              sendKey: process.env.REACT_APP_SECURE_POST_KEY,
            }),
          };
          const response = await fetch(API, requestOptions);
          const data = await response.json();
          if (data === 1) {
            setInputs({});
            setStatus(true);
          } else {
            setStatus(false);
          }
        } catch (error) {
          setStatus(false);
        } finally {
          setLoading(false);
          setModal(true);
        }
      }
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

      <article className="w-full h-max my-4 theme__section">
        <div className="fast__contact lg:w-10/12 mx-auto">
          <div className="flex flex-col sm:flex-col gap-y-8 lg:flex-row lg:h-48 justify-between py-8 fast__contact--box px-4">
            <div className="flex justify-evenly lg:justify-center w-full lg:gap-4">
              <div className="flex w-[30%] lg:basis-1/3 lg:place-content-end">
                <TbMap2 />
              </div>
              <div className="flex w-[70%] lg:basis-2/3 place-content-start">
                <a
                  href="https://www.google.com/maps/place/BAH+Engineering+Consultant/@6.7531317,3.2126805,17z/data=!3m1!4b1!4m6!3m5!1s0x103b97308126e639:0xa72b73099ff342d8!8m2!3d6.7531317!4d3.2152608!16s%2Fg%2F11h551fllx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <address>No 2, Akinremi Adekunle Crescent </address>
                  <address>off KM 51/52 Lagos-Abeokuta expressway,</address>
                  <address>Abule-Oke (Beside Aucco Filling station)</address>
                  <address>Ogun state, Nigeria</address>
                </a>
              </div>
            </div>
            <div className="flex justify-evenly lg:justify-center w-full lg:gap-4">
              <div className="flex w-[30%] lg:basis-1/3 lg:place-content-end">
                <HiOutlineDevicePhoneMobile />
              </div>
              <div className="flex w-[70%] lg:basis-2/3 place-content-start">
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
            <div className="flex justify-evenly lg:justify-center w-full gap-4">
              <div className="flex w-[30%] lg:basis-1/3 lg:place-content-end">
                <RiMailSendLine />
              </div>
              <div className="flex w-[70%] lg:basis-2/3 place-content-start">
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
          <form
            className="contact__form-form w-11/12 mx-auto my-8"
            onSubmit={submitHandler}
          >
            <div className="overflow-hidden shadow lg:rounded-md">
              <div className="bg-white px-4 py-5 lg:p-6 theme__section contact__box">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 lg:col-span-3">
                    <InputElement
                      type="text"
                      name="name"
                      id="contact__name"
                      autoComplete="on"
                      value={inputs.name || ""}
                      onChange={changeHandler}
                      error={errors.name || ""}
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <InputElement
                      type="email"
                      name="email"
                      id="contact__email"
                      autoComplete="off"
                      value={inputs.email || ""}
                      onChange={changeHandler}
                      error={errors.email || ""}
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <InputElement
                      type="tel"
                      name="phone"
                      id="contact__phone"
                      autoComplete="on"
                      value={inputs.phone || ""}
                      onChange={changeHandler}
                      error={errors.phone || ""}
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <InputElement
                      type="text"
                      name="subject"
                      id="contact__subject"
                      autoComplete="off"
                      value={inputs.subject || ""}
                      onChange={changeHandler}
                      error={errors.subject || ""}
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
                        name="message"
                        rows={3}
                        value={inputs.message || ""}
                        onChange={changeHandler}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary lg:text-sm lg:leading-6 p-2"
                        placeholder="Enter your Message"
                        aria-label="Enter your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-span-6 lg:col-span-3">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-36 w-full btn__submit"
                    >
                      <span className="mr-2">Submit</span>
                      {loading ? (
                        <FiSend />
                      ) : (
                        <span className="loader">
                          <BiLoader />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </article>
      {modal && <Modal modal={modal} status={status} onClick={modalHandler} />}
    </section>
  );
}
