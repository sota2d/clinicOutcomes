import type { Options } from '@popperjs/core';

export const tooltipAdjustment: (opts: Partial<Options>) => Partial<Options> = (
  opts
) => ({
  ...opts,
  modifiers: [
    ...(opts.modifiers ?? []),
    { name: 'offset', options: { offset: [0, 30] } },
  ],
});
