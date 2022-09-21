import type Settings from "../models/Settings.interface";
import type { SettingsItem } from "../models/Settings.interface";

export function calculateEntropy({ length, ...rest }: Settings): number {
  const poolSize = Object.values(rest).reduce(
    (current: number, { value, pool }: SettingsItem) =>
      current + (value ? pool : 0),
    0
  );
  const entropy = length.value * Math.max(Math.log2(poolSize), 0);
  return entropy;
}

export default function findStrength(settings: Settings): string {
  const levels = new Map();
  levels.set("poor", [0, 25]);
  levels.set("weak", [25, 50]);
  levels.set("medium", [50, 75]);
  levels.set("strong", [75, Infinity]);

  const entropy = calculateEntropy(settings);

  for (let [key, [lower, upper]] of levels) {
    if (entropy >= lower && entropy < upper) return key;
  }
}
