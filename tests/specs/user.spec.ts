import {
  getRandomLetter,
  getRandomName,
} from "../../pageobjects/Utils/utils.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";
import DashboardPage from "../../pageobjects/Dashboard/dashboard.page.ts";
import UserPage from "../../pageobjects/User/User.page.ts";

describe("My Login application", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });
  it("Creating Project & Adding a User with Name, Email, and Role (Professional Team) (with Default No)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    // const name = getRandomName(6);
    const Name = await getRandomName(5);
    const Email = `${Name}` + "@gmail.com";
    await UserPage.inputUserName(Name);
    await UserPage.inputUserEmail(Email);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleProfessionalTeam();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role (Main Contractor) (with Default No)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    // const name = getRandomName(6);
    const Name = await getRandomName(5);
    const Email = `${Name}` + "@gmail.com";
    await UserPage.inputUserName(Name);
    await UserPage.inputUserEmail(Email);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleMainContractor();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role (SubContractor) (with Default No)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    // const name = getRandomName(6);
    const Name = await getRandomName(5);
    const Email = `${Name}` + "@gmail.com";
    await UserPage.inputUserName(Name);
    await UserPage.inputUserEmail(Email);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleSubContractor();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role (Other) (with Default No)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    // const name = getRandomName(6);
    const Name = await getRandomName(5);
    const Email = `${Name}` + "@gmail.com";
    await UserPage.inputUserName(Name);
    await UserPage.inputUserEmail(Email);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role(Professional Team) (with Option Yes)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    const Name = await getRandomName(5);
    const Email = `${Name}` + "@gmail.com";
    await UserPage.inputUserName(Name);
    await UserPage.inputUserEmail(Email);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleProfessionalTeam();
    await UserPage.selectCanViewUnapprovedDrawingsDropdown();
    await UserPage.selectCanIssueSiteInstructionDropDown();
    await UserPage.selectAddToProjectDirectoryDropDown();
    await UserPage.selectIsThisAnAdminUserDropdown();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role(Main Contractor) (with Option Yes)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserName(initialUserName);
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleMainContractor();
    await UserPage.selectCanViewUnapprovedDrawingsDropdown();
    await UserPage.selectCanIssueSiteInstructionDropDown();
    await UserPage.selectAddToProjectDirectoryDropDown();
    await UserPage.selectIsThisAnAdminUserDropdown();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role(Sub Contractor) (with Option Yes)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserName(initialUserName);
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleSubContractor();
    await UserPage.selectCanViewUnapprovedDrawingsDropdown();
    await UserPage.selectCanIssueSiteInstructionDropDown();
    await UserPage.selectAddToProjectDirectoryDropDown();
    await UserPage.selectIsThisAnAdminUserDropdown();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("Creating Project & Adding a User with Name, Email, and Role(Other) (with Option Yes)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserName(initialUserName);
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();
    await UserPage.selectCanViewUnapprovedDrawingsDropdown();
    await UserPage.selectCanIssueSiteInstructionDropDown();
    await UserPage.selectAddToProjectDirectoryDropDown();
    await UserPage.selectIsThisAnAdminUserDropdown();
    await UserPage.clickAddUserSubmitBtn();
  });
  it("should add a user, display the created user", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    expect(await UserPage.getAddUserText()).toBe("ADD USER");
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserName(initialUserName);
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleProfessionalTeam();
    await UserPage.clickAddUserSubmitBtn();
    await UserPage.verifyCreatedUser(initialUserName);
    await UserPage.clickSkipBtn();
  });

  it("should add a user, Update the created user", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    //await DashboardPage.getProjectDialog();    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();

    expect(await UserPage.getAddUserText()).toBe("ADD USER");
    // Step 1: Add User
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserName(initialUserName);
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleProfessionalTeam();
    await UserPage.clickAddUserSubmitBtn();
    await UserPage.verifyCreatedUser(initialUserName);
    await UserPage.getCreatedUserTab();
    await UserPage.getUpdatedUserNameField();
    const updatedUserName = await getRandomName(6);
    const updatedEmail = `${updatedUserName}` + "@gmail.com";
    await UserPage.inputUserName(updatedUserName);
    await UserPage.inputUserEmail(updatedEmail);
    await browser.hideKeyboard();
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleMainContractor();
    await UserPage.getUpdatedUser();
    await browser.pause(2000);
  });

  it("Creating Project without Name", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await DashboardPage.getProjectDialog();
    await browser.pause(600);
    expect(await DashboardPage.getProjectCreatedMsg()).toBe(
      "Project create successfully"
    );
    await DashboardPage.getCreateProjectLabel();
    await UserPage.clickAddUserBtn();
    const initialUserName = await getRandomName(5);
    const initialUserEmail = `${initialUserName}` + "@gmail.com";
    await UserPage.inputUserEmail(initialUserEmail);
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();
    await UserPage.selectCanViewUnapprovedDrawingsDropdown();
    await UserPage.selectCanIssueSiteInstructionDropDown();
    await UserPage.selectAddToProjectDirectoryDropDown();
    await UserPage.selectIsThisAnAdminUserDropdown();
    await UserPage.clickAddUserSubmitBtn();
  });

  it("Creating Project & Adding a User with Name, Email, and Role(Main Contractor with default No)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleMainContractor();

    await UserPage.clickAddUserSubmitBtn();
    await browser.pause(1000);
  });

  it("Creating Project & Adding a User with Name, Email, and Role(SubContractor)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleSubContractor();

    await UserPage.clickAddUserSubmitBtn();
    await browser.pause(1000);
  });

  it("Creating Project & Adding a User with Name, Email, and Role(Other)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();

    await UserPage.clickAddUserSubmitBtn();
    await browser.pause(1000);
  });

  it("Error: Email Address is required", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleProfessionalTeam();

    await UserPage.clickAddUserSubmitBtn();
    await browser.pause(1000);
    expect(await UserPage.getMissingEmailAddressMsg()).toHaveText(
      "Email is required"
    );
  });
  it("Creating Project without Role", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");

    await UserPage.clickAddUserSubmitBtn();
    await browser.pause(1000);
    expect(await UserPage.getMissingRoleMsg()).toHaveText("Role is required");
  });

  it("Creating Project & Sending Invite", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();

    await UserPage.clickAddUserSubmitBtn();
    await UserPage.clickShareInviteBtn();
    expect(await UserPage.getUserInvitedMsg()).toHaveText(
      "User invited successfully"
    );

    await browser.pause(1000);
  });
  it("Creating Project & Skiping invite", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await DashboardPage.getCreateProjectBtn();
    expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
    const projectName = await getRandomName(10);
    const siteAddressLetter = await getRandomLetter();
    await DashboardPage.inputProjectName(projectName);
    await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
    await browser.pause(1000);
    await DashboardPage.selectSiteAddressDropDown();
    await DashboardPage.getCreateProjectBtn();
    await browser.pause(1000);
    expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
      "Project create successfully"
    );
    await UserPage.clickAddUserBtn();
    await UserPage.inputUserName("Alex");
    await UserPage.inputUserEmail("buildware@gmail.com");
    await UserPage.selectRoleDropdown();
    await UserPage.selectRoleOther();
    await UserPage.clickAddUserSubmitBtn();
    await UserPage.clickSkipBtn();
    await browser.pause(1000);
  });
});
