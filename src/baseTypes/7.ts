/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeeK {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DayOfWeeK): boolean {
  const weekendDays = [DayOfWeeK.SATURDAY, DayOfWeeK.SUNDAY];
  return weekendDays.includes(day);
}

const today = DayOfWeeK.MONDAY;
const DayOfWeekend = isWeekend(today);
