import { columns_display_name } from "@/app/utils/statics/vizStatics";
import { TopAsset } from "@/app/utils/types";
import React from "react";

// TableVis component definition
function TableVis({ data }: { data: TopAsset[] }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium border-light-text bg-body-bg">
                <tr>
                  {/* Render table header columns */}
                  {React.Children.toArray(
                    Object.keys(data?.[0] ?? {}).map((res) => (
                      <th scope="col" className="px-6 py-4">
                        {/* Display column names from columns_display_name based on the 'res' key */}
                        {columns_display_name[res]}
                      </th>
                    )),
                  )}
                </tr>
              </thead>
              <tbody>
                {/* Render table body rows */}
                {React.Children.toArray(
                  data?.map((rows) => (
                    <tr className="border-b border-light-text">
                      {/* Render table data cells */}
                      {React.Children.toArray(
                        Object.values(rows).map((cell) => (
                          <td className="whitespace-nowrap px-6 py-4">
                            {/* Display cell value */}
                            {cell}
                          </td>
                        )),
                      )}
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableVis;
