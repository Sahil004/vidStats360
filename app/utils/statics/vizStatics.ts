import { FreeObject, StaticViz } from "../types";

// Static visualization configuration for different charts and tables
export const viz_statics: StaticViz = {
  bandwidth_consumption: {
    title: "Streaming Usage", // Title of the chart
    icon: "ShareIcon", // Icon associated with the chart
    viz_type: "line", // Type of visualization (line chart in this case)
    aggregagte: true, // Indicates whether the data should be aggregated (true for charts)
  },
  asset_duration: {
    title: "Transcoding Usage", // Title of the chart
    icon: "CpuIcon", // Icon associated with the chart
    viz_type: "line", // Type of visualization (line chart in this case)
    aggregagte: true, // Indicates whether the data should be aggregated (true for charts)
  },
  storage_unit: {
    title: "Storage Usage", // Title of the chart
    icon: "StorageIcon", // Icon associated with the chart
    viz_type: "line", // Type of visualization (line chart in this case)
    aggregagte: true, // Indicates whether the data should be aggregated (true for charts)
  },
  top_assets: {
    title: "Top Assets", // Title of the table
    icon: "ShareIcon", // Icon associated with the table
    viz_type: "table", // Type of visualization (table in this case)
    aggregagte: false, // Indicates whether the data should be aggregated (false for tables)
  },
};

// Mapping of column keys to their display names in the table visualization
export const columns_display_name: FreeObject = {
  collection_id: "Collection ID", // Display name for "collection_id" column
  asset_id: "Assets ID", // Display name for "asset_id" column
  units: "Stream Duration", // Display name for "units" column
  collection_name: "Collection Name", // Display name for "collection_name" column
};
