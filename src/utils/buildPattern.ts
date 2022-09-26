import type Settings from "../models/Settings.interface";

// form this regEx pattern for at least one of the checked checkboxes
export default function buildPattern({ length, ...rest }: Settings): string {
  const uniPattern: string[] = Object.values(rest)
    .filter(({ value }: { value: boolean }) => value)
    .map(({ pattern }: { pattern: string }) => pattern);

  const lookaheadGroups: string = uniPattern.reduce(
    (current: string, next: string) => (current += `(?=.*[${next}])`),
    ""
  );

  const range: string = "[" + uniPattern.join("") + "]";

  return `^${lookaheadGroups}${range}+$`;
}

export function buildCharacters({ length, ...rest }): string {
  return Object.values(rest)
    .filter(({ value }: { value: boolean }) => value)
    .reduce(
      (current, { characters }: { characters: string }) =>
        (current += characters),
      ""
    );
}
