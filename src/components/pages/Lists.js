import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Lists() {
  const [listActive, setListActive] = useState(false);
  const [gridActive, setGridActive] = useState(true);
  const { t } = useTranslation();

  function activeGrid() {
    console.log("active grid");
    setGridActive(true);
    setListActive(false);
    console.log(listActive, gridActive);
  }
  function activeList() {
    console.log("active list");
    setGridActive(false);
    setListActive(true);
    console.log(listActive, gridActive);
  }
  return (
    <section className="max-w-screen-xl mx-auto my-8">
      <section className="grid gap-8 grid-cols-12">
        <section className="col-span-12 mx-4 md:col-span-8 md:mx-0 lg:col-span-9">
          <header className="flex justify-between items-center">
            <h2 className="text-2xl capitalize tracking-wide">
              {t("headerTitle")}
            </h2>
            <div className="flex items-center">
              <svg
                width="32px"
                className="mx-4"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8787 4.87866H3.87872V6.87866H15.8787V4.87866Z"
                  fill="#000000"
                />
                <path
                  d="M15.8787 8.87866H3.87872V10.8787H15.8787V8.87866Z"
                  fill="#000000"
                />
                <path
                  d="M3.87872 12.8787H11.8787V14.8787H3.87872V12.8787Z"
                  fill="#000000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7574 12.7573C12.5858 13.9289 12.5858 15.8284 13.7574 17C14.681 17.9236 16.0571 18.1191 17.1722 17.5864L18.7071 19.1213L20.1213 17.7071L18.5864 16.1722C19.1191 15.057 18.9236 13.681 18 12.7573C16.8284 11.5858 14.9289 11.5858 13.7574 12.7573ZM15.1716 15.5858C15.5621 15.9763 16.1953 15.9763 16.5858 15.5858C16.9763 15.1952 16.9763 14.5621 16.5858 14.1716C16.1953 13.781 15.5621 13.781 15.1716 14.1716C14.7811 14.5621 14.7811 15.1952 15.1716 15.5858Z"
                  fill="#000000"
                />
              </svg>
              <svg
                width="32px"
                height="32px"
                className={`ml-24 mr-2 ${
                  gridActive ? "bg-indigo-600 rounded-lg p-1" : ""
                }`}
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={activeGrid}
              >
                <title>Grid</title>
                <g
                  id="Grid"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    id="Container"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <rect
                    id="shape-1"
                    stroke={`${gridActive ? "#fff" : "#1C274C"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    x="4"
                    y="4"
                    width="6"
                    height="6"
                    rx="1.5"
                  ></rect>
                  <rect
                    id="shape-2"
                    stroke={`${gridActive ? "#fff" : "#1C274C"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    x="4"
                    y="14"
                    width="6"
                    height="6"
                    rx="1.5"
                  ></rect>
                  <rect
                    id="shape-3"
                    stroke={`${gridActive ? "#fff" : "#1C274C"}`}
                    strokWidth="2"
                    strokeLinecap="round"
                    x="14"
                    y="4"
                    width="6"
                    height="6"
                    rx="1.5"
                  ></rect>
                  <rect
                    id="shape-4"
                    stroke={`${gridActive ? "#fff" : "#1C274C"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    x="14"
                    y="14"
                    width="6"
                    height="6"
                    rx="1.5"
                  ></rect>
                </g>
              </svg>
              <svg
                width="32px"
                height="32px"
                className={`ml-2 ${
                  listActive ? "bg-indigo-600 rounded-lg p-1" : ""
                }`}
                viewBox="0 0 24 24"
                onClick={activeList}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.5L3.21429 7L7.5 3"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12.5L3.21429 14L7.5 10"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 19.5L3.21429 21L7.5 17"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12H17M12 12H13.5"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 19H17M20.5 19H22"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 5L12 5"
                  stroke={`${listActive ? "#fff" : "#1C274C"}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </header>
          <section className="grid grid-cols-12">
            <div className={`${gridActive ? "col-span-4" : "col-span-12"}`}>
              {t("todo")}
            </div>
            <div className={`${gridActive ? "col-span-4" : "col-span-12"}`}>
              {t("inProgress")}
            </div>
            <div className={`${gridActive ? "col-span-4" : "col-span-12"}`}>
              {t("done")}
            </div>
          </section>
        </section>
        <aside className="col-span-12 mx-4 md:col-span-4 md:mx-0 lg:col-span-3">
          this is aside
        </aside>
      </section>
    </section>
  );
}
