export const isBlank = (input: string): boolean => {
  if (/\S/.test(input)) {
    return false;
  } else {
    return input !== '';
  }
};
