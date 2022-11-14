import { IIfProps } from "./types";

const If = ({ condition, then, elseCase }: IIfProps) => {
  if (condition) return then;
  else return elseCase || null;
};

export default If;
