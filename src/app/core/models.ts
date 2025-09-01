export type TimeRange = 30 | 60 | 90;
export type TimeRangeKey = '30' | '60' | '90';

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

export interface GmiEntry {
  chartData: ChartSlice[];
  lastUpdated: string;
  activePatients: number;
  averageGMI: number;
}
export type GmiJson = Record<TimeRangeKey, GmiEntry>;

export interface TirEntry {
  chartData: ChartSlice[];
  lastUpdated: string;
  activePatients: number;
}
export type TirJson = Record<TimeRangeKey, TirEntry>;
