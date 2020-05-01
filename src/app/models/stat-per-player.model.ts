export interface StatPerPlayer {
  name?: string;
  teamName: string;
  matchesPlayed: number;
  points: number[];
  goals: number[];
  assists: number[];
  penalties: number[];
  rank?: number;
}
