import { writable, derived } from "svelte/store";
import type Settings from "src/models/Settings.interface";

const savedSettings = JSON.parse(localStorage.getItem("settings"));

const initialSettigns: Settings = {
  length: 10,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  ...savedSettings,
};

const settings = writable(initialSettigns);

const password = derived(settings, ($settings) => {});

const strength = derived(password, ($password) => {});

export default settings;
