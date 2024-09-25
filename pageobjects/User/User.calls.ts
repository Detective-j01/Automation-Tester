import { SELECTORS } from "../../pageobjects/User/user.page.ts";
export async function assertUserPageFields() {
  expect(SELECTORS.ANDROID.addUserText).toHaveText("ADD USER");
  expect(SELECTORS.ANDROID.userText).toHaveText("Users");
}

export async function assertUserFormFields(fieldname: string, msg: string) {
  expect(fieldname).toHaveText(msg);
}
