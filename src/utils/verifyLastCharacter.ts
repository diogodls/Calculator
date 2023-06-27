import {SIMBOLS} from "../const/constants.ts";

export const verifyLastCharacter = (inputValue: string) => {
  const simbolLastCharacter = inputValue.substring(inputValue.length - 1);
  if(SIMBOLS.includes(simbolLastCharacter)) return true;
}