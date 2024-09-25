import { SELECTORS } from "../../pageobjects/Tasks/tasks.page";
export async function assertProjectFormFields() {
  expect(SELECTORS.ANDROID.taskStartdatePopup).toBeDisplayed();

  expect(SELECTORS.ANDROID.taskDueDatePopUp).toBeDisplayed();
}
