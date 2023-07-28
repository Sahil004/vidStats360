import { getQueryParamFromPath } from "@/app/utils/helpers/urlHelpers";
import { getDashboardDataFromJSON } from "@/app/utils/statics/dashboardData";
import { ApiResponse, DashboardData } from "@/app/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filterStr = req?.url?.includes("?")
    ? getQueryParamFromPath(req?.url ?? "", "filter")
    : "0";
    
  // api response with mock data
  return res.json({
    status: 200,
    data: getDashboardDataFromJSON(JSON.parse(filterStr ?? "") || 0),
  });
}