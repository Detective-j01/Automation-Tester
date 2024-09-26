import ProfilePage from "../../pageobjects/Profile/support.page.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";

describe("Support functionality", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Should Create a new task with Status (To Do)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.clickEmailSiteInstructionUpdates();
  });
});
