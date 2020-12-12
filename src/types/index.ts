export const ItemTypes = {
  CAT: "cat",
};

export const AnimalTypes = {
  CAT: "CAT" as AnimalLiteral,
  DOG: "DOG" as AnimalLiteral,
  HAM: "HAM" as AnimalLiteral,
};

export type AnimalLiteral = "CAT" | "DOG" | "HAM";

export type Animal = {
  idx: number;
  type: AnimalLiteral;
  disp: string;
};
