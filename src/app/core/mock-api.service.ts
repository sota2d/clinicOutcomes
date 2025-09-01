import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import {
  ChartSlice,
  GmiJson,
  TirJson,
  TimeRange,
  TimeRangeKey,
} from './models';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  constructor(private http: HttpClient) {}

  private calculateRange(range: TimeRange) {
    const now = new Date();
    const from = new Date(now);
    from.setDate(now.getDate() - range);
    return { dateFrom: from.toISOString(), dateTo: now.toISOString() };
  }

  /** API (A): GMI — chart */
  getGmiData(range: TimeRange): Observable<{
    gmi: ChartSlice[];
    activePatients: number;
    averageGMI: number;
    lastUpdated: string;
    dateFrom: string;
    dateTo: string;
  }> {
    return this.http.get<GmiJson>('/mock-data/gmi.json').pipe(
      map((json) => {
        const key = String(range) as TimeRangeKey;
        const entry = json[key];
        const { dateFrom, dateTo } = this.calculateRange(range);
        return {
          gmi: entry.chartData,
          activePatients: entry.activePatients,
          averageGMI: entry.averageGMI,
          lastUpdated: entry.lastUpdated,
          dateFrom,
          dateTo,
        };
      }),
      delay(200)
    );
  }

  /** API (B): TIR — chart */
  getTirData(range: TimeRange): Observable<ChartSlice[]> {
    return this.http.get<TirJson>('mock-data/tir.json').pipe(
      map((json) => {
        const key = String(range) as TimeRangeKey;
        const entry = json[key];
        return entry.chartData;
      }),
      delay(200)
    );
  }
}
