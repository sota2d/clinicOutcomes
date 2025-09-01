export type TimeRange = 30 | 60 | 90;

export interface FilterOption {
  id: string;
  label: string;
  value: number;
}

export interface ChartSlice {
  label: string;
  percent: number;
  color: string;
}
