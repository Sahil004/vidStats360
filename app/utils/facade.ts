import { NextResponse } from "next/server";
import { ApiResponse } from "./types";

export function ApiResFunc<T>(res: ApiResponse<T>) {
  return NextResponse.json(res);
}
