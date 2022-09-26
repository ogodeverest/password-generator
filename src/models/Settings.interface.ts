export interface SettingsItem {
  value: boolean;
  pool: number;
  pattern: string;
  characters: string;
}

export default interface Settings {
  length: { value: number };
  uppercase: SettingsItem;
  lowercase: SettingsItem;
  numbers: SettingsItem;
  symbols: SettingsItem;
}
