import React from "react";
import ServiceCard from "./ServiceCard";
import { FaGavel, FaFileAlt, FaBalanceScale } from "react-icons/fa";

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto bg-light text-first  md:px-24 lg:px-8 lg:py-20">
      <div className="text-first text-4xl font-semibold items-center text-center pb-12">
        <h1>Çalışma Alanlarımız</h1>
      </div>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              TİCARİ VE KURUMSAL DANIŞMANLIK
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              İCRA VE İFLAS YÖNETİMİ
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">İŞ HUKUKU</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              TEKNOLOJİ VE STARTUP HUKUKU
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">YATIRIM HUKUKU</h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">ŞİRKETLER HUKUKU</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              ULUSLARARASI TİCARET VE TAHKİM
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">SİGORTA HUKUKU</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">KİRA HUKUKU</h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
