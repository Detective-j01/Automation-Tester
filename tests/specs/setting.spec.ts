import ProfilePage from "../../pageobjects/Profile/settings.page.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";

describe("Settings functionality", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Should Update Settings with Email/Push", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await browser.pause(1000);
    await ProfilePage.getSettingBtn();
    await browser.pause(4000);
    await ProfilePage.clickSiteUpdatesEmail();
    await browser.pause(2000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    expect(await ProfilePage.getNotificationPreferenceMsg()).toHaveText(
      "Notification preference updated"
    );
    await ProfilePage.clickTaskUpdatesPush();
    await browser.pause(2000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    expect(await ProfilePage.getNotificationPreferenceMsg()).toHaveText(
      "Notification preference updated"
    );
    await ProfilePage.clickDrawingsUpdatesEmail();
    await browser.pause(2000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    expect(await ProfilePage.getNotificationPreferenceMsg()).toHaveText(
      "Notification preference updated"
    );
    await ProfilePage.clickDocumentsUpdatesPush();
    await browser.pause(2000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    expect(await ProfilePage.getNotificationPreferenceMsg()).toHaveText(
      "Notification preference updated"
    );
    await ProfilePage.clickProjectMemberUpdatesEmail();
    await browser.pause(2000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    expect(await ProfilePage.getNotificationPreferenceMsg()).toHaveText(
      "Notification preference updated"
    );
  });
});
