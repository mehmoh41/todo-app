import React from "react";

export default function InProgress() {
  return (
    <div className="bg-white p-3 border border-gray-100 my-2">
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="py-2">
          <h2 className="text-md capitalize">todo title</h2>
          <span className="inline-block my-2 text-sm bg-red-200 rounded-xl px-2 py-1 capitalize">
            category todo
          </span>
        </div>
        <div>
          <span>A</span>
          <span>B</span>
        </div>
      </div>
      <footer className="flex items-center justify-between mt-2 text-gray-500">
        <div className="flex items-center">
          <svg
            width="15px"
            height="15px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -400.000000)"
                fill="#000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M141.9,243 C141.9,242.448 141.4296,242 140.85,242 L126.15,242 C125.5704,242 125.1,242.448 125.1,243 L125.1,257 C125.1,257.552 125.5704,258 126.15,258 L140.85,258 C141.4296,258 141.9,257.552 141.9,257 L141.9,243 Z M144,242 L144,258 C144,259.105 143.06025,260 141.9,260 L125.1,260 C123.93975,260 123,259.105 123,258 L123,242 C123,240.895 123.93975,240 125.1,240 L141.9,240 C143.06025,240 144,240.895 144,242 L144,242 Z M137.72205,247.015 C138.1326,247.405 138.1326,248.039 137.72205,248.429 L133.63965,252.317 C133.0233,252.903 132.0258,252.903 131.40945,252.317 L129.5541,250.55 C129.1446,250.16 129.1446,249.527 129.5541,249.136 C129.96465,248.746 130.6293,248.746 131.0388,249.136 L131.7801,249.842 C132.19065,250.233 132.8574,250.233 133.269,249.842 L136.23735,247.015 C136.64685,246.624 137.31255,246.624 137.72205,247.015 L137.72205,247.015 Z"
                    id="done-[#1477]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="text-sm text-gray-500 ml-2 mt-1 font-thin">4/5</span>
        </div>
        <div className="flex items-center">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
            <rect
              x="10.5"
              y="12"
              width="3"
              height="3"
              rx="0.5"
              fill="#000000"
            />
            <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000" />
          </svg>
          <span className="text-[12px] md:text-md ml-2 mt-1">14-07-2023</span>
        </div>
      </footer>
    </div>
  );
}
