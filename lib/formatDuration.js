export default function formatDuration(routeSeconds) {
  const hours = Math.floor(routeSeconds / 3600);
  const minutes = Math.floor((routeSeconds - hours * 3600) / 60);
  const seconds = Math.floor(routeSeconds - hours * 3600 - minutes * 60);

  if (hours === 0) {
    return `${minutes}min ${seconds}s`;
  } else if (minutes === 0) {
    return `${seconds}s`;
  } else {
    return `${hours}h ${minutes}min ${seconds}s`;
  }
}
