export interface Config {
  response?: (ResponseEntity)[] | null;
}

export interface ResponseEntity {
  name: string;
  value: number;
}
