import { createFunction } from '../utils';

import {
  unsafeAdd,
  safeAdd,
  UnsafeAddDependencies,
  SafeAddDependencies,
} from '../api';

type UnsafeAddCalculator<TAmount> = UnsafeAddDependencies<
  TAmount
>['calculator'];

export function createUnsafeAdd<TAmount>(
  calculator: UnsafeAddCalculator<TAmount>
) {
  return createFunction(unsafeAdd, calculator);
}

type SafeAddCalculator<TAmount> = SafeAddDependencies<TAmount>['calculator'];

export function createSafeAdd<TAmount>(calculator: SafeAddCalculator<TAmount>) {
  return createFunction(safeAdd, calculator);
}