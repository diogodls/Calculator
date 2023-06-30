export const verifyDivisionPerZero = (value: string) => {
  const formattedValue = value.replace('0/0', '1');
  return formattedValue.includes('/0');
};