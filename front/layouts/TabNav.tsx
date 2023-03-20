import { useState } from "react";
import LeftArticle from "./LeftArticle";
import { sunset } from "../assets";
import ImageElement from "../elements/ImageElement";
import { TabProp } from "../util/Types";
export default function TabNav(props: TabProp) {
  const ACTIVE_TAB =
      "border-blue-600 active dark:text-blue-500 dark:border-blue-500 text-blue-600 border-b-2",
    INACTIVE_TAB =
      "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
    [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-8 sm:p-24">
      <h2 className="text-3xl font-bold mb-8 text-center">{props?.title}</h2>
      <p className="text-xl sm:text-2xl text-center sm:font-bold mb-8">
        {props?.description?.[0]}
      </p>
      {props?.description?.[1] && (
        <p className="sm:text-xl text-center sm:font-bold mb-8">
          {props?.description?.[1]}
        </p>
      )}
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex flex-fill place-content-center">
        <ul className="flex flex-wrap">
          {props?.pages.map((tab, index) => {
            return (
              <li className="mr-2">
                <button
                  className={`"inline-block p-4 rounded-t-lg " ${
                    activeTab === index ? ACTIVE_TAB : INACTIVE_TAB
                  }`}
                  aria-current={activeTab === index && "page"}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tab__content flex flex-col sm-flex-row gap-y-4 flex sm:py-20 sm:px-20 h-[40rem] bg-blue-900 py-8">
        <aside className="sm:basis-1/2 left__aside">
          <ImageElement
            width={600}
            height={400}
            src={props?.content?.[activeTab]?.imageSrc}
            alt="alt"
            className="mx-auto"
          />
        </aside>
        <article className="sm:basis-1/2 left__article">
          <h2 className="text-3xl font-bold mb-4 sm:mb-8 sm:text-left text-center">{`${props?.pages?.[activeTab]} ${props?.title}`}</h2>
          <p className="text-2xl mb-3 sm:mb-6 text-justify">
            {props?.content?.[activeTab]?.text?.[0]}
          </p>
          {props?.content?.[activeTab]?.text?.[1] && (
            <p className="text-xl text-justify">
              {props?.content?.[activeTab]?.text?.[1]}
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
