import React from "react";
import DefaultCard from "../cards/DefaultCard";
import ShareIcon from "../icons/ShareIcon";
import {
  AggregatesProps,
  ChartData,
  TopAssetTableData,
} from "@/app/utils/types";
import { viz_statics } from "@/app/utils/statics/vizStatics";
import { convertSecondsToHrsMinsStr } from "@/app/utils/helpers/lastNDaysData";
import Icons from "../icons/Icons";

// Aggregates component definition
function Aggregates({ data }: AggregatesProps) {
  return (
    // Render a DefaultCard component with a grid layout
    <DefaultCard>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
          // Convert the data to an array, filter and map the items
          React.Children.toArray(
            data.data
              .filter((data) => viz_statics[data.key].aggregagte)
              .map((_item, index, arr) => {
                // Call the aggregateHelpers function to get some useful information
                const { vizObj, isThirdElement, isLastElement, timeSum } =
                  aggregateHelpers(_item, index, arr);
                return (
                  // Render each grid item with the relevant information
                  <div
                    className={`${
                      isThirdElement || isLastElement
                        ? ""
                        : "lg:border-r lg:border-r-light-text lg:pr-8 lg:mr-8 lg:border-b-0 lg:pb-0 lg:mb-0 border-b border-b-light-text pb-6 mb-6"
                    } flex justify-between`}
                  >
                    <div>
                      {/* Display the title and timeSum */}
                      <div className="text-xs font-medium text-light-text uppercase">
                        {vizObj.title}
                      </div>
                      <div className=" mt-2 text-2xl font-medium">
                        {convertSecondsToHrsMinsStr(timeSum)}
                      </div>
                    </div>
                    {/* Display the icon using the Icons component */}
                    <div>
                      <Icons icon={vizObj.icon} />
                    </div>
                  </div>
                );
              }),
          )
        }
      </div>
    </DefaultCard>
  );
}

export default Aggregates;

// Helper function to calculate some useful values for rendering
function aggregateHelpers(
  _item: TopAssetTableData | ChartData,
  index: number,
  arr: (TopAssetTableData | ChartData)[],
) {
  // Get the visualization object from viz_statics
  const vizObj = viz_statics[_item.key];
  // Check if the item is the third element or the last element in the array
  const isThirdElement =
    (index % 3 === 0 && index > 0) || index === arr.length - 1;
  const isLastElement = index === arr.length - 1;

  // Calculate the sum of time differences based on the 'chart_data' property
  let timeSum = (_item as ChartData)?.["chart_data"].length
    ? (_item as ChartData)?.["chart_data"].reduce((val, _curr) => ({
        timestamp: _curr.timestamp + val.timestamp,
        units: _curr.units + val.units,
      }))?.units
    : 0;

  return { vizObj, isThirdElement, isLastElement, timeSum };
}
