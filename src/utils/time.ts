export function formatTime(minutes: number): string {
  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  const formattedTime = `${hours}hr ${remainingMinutes}min`;
  return formattedTime;
}
