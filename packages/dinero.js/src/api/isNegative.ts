import type { IsNegativeParams } from '@dinero.js/core';
import { isNegative as coreIsNegative } from '@dinero.js/core';

/**
 * Check whether a Dinero object is negative.
 *
 * @param dineroObject - The Dinero objects to check.
 *
 * @returns Whether the Dinero object is negative.
 */
export function isNegative<TAmount>(
  ...[dineroObject]: IsNegativeParams<TAmount>
) {
  const { calculator } = dineroObject;
  const isNegativeFn = coreIsNegative({ calculator });

  return isNegativeFn(dineroObject);
}
