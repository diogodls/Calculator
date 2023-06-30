export const verifyFractionDigits = (number: number) => {
  return (number - Math.floor(number)) !== 0;
};