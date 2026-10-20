export type Archetype = {
  id: string;
  name: string;
  rule: string;
  description: string;
};

export type Achievement = {
  id: string;
  name: string;
  description: string;
};

export type UserStats = {
  avgFocus: number; // 0-100
  races: number;
  peak: number; // 0-100
  durationMs: number;
};
