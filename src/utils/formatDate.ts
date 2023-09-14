export const formatDate = (date: string): string => {
  const event = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return event.toLocaleDateString("en-EN", options);
};
