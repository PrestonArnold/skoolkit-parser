export type SkoolProgram = {
  org?: number;
  labels: Label[];
  lines: SkoolLine[];
};

export type Label = {
  name: string;
  address?: number;
};

export type SkoolLine = {
  address?: number;
  raw: string;
};
