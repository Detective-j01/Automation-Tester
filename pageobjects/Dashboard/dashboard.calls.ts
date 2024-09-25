import { SELECTORS } from "../../pageobjects/Dashboard/dashboard.page.ts";
import DashboardPage from "../../pageobjects/Dashboard/dashboard.page.ts";
export async function assertProjectFormFields() {
  expect(SELECTORS.ANDROID.projectName).toBeDisplayed();
  expect(SELECTORS.ANDROID.projectSiteAddress).toBeDisplayed();

  expect(SELECTORS.ANDROID.projectStartDatePopUp).toBeDisplayed();

  expect(SELECTORS.ANDROID.projectDeadlinePopup).toBeDisplayed();
}
export async function createProject(
  projectName: string,
  siteAddressLetter: string
) {
  await DashboardPage.inputProjectName(projectName);
  await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  await DashboardPage.selectSiteAddressDropDown();
  await DashboardPage.getCreateProjectBtn();
  expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
    "Project create successfully"
  );
}
