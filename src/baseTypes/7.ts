/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thuersday = "thuersday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend(day: Weekend): boolean {
  if (day === Weekend.saturday || Weekend.sunday) {
    return true;
  }
  return false;
}

export {};
