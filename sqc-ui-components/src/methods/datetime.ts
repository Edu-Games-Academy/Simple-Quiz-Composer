/**
 * Returns a formatted date string by combining the current date, month, year and timestamp.
 *
 * @example ```ts
 * const today = new Date('August 5, 2021 14:30:00');
 * const formattedDate = formatDateStamp(today);
 * console.log(formattedDate); // 20210805-1628165400000
 * ```
 */
export const formatDateStamp = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())
  return `${year}${month}${day}-${date.getTime()}`
}
