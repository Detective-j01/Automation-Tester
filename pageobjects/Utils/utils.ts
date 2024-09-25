export function getCurrentFormattedDate(): string {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed in JavaScript
  const day = currentDate.getDate().toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  return `${month}${day}${year}`;
}

export function getNextFormattedDate(currentDate: string): string {
  const year = parseInt(currentDate.substring(4, 8)); // year
  const month = parseInt(currentDate.substring(0, 2)) - 1; // month (zero-indexed)
  const day = parseInt(currentDate.substring(2, 4)); // day

  // Create the date object
  const date = new Date(year, month, day);

  // Increment the date by 1 day
  date.setDate(date.getDate() + 1);

  // Ensure the date is correctly formatted
  const nextMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const nextDay = date.getDate().toString().padStart(2, "0");
  const nextYear = date.getFullYear().toString();

  return `${nextMonth}${nextDay}${nextYear}`;
}
export function getSameFormattedDate(): string {
  return getCurrentFormattedDate();
}

export function getPreviousFormattedDate(currentDate: string): string {
  const year = parseInt(currentDate.substring(4, 8));
  const month = parseInt(currentDate.substring(0, 2)) - 1;
  const day = parseInt(currentDate.substring(2, 4));

  const date = new Date(year, month, day);
  date.setDate(date.getDate() - 1);

  const prevMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const prevDay = date.getDate().toString().padStart(2, "0");
  const prevYear = date.getFullYear().toString();

  return `${prevMonth}${prevDay}${prevYear}`;
}

export async function getRandomName(length: number): Promise<string> {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
export async function scrollElement() {
  await $(
    "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,11)"
  );
}

export async function getRandomLetter(): Promise<string> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet.charAt(randomIndex);

  return randomLetter;
}
export async function scrollHorizontally() {
  await $(
    "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(6)"
  );
}
export async function getRandomNumbers(length: number): Promise<string> {
  const numbers = "0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers.charAt(randomIndex);
  }

  return result;
}
