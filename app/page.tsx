import Image from "next/image";
import React from "react";
import DefaultCard from "./components/cards/DefaultCard";
import ShareIcon from "./components/icons/ShareIcon";
import Chart from "./components/visualizations/LineChart";
import {
  ApiResponse,
  ChartData,
  DashboardData,
  PageParams,
  TopAssetTableData,
} from "./utils/types";
import { _fetch } from "./utils/request/request";
import { generateReqUrl } from "./utils/request/generateReqUrl";
import DateFilters from "./components/filters/DateFilters";
import Aggregates from "./components/visualizations/Aggregates";
import TableVis from "./components/visualizations/TableVis";
import { viz_statics } from "./utils/statics/vizStatics";
import Visualization from "./components/visualizations";

export default async function Page(params: PageParams) {
  const data = await _fetch<DashboardData>(
    generateReqUrl(
      `/api/get-dashboard-data${
        Object.keys(params.searchParams ?? {})?.length > 0
          ? `?${new URLSearchParams(params.searchParams ?? {}).toString()}`
          : ""
      }`,
    ),
  );

  return (
    <main className="min-h-screen p-6 max-w-7xl m-auto">
      <DateFilters
        activeFilter={
          params?.searchParams?.filter
            ? JSON.parse(params.searchParams?.filter)
            : 0
        }
      />
      <div className="grid gap-5">
        <Aggregates data={data.data} />
        <Visualization data={data.data} />
      </div>
    </main>
  );
}
