// Import required modules and types
import { viz_statics } from "@/app/utils/statics/vizStatics"; // Importing visualization static data
import { ChartData, DashboardData, TopAssetTableData } from "@/app/utils/types"; // Importing types used in the component
import Chart from "./LineChart"; // Importing the LineChart component
import React from "react"; // Importing React
import DefaultCard from "../cards/DefaultCard"; // Importing the DefaultCard component
import TableVis from "./TableVis"; // Importing the TableVis component

// Define the Visualization component
function Visualization({ data }: { data: DashboardData }) {
  return (
    // Create a grid with one column for small screens and two columns for large screens with a gap of 5 units
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        // Loop through the data array and render visualization cards
        React.Children.toArray(
          data.data.map((_item, index, arr) => {
            return (
              // Rendering a DefaultCard for each item in the data array
              <DefaultCard className="!p-0 overflow-hidden">
                {/* Display the title for each visualization */}
                <div className="border-b border-b-light-text p-5 font-medium">
                  {viz_statics[_item.key].title}
                </div>
                <div className="p-5">
                  {/* Conditionally render a TableVis or a Chart based on the item key */}
                  {_item.key === "top_assets" ? (
                    <TableVis
                      data={(_item as TopAssetTableData)["table_data"]}
                    />
                  ) : (
                    <Chart data={(_item as ChartData)["chart_data"]} />
                  )}
                </div>
              </DefaultCard>
            );
          }),
        )
      }
    </div>
  );
}

export default Visualization; // Export the Visualization component
