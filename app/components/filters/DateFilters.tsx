import { date_filters } from "@/app/utils/statics/filters";
import React from "react";
import DefaultCard from "../cards/DefaultCard";
import { DateFilter, DateFilterProps } from "@/app/utils/types";
import Link from "next/link";

//filter component
function DateFilters({ activeFilter }: DateFilterProps) {
  return (
    <div className="flex gap-5 flex-wrap w-full mb-5 lg:flex-nowrap">
      {React.Children.toArray(
        date_filters.map((res) => {
          // if no filter applied
          const isAllTypeFilter = res === 0;

          return (
            <Link
              className="flex flex-1"
              href={isAllTypeFilter ? "/" : `/?filter=${res}`}
            >
              <DefaultCard
                style={{ padding: "10px 20px !important", cursor: "pointer" }}
              >
                <div className=" flex justify-between items-center text-sm">
                  <div className=" whitespace-nowrap">
                    {isAllTypeFilter ? "all" : `last ${res} days`}
                  </div>
                  <div
                    className={`p-1.5 rounded-full outline-2 border-2 ${
                      res === activeFilter ? "bg-primary" : ""
                    }`}
                  ></div>
                </div>
              </DefaultCard>
            </Link>
          );
        }),
      )}
    </div>
  );
}

export default DateFilters;
