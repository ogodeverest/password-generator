import type Settings from "../models/Settings.interface";

export function calculateEntropy({ length, ...rest }: Settings): number {
  const poolSize: number = Object.values(rest)
    .filter(({ value }: { value: boolean }) => value)
    .reduce((current: number, { pool }: { pool: number }) => current + pool, 0);
  const entropy: number = length.value * Math.max(Math.log2(poolSize), 0);
  return entropy;
}

export const levels: Map<string, Number[]> = new Map();
levels.set("poor", [0, 25]);
levels.set("weak", [25, 50]);
levels.set("medium", [50, 75]);
levels.set("strong", [75, Infinity]);

export default function findStrength(settings: Settings): string {
  const entropy: number = calculateEntropy(settings);
  for (let [key, [lower, upper]] of levels) {
    if (entropy >= lower && entropy < upper) return key;
  }
}
