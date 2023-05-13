export const truncate = (text: string, length: number = 150) => {
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
