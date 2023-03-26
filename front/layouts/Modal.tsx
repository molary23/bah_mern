import { useState } from "react";
import { IoWarningOutline, IoCheckmark } from "react-icons/io5";
import { RegularObject } from "../util/Types";

export default function Modal(props: RegularObject) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex-col justify-center">
                <div
                  className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  ${
                    props?.status ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {props?.status ? <IoCheckmark /> : <IoWarningOutline />}
                </div>
                <div className="mt-6 text-center">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {props?.status ? "Message Sent" : "Error Sending Message"}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {props?.status
                        ? "Thank you for contacting us. We will try to respond as soon as possible."
                        : "We are sorry but your message was not sent. Please try again after a few minutes"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 w-full mx-auto">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 text-white"
                onClick={() => props?.onClick(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
