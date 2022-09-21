export interface SettingsItem {
  value: boolean;
  pool?: number;
  regExp?: RegExp;
}

export default interface Settings {
  length: { value: number };
  uppercase: SettingsItem;
  lowercase: SettingsItem;
  numbers: SettingsItem;
  symbols: SettingsItem;
}
