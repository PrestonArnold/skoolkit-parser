export * from "./types";

import { SkoolProgram } from "./types";

export function parseSkool(input: string): SkoolProgram {
  return {
    labels: [],
    lines: [],
  };
}
