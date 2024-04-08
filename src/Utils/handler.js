export const stringHandler = (str) => {
  if (str.length > 30) {
    return str.slice(0, 30) + "...";
  }
  return str;
};
