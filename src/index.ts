export type SkoolProgram = {
  raw: string;
};

export function parseSkool(input: string): SkoolProgram {
  return {
    raw: input,
  };
}
