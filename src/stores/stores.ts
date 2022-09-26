import { writable, derived, type Writable } from "svelte/store";
import findStrength from "../utils/findStrength";
import type Settings from "../models/Settings.interface";
import PasswordGenerator from "../utils/PasswordGenerator";
import buildPattern from "../utils/buildPattern";

const savedSettings: Settings =
  JSON.parse(localStorage.getItem("settings")) || {};

const initialSettings: Settings = {
  length: { value: 10 },
  uppercase: {
    value: true,
    pool: 26,
    pattern: "A-Z",
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  lowercase: {
    value: false,
    pool: 26,
    pattern: "a-z",
    characters: "abcdefghijklmnopqrstuvwxyz",
  },
  numbers: { value: false, pool: 10, pattern: "0-9", characters: "0123456789" },
  symbols: {
    value: false,
    pool: 42,
    pattern: "@$!%*?&",
    characters: "@$!%*?&",
  },
  ...savedSettings,
};

function builCharacters({ length, ...rest }): string {
  return Object.values(rest)
    .filter(({ value }: { value: boolean }) => value)
    .reduce(
      (current, { characters }: { characters: string }) =>
        (current += characters),
      ""
    );
}

function createSettings(settings: Settings): Writable<Settings> {
  const { set, ...rest }: Writable<Settings> = writable(settings);

  function handleSet(entries: Settings) {
    localStorage.setItem("settings", JSON.stringify(entries));
    set(entries);
  }

  return {
    ...rest,
    set: handleSet,
  };
}

const settings: Writable<Settings> = createSettings(initialSettings);

export const password = derived(settings, ($settings: Settings): string => {
  const passwordGenerator: PasswordGenerator = new PasswordGenerator(
    buildPattern($settings),
    builCharacters($settings)
  );
  return passwordGenerator.generate($settings.length.value);
});

export const strength = derived(settings, ($settings: Settings): string =>
  findStrength($settings)
);

export default settings;
