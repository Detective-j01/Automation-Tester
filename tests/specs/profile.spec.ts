import ProfilePage from "../../pageobjects/Profile/profile.page.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";
import { getRandomName } from "../../pageobjects/Utils/utils.ts"; // Import the getRandomName function

describe("My Profile functionality", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Should Create a new task with Status (To Do)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getProfileBtn();
    const initialfirstName = await getRandomName(5);
    await ProfilePage.inputlastName(initialfirstName);
    const initialLastName = await getRandomName(5);
    await ProfilePage.inputlastName(initialLastName);
    await ProfilePage.selectProfileProfessionDropdown();
    await ProfilePage.selectProfileBodyAssociationDropdown();
    await ProfilePage.getProfessionalBodyRegisterNumber("PRO987");
    const initialCompanyName = await getRandomName(5);
    await ProfilePage.getCompanyName(initialCompanyName);
    await ProfilePage.getProfileUpdateBtn();
  });
});
