export function convertDurationToTimeString(duration: number) {
  const houra = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [houra, minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}
