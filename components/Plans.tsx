import { plansList } from "@/lib/productivity-data";
import React from "react";
import { Button } from "./ui/button";

const Plans = () => {
  let plansIndex = 2;
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 py-5">
      <div className="px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-6">
        {plansList?.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-md ${
              index === plansIndex
                ? "border-2 border-[#00c7e5] bg-gray-200 dark:bg-gray-900"
                : "border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-900"
            }`}
          >
            <h1 className="text-sm font-semibold uppercase">{item.planName}</h1>
            <p className="h-28 mt-4">
              $<span className="text-5xl">{item.price}</span> USD
            </p>
            <p className="h-48">{item.desc}</p>
            <Button
              className={`border border-gray-900 dark:border-white bg-blue-500 mb-5 ${
                index === plansIndex
                  ? "bg-blue-500 dark:bg-gray-700 text-white"
                  : "bg-blue-500 dark:bg-gray-900"
              }`}
            >
              {item.button}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
