import { SELECTORS } from "../../pageobjects/Profile/profile.page.ts";
import ProfilePage from "../../pageobjects/Profile/profile.page.ts";
export async function assertProjectFormFields() {
  expect(SELECTORS.ANDROID.projectName).toBeDisplayed();
  expect(SELECTORS.ANDROID.projectSiteAddress).toBeDisplayed();

  expect(SELECTORS.ANDROID.projectStartDatePopUp).toBeDisplayed();

  expect(SELECTORS.ANDROID.projectDeadlinePopup).toBeDisplayed();
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
export async function getRandomLetter(): Promise<string> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet.charAt(randomIndex);

  return randomLetter;
}
