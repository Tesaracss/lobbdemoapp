/**
 * Format a date as a string in the format "WEEKDAY DAY MONTH" (e.g. "TUESDAY 20 JULY").
 *
 * @returns {string} The formatted date string.
 */
export const formatDate = () => {
  const date = new Date();

  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).formatToParts(date);

  /**
   * A helper function to get a specific part of the date string.
   *
   * @param {string} type The type of date part to get. Can be one of
   *   'weekday', 'month', 'day'.
   * @returns {string} The value of the date part, or an empty string if not
   *   found.
   */
  const get = (type: string) =>
    parts.find(part => part.type === type)?.value.toUpperCase() || '';

  return `${get('weekday')} ${get('day')} ${get('month')}`;
};
