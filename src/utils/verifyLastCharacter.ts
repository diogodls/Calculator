import { SIMBOLS } from '../const/constants.ts';

export const verifyLastCharacter = (inputValue: string) => {
  const symbolLastCharacter = inputValue.slice(-1);
  if(SIMBOLS.includes(symbolLastCharacter)) return true;
};