export type NumberKeysOf<T> = {
  [Key in keyof T]: T[Key] extends number ? Key : never;
}[keyof T];

export type StringKeysOf<T> = {
  [Key in keyof T]: T[Key] extends string ? Key : never;
}[keyof T];
