export type TimeRange = 30 | 60 | 90;
export type TimeRangeKey = '30' | '60' | '90';

export interface FilterOption {
  id: string;
  label: string;
  value: TimeRange;
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

export interface ClinicState {
  timeRange: TimeRange;
  tir: ChartSlice[];
  gmi: ChartSlice[];
  activePatients: number | null;
  dateFrom: string | null;
  dateTo: string | null;
  lastUpdated: string | null;
  averageGMI: number | null;
  error: string | null;
}

export interface DateRange {
  from: string | null;
  to: string | null;
}
