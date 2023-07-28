import { ApiResFunc } from "@/app/utils/facade";
import { getQueryParamFromPath } from "@/app/utils/helpers/urlHelpers";
import {
  dashboard_data,
  getDashboardDataFromJSON,
} from "@/app/utils/statics/dashboardData";
import { DashboardData, PageParams } from "@/app/utils/types";

// api to get dashboard data for a path with filter
export async function GET(req: Request) {
  let filterStr = req.url.includes("?")
    ? getQueryParamFromPath(req.url ?? "", "filter")
    : "0";

  // api response with mock data
  return ApiResFunc<DashboardData>({
    status: 200,
    data: getDashboardDataFromJSON(JSON.parse(filterStr ?? "") || 0),
  });
}
