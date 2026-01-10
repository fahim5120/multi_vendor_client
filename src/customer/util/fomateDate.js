export function formatDate(date) {
  if (!date) return "";

  const d = new Date(date);

  const options = {
    weekday: "short", // Sun
    month: "short",   // Jan
    day: "2-digit",   // 10
  };

  return d.toLocaleDateString("en-US", options);
}
