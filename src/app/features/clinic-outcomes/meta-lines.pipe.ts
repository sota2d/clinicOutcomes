import { Pipe, PipeTransform, inject, LOCALE_ID } from '@angular/core';
import { TimeRange } from '../../core/models';

export interface ClinicMetaInput {
  count: number | null | undefined;
  range: TimeRange | null | undefined;
  from: Date | string | null | undefined;
  to: Date | string | null | undefined;
  updated: Date | string | null | undefined;
}

@Pipe({ name: 'clinicMeta', pure: true })
export class ClinicMetaPipe implements PipeTransform {
  private locale = inject(LOCALE_ID);

  transform(input: ClinicMetaInput) {
    const count = input.count ?? 0;
    const range = input.range ?? 30;
    const from = input.from ? new Date(input.from) : null;
    const to = input.to ? new Date(input.to) : null;
    const updated = input.updated ? new Date(input.updated) : null;

    const dateFmt = new Intl.DateTimeFormat(this.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const timePart = new Intl.DateTimeFormat(this.locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(updated ?? new Date());

    const rangeSpan =
      from && to
        ? ` from ${dateFmt.format(from)} to ${dateFmt.format(to)}`
        : '';

    const rangeLine = `Showing ${count} patients from last ${range} days of available data${rangeSpan}.`;

    const updatedStr = updated ? dateFmt.format(updated) : '—';
    const footnoteLine =
      `Only patients with a minimum of 10 days of SG data are included. ` +
      `Last updated on ${updatedStr}, ${timePart}.`;

    return { rangeLine, footnoteLine };
  }
}
