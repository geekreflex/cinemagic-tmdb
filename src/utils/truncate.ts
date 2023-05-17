export const truncate = (text: string, length = 250) => {
  if (!text) '';

  let boundaryIndex = length;
  while (boundaryIndex > 0 && !/\s/.test(text[boundaryIndex])) {
    boundaryIndex--;
  }
  if (boundaryIndex === 0) {
    return text;
  }

  return text.slice(0, boundaryIndex).trim() + '...';
};
