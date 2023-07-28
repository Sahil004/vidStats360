import React from "react";

export type Maybe<T> = T | null;
export type FreeObject = {
  [key: string]: any;
};

export type DefaultCardProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type ApiResponse<T> = {
  status: number;
  data: T;
  error?: any;
};

export type ApiBody<T> = T;

export type TimeseriesData = {
  units: number;
  timestamp: number;
};

export type BaseVisType = {
  key: string;
};

export type ChartData = {
  chart_data: TimeseriesData[];
} & BaseVisType;

export type TopAssetTableData = {
  key: "top_assets";
  table_data: TopAsset[];
} & BaseVisType;

export type TopAsset = {
  collection_id: string;
  asset_id: string;
  units: number;
  collection_name: string;
};

export type DashboardData = {
  filter: DateFilter;
  data: Array<TopAssetTableData | ChartData>;
};

export type PageParams = {
  params: FreeObject | { slug: string | string[] };
  searchParams: FreeObject;
};

export type DateFilter = 0 | 7 | 14 | 30;

export type DateFilterProps = {
  activeFilter: DateFilter;
};

export type AggregatesProps = {
  data: DashboardData;
};

export type StaticViz = {
  [key: string]: {
    title: string;
    icon: string;
    viz_type: string;
    aggregagte: boolean;
  };
};

export type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
};
