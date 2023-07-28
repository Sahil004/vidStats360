import { getLastNDaysData } from "../helpers/lastNDaysData";
import { DashboardData, DateFilter, ChartData } from "../types";

// Function to get filtered dashboard data from JSON based on DateFilter
export function getDashboardDataFromJSON(filter: DateFilter): DashboardData {
  // If no filter is provided, return the entire dashboard_data as-is
  if (!filter) {
    return dashboard_data;
  }

  // If a filter is provided, apply the filter to each chart_data in the dashboard_data
  return {
    filter,
    data: dashboard_data.data.map((res) => {
      // Check if the current data element has 'chart_data' property
      if (Object.hasOwnProperty.call(res, "chart_data")) {
        // If it has 'chart_data', apply the getLastNDaysData function to filter the data
        return {
          ...res,
          chart_data: getLastNDaysData(
            (res as ChartData)?.["chart_data"],
            filter,
          ),
        };
      }
      // If the data element doesn't have 'chart_data', return it as is
      return res;
    }),
  };
}

// Sample dashboard data
export const dashboard_data: DashboardData = {
  filter: 0,
  data: [
    {
      key: "bandwidth_consumption",
      chart_data: [
        // Sample chart_data for the 'bandwidth_consumption' key
        // Each object in the array represents a data point with 'units' and 'timestamp'
        // The array is sorted based on the 'timestamp' in ascending order
        {
          units: 110673,
          timestamp: 1659312000,
        },
        {
          units: 132099,
          timestamp: 1659398400,
        },
        {
          units: 105633,
          timestamp: 1659484800,
        },
        {
          units: 143695,
          timestamp: 1659571200,
        },
        {
          units: 100634,
          timestamp: 1659657600,
        },
        {
          units: 64226,
          timestamp: 1659744000,
        },
        {
          units: 60486,
          timestamp: 1659830400,
        },
        {
          units: 88617,
          timestamp: 1659916800,
        },
        {
          units: 194388,
          timestamp: 1660003200,
        },
        {
          units: 99924,
          timestamp: 1660089600,
        },
        {
          units: 97189,
          timestamp: 1660176000,
        },
        {
          units: 63740,
          timestamp: 1660262400,
        },
        {
          units: 70804,
          timestamp: 1660348800,
        },
        {
          units: 30257,
          timestamp: 1660435200,
        },
        {
          units: 10608,
          timestamp: 1660521600,
        },
      ].sort((a, b) => a.timestamp - b.timestamp),
    },
    {
      key: "asset_duration",
      chart_data: [
        // Sample chart_data for the 'asset_duration' key
        {
          units: 29283.091339111328,
          timestamp: 1659312000,
        },
        {
          units: 27184.47883605957,
          timestamp: 1659398400,
        },
        {
          units: 32268.722230911255,
          timestamp: 1659484800,
        },
        {
          units: 32700.589782714844,
          timestamp: 1659571200,
        },
        {
          units: 29202.890174865723,
          timestamp: 1659657600,
        },
        {
          units: 26756.180755615234,
          timestamp: 1659744000,
        },
        {
          units: 25493.252796173096,
          timestamp: 1659830400,
        },
        {
          units: 26859.535705566406,
          timestamp: 1659916800,
        },
        {
          units: 31422.241542816162,
          timestamp: 1660003200,
        },
        {
          units: 29561.047088623047,
          timestamp: 1660089600,
        },
        {
          units: 29529.514358520508,
          timestamp: 1660176000,
        },
        {
          units: 26237.093227386475,
          timestamp: 1660262400,
        },
        {
          units: 25814.26639175415,
          timestamp: 1660348800,
        },
        {
          units: 22372.435028076172,
          timestamp: 1660435200,
        },
        {
          units: 9907.940124511719,
          timestamp: 1660521600,
        },
      ].sort((a, b) => a.timestamp - b.timestamp),
    },
    {
      key: "storage_unit",
      chart_data: [
        // Sample chart_data for the 'storage_unit' key
        {
          units: 4648747.565861702,
          timestamp: 1659312000,
        },
        {
          units: 4675912.315861702,
          timestamp: 1659398400,
        },
        {
          units: 4708229.565861702,
          timestamp: 1659484800,
        },
        {
          units: 4740856.565861702,
          timestamp: 1659571200,
        },
        {
          units: 4770078.315861702,
          timestamp: 1659657600,
        },
        {
          units: 4796815.565861702,
          timestamp: 1659744000,
        },
        {
          units: 4822308.815861702,
          timestamp: 1659830400,
        },
        {
          units: 4849275.565861702,
          timestamp: 1659916800,
        },
        {
          units: 4880612.815861702,
          timestamp: 1660003200,
        },
        {
          units: 4910257.565861702,
          timestamp: 1660089600,
        },
        {
          units: 4939711.065861702,
          timestamp: 1660176000,
        },
        {
          units: 4965967.815861702,
          timestamp: 1660262400,
        },
        {
          units: 4991922.065861702,
          timestamp: 1660348800,
        },
        {
          units: 5014147.565861702,
          timestamp: 1660435200,
        },
        {
          units: 5024355.065861702,
          timestamp: 1660521600,
        },
      ].sort((a, b) => a.timestamp - b.timestamp),
    },
    {
      key: "top_assets",
      table_data: [
        // Sample table_data for the 'top_assets' key
        // Each object in the array represents a row of table data
        {
          collection_id: "6322f005046f16b5e0f00d55",
          asset_id: "6322f1636655e2c536aa7b20",
          units: 22248,
          collection_name: "Demo",
        },
        {
          collection_id: "6322f005046f16b5e0f00d55",
          asset_id: "632414810a26cd1815a56033",
          units: 19652,
          collection_name: "Demo",
        },
        {
          collection_id: "6322f005046f16b5e0f00d55",
          asset_id: "6324143b0a26cd1815a55fba",
          units: 10925,
          collection_name: "Demo",
        },
        {
          collection_id: "6322f005046f16b5e0f00d55",
          asset_id: "6322f2986655e2c536aa7dcd",
          units: 10068,
          collection_name: "Demo",
        },
        {
          collection_id: "6322f005046f16b5e0f00d55",
          asset_id: "632413876655e2c536abf8df",
          units: 9902,
          collection_name: "Demo",
        },
      ],
    },
  ],
};
