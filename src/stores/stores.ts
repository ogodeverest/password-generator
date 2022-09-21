import { writable, derived, type Writable } from "svelte/store";
import findStrength from "../utils/findStrength";
import type Settings from "../models/Settings.interface";

const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};

const initialSettigns: Settings = {
  length: { value: 10 },
  uppercase: { value: true, pool: 26, regExp: /[A-Z]/ },
  lowercase: { value: true, pool: 26, regExp: /[a-z]/ },
  numbers: { value: true, pool: 10, regExp: /\d/ },
  symbols: { value: false, pool: 42, regExp: /[^a-zA-Z\d]/ },
  ...savedSettings,
};

const settings: Writable<Settings> = writable(initialSettigns);

const password = derived(settings, ($settings) => {
  //   const regExpDigit = /\d/;
  //   const regExpUppercase = /[A-Z]/;
  //   const regExpLowercase = /[a-z]/;
  //   const regExpSymbol = /[^a-zA-z0-9]/;
});

export const strength = derived(settings, ($settings): string =>
  findStrength($settings)
);

export default settings;
