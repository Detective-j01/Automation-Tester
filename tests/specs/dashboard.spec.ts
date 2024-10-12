import {
  getCurrentFormattedDate,
  getNextFormattedDate,
  getPreviousFormattedDate,
  //getSameFormattedDate,
  getRandomLetter,
  getRandomName,
  getRandomNumbers,
  scrollElement,
  scrollHorizontally,
} from "../../pageobjects/Utils/utils.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";
import DashboardPage from "../../pageobjects/Dashboard/dashboard.page.ts";
import {
  assertProjectFormFields,
  createProject,
} from "../../pageobjects/Dashboard/dashboard.calls.ts";

describe("My Login application", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  // it("Creating Project Form In Dashboard", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await DashboardPage.getCreateProjectBtn();
  //   await assertProjectFormFields();
  //   await DashboardPage.getProjectCancelBtn();
  // });
  // it("Creating Project With Project Name and Site Address", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await createProject(projectName, siteAddressLetter);
  // });

  // it("Creating Project With Project Name, Project Site Address, Start Date, Dead Line", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await createProject(projectName, siteAddressLetter);
  //   await DashboardPage.getProjectStartDatePopUp();
  //   expect(await DashboardPage.getProjectStartDateMsg()).toHaveText(
  //     "Project Start Date"
  //   );
  //   await DashboardPage.getProjectStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectStartDate(startDate);
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   expect(await DashboardPage.getProjectDeadlineMsg()).toHaveText(
  //     "Project Deadline"
  //   );
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  // });

  // it("Creating Project With Same Start And End Date", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.getProjectStartDatePopUp();
  //   expect(await DashboardPage.getProjectStartDateMsg()).toHaveText(
  //     "Project Start Date"
  //   );
  //   await DashboardPage.getProjectStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectStartDate(startDate);
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   expect(await DashboardPage.getProjectDeadlineMsg()).toHaveText(
  //     "Project Deadline"
  //   );
  //   await DashboardPage.getProjectEndDateBtn();
  //   await DashboardPage.getProjectDeadline(startDate);
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInvalidMsg()).toHaveText(
  //     "Invalid Date"
  //   );
  // });

  // it("Entering Project Name, SiteAddress, Currency(USD) and Budget", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.selectCurrencyUSD();
  //   await DashboardPage.inputProjectBudget("3000");
  //   await DashboardPage.getCreateProjectBtn();
 await DashboardPage.getProjectCreatedMsg();
  
    );
  // });
  // it("Entering Project Name, SiteAddress, Currency(EUR) and Budget", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.selectCurrencyEUR();
  //   await DashboardPage.inputProjectBudget("3000");
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
  //     "Project create successfully"
  //   );
  // });
  // it("Entering Project Name, SiteAddress, Currency(ZAR) and Budget", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.selectCurrencyZAR();
  //   await DashboardPage.inputProjectBudget("3000");
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectCreatedMsg()).toHaveText(
  //     "Project create successfully"
  //   );
  // });
  // it("Should display an error for invalid project budget", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.selectCurrencyUSD();
  //   // Input invalid project budget
  //   await DashboardPage.inputProjectBudget("0");
  //   await DashboardPage.getCreateProjectBtn();
  //   await browser.pause(500);
  //   // Verify error message
  //   expect(await DashboardPage.getInvalidBugetMsg()).toHaveText(
  //     "Invalid budget"
  //   );
  // });

  // it("Creating Project With Start Date Greater Than Deadline", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   // await DashboardPage.getAllowPermission();
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectInfoMsg()).toHaveText("Project info");
  //   const projectName = await getRandomName(10);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.inputProjectSiteAddress(siteAddressLetter);
  //   await DashboardPage.selectSiteAddressDropDown();
  //   await DashboardPage.getProjectStartDatePopUp();
  //   expect(await DashboardPage.getProjectStartDateMsg()).toHaveText(
  //     "Project Start Date"
  //   );
  //   await DashboardPage.getProjectStartDateBtn();
  //   const startDate = getCurrentFormattedDate();
  //   await DashboardPage.getProjectStartDate(startDate);
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   expect(await DashboardPage.getProjectDeadlineMsg()).toHaveText(
  //     "Project Deadline"
  //   );
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getPreviousFormattedDate(startDate);
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.getCreateProjectBtn();
  //   expect(await DashboardPage.getProjectSameDateMsg()).toHaveText(
  //     "Project start date cannot be greater than project deadline"
  //   );
  // });
  // it("Active Project Cases: Adding Team Member with Name, Email, Role(Professional Team) withall Permissions", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleProfessionalTeam();
  //   await DashboardPage.getActivePermissionsCanViewUnapprovedDrawings();
  //   await DashboardPage.getActivePermissionsCanIssueSiteInstruction();
  //   await DashboardPage.getActivePermissionsAddProjectToDirectorty();
  //   await DashboardPage.getActivePermissionsIsThisAnAdminUser();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Adding Team Member with Name, Email, Role(MAin Contractor) without Permissions", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleMainContractor();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Adding Team Member with Name, Email, Role(SubContractor) With First Half  Permissions", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleSubContractor();
  //   await DashboardPage.getActivePermissionsCanViewUnapprovedDrawings();
  //   await DashboardPage.getActivePermissionsCanIssueSiteInstruction();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Adding Team Member with Name, Email, Role(Other) with Second Half Permissions", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleOther();
  //   await DashboardPage.getActivePermissionsAddProjectToDirectorty();
  //   await DashboardPage.getActivePermissionsIsThisAnAdminUser();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases:Error Name is Required", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleMainContractor();
  //   await DashboardPage.getActivePermissionsCanViewUnapprovedDrawings();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveMissingNameMsg()).toHaveText(
  //     "Name is required"
  //   );
  // });
  // it("Active Project Cases:Error Email is Required", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   await DashboardPage.selectActiveProjectRoleOther();
  //   await DashboardPage.getActivePermissionsCanIssueSiteInstruction();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveMissingEmailMsg()).toHaveText(
  //     "Email is required"
  //   );
  // });
  // it("Active Project Cases:Error Role is Required", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const activeProjectName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(activeProjectName);
  //   const activeEmailAdress = `${activeProjectName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(activeEmailAdress);
  //   await DashboardPage.getActivePermissionsAddProjectToDirectorty();
  //   await DashboardPage.getAddSubmitBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "Role is required"
  //   );
  // });

  // it("Active Project Cases: Updating Team Member with Role ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.getAddMemberBtn();
  //   const initProjName = await getRandomName(6);
  //   await DashboardPage.inputActiveProjectTeamName(initProjName);
  //   const initEmailAdress = `${initProjName}` + "@gmail.com";
  //   await DashboardPage.inputActiveProjectTeamEmail(initEmailAdress);
  //   await DashboardPage.selectActiveProjectRoleProfessionalTeam();
  //   const memberRole = await DashboardPage.getRoleText();
  //   console.log(memberRole);
  //   await DashboardPage.getActivePermissionsCanViewUnapprovedDrawings();
  //   await DashboardPage.getActivePermissionsCanIssueSiteInstruction();
  //   await DashboardPage.getActivePermissionsAddProjectToDirectorty();
  //   await DashboardPage.getActivePermissionsIsThisAnAdminUser();
  //   await DashboardPage.getAddSubmitBtn();
  //   await browser.pause(2000);
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  //   const expectedProjName = await DashboardPage.verifyCreatedTeamMember(
  //     initProjName,
  //     initEmailAdress,
  //     memberRole.toString()
  //   );
  //   console.log(expectedProjName);
  //   expect(initProjName).toBe(expectedProjName);
  //   const expectedName = await DashboardPage.getMemberName(initProjName);
  //   expect(initProjName).toBe(expectedName);
  //   await DashboardPage.scrollAndClickActiveMember();
  //   await DashboardPage.selectActiveProjectRoleMainContractor();
  //   await DashboardPage.getActivePermissionsCanViewUnapprovedDrawings();
  //   await DashboardPage.getActivePermissionsCanIssueSiteInstruction();
  //   await DashboardPage.getActivePermissionsAddProjectToDirectorty();
  //   await DashboardPage.getActivePermissionsIsThisAnAdminUser();
  //   await DashboardPage.getActiveUpdateBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Remove Member  ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getTeamBtn();
  //   await DashboardPage.isActiveTeamMemberVisible();
  //   await DashboardPage.scrollAndClickActiveMember();
  //   await DashboardPage.selectActiveProjectRoleMainContractor();
  //   await DashboardPage.getActiveRemoveBtn();
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Creating a New Folder", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getDocumentBtn();
  //   await DashboardPage.getCreateNewFolderBtn();
  //   const folderName = await getRandomName(6);
  //   await DashboardPage.inputDocumentFolderName(folderName);
  //   await DashboardPage.getCreateBtn();
  // });
  // it("Active Project Cases: Uploading a file with Description & Restricted Document with option (Yes) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getDocumentBtn();
  //   await browser.pause(2000);
  //   await DashboardPage.getUploadBtn();
  //   await browser.pause(2000);
  //   const description = await getRandomName(6);
  //   await DashboardPage.inputDocumentUploadDescription(description);
  //   await DashboardPage.selectRestrictedDocumentOptionYes();
  //   await DashboardPage.clickAccessorsDropdown();
  //   await DashboardPage.getAccessorsDoneBtn();
  // });
  // it("Active Project Cases: Uploading a file with Description & Restricted Document with option (No) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.getDocumentBtn();
  //   await browser.pause(2000);
  //   await DashboardPage.getUploadBtn();
  //   const description = await getRandomName(6);
  //   await DashboardPage.inputDocumentUploadDescription(description);
  //   await DashboardPage.selectRestrictedDocumentOptionNo();
  // });
  // it("Active Project Cases: Site Instruction with Assignee(Vufug) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );

  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   // await DashboardPage.scrollToEnd();
  //   // await browser.pause(3000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   const title = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionTitle(title);
  //   const jobSite = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionJobSite(jobSite);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownVufug;
  //   await DashboardPage.getNextBtn();
  //   expect(await DashboardPage.getSiteInstructionCreatedMsg()).toHaveText(
  //     "Created Successfully"
  //   );
  // });
  // it("Active Project Cases: Site Instruction with Assignee(Hshs) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   const title = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionTitle(title);
  //   const jobSite = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionJobSite(jobSite);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownHshs;
  //   await DashboardPage.getNextBtn();
  //   expect(await DashboardPage.getSiteInstructionCreatedMsg()).toHaveText(
  //     "Created Successfully"
  //   );
  // });
  // it("Active Project Cases: Site Instruction with Assignee(JawadTestimg) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   const title = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionTitle(title);
  //   const jobSite = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionJobSite(jobSite);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownJawadTestimg;
  //   await DashboardPage.getNextBtn();
  //   expect(await DashboardPage.getSiteInstructionCreatedMsg()).toHaveText(
  //     "Created Successfully"
  //   );
  // });
  // it("Active Project Cases: Site Instruction with Assignee(TestingQA) ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   const title = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionTitle(title);
  //   const jobSite = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionJobSite(jobSite);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownTestinQA;
  //   expect(await DashboardPage.getSiteInstructionCreatedMsg()).toHaveText(
  //     "Created Successfully"
  //   );
  // });
  // it("Active Project Cases: Site Instruction Error Title is required ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   const jobSite = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionJobSite(jobSite);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownTestinQA;
  //   expect(await DashboardPage.getActiveUserInvitedMsg()).toHaveText(
  //     "User Invited Successfully"
  //   );
  // });
  // it("Active Project Cases: Site Instruction Error Job Site is required ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //     "Active Projects"
  //   );
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   await DashboardPage.clickSiteInstruction();
  //   await browser.pause(2000);
  //   await DashboardPage.getIssueInstruction();
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   const title = await getRandomName(6);
  //   await DashboardPage.inputSiteInstructionTitle(title);
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.selectSiteInstructionAssigneeDropdownTestinQA;
  //   expect(await DashboardPage.getSiteInstructionTitleErrorMsg()).toHaveText(
  //     "Title is required"
  //   );
  // });
  // it("Active Project Cases: Adding a Project Directory", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   // expect(await DashboardPage.getAssertCreateProject()).toHaveText(
  //   //   "Create Projects"
  //   // );
  //   // expect(await DashboardPage.getActiveProjectLabel()).toHaveText(
  //   //   "Active Projects"
  //   // );
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectDirectory();
  //   await browser.pause(5000);
  //   await DashboardPage.addEntryBtn();
  //   const firstName = await getRandomName(6);
  //   await DashboardPage.inputDirectoryFirstName(firstName);
  //   const lastName = await getRandomName(6);
  //   await DashboardPage.inputDirectoryLastName(lastName);
  //   const email = await getRandomName(6);
  //   await DashboardPage.inputDirectoryEmailAddress(email);
  //   await DashboardPage.selectDirectoryRoleOthers();
  //   await DashboardPage.selectDirectoryProfessionDropdown();
  //   const companyName = await getRandomName(7);
  //   await DashboardPage.inputDirectoryCompanyName(companyName);
  //   const randomNumbers = await getRandomNumbers(9); // Generates 10 random numbers
  //   await DashboardPage.inputDirectoryContactNumber(randomNumbers);
  //   // await DashboardPage.addEntryBtn();
  // });
  // it("Active Project Cases: Updating a Active Project Directory with First Name, Last Name & Role ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectDirectory();
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveDirectoryVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveDirectory();
  //   await browser.pause(8000);
  //   const firstName = await getRandomName(10);
  //   await DashboardPage.inputDirectoryFirstName(firstName);
  //   const lastName = await getRandomName(10);
  //   await DashboardPage.inputDirectoryLastName(lastName);
  //   await DashboardPage.selectDirectoryRoleMaincontractor();
  //   await DashboardPage.getUpdateEntryBtn();
  //   expect(await DashboardPage.getDirectoryUpdateMsg()).toHaveText(
  //     "directory updated successfully"
  //   );
  // });
  // it("Active Project Cases: Updating a Active Project Directory with Profession & Company ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectDirectory();
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveDirectoryVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveDirectory();
  //   await browser.pause(8000);
  //   const companyName = await getRandomName(10);
  //   await DashboardPage.inputDirectoryFirstName(companyName);
  //   await DashboardPage.selectDirectoryProfessionDropdown2();
  //   await DashboardPage.getUpdateEntryBtn();
  //   expect(await DashboardPage.getDirectoryUpdateMsg()).toHaveText(
  //     "directory updated successfully"
  //   );
  // });
  // it("Active Project Cases: Updating Project Settings with Name, Currency(USD) & Project Buget", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectSettings();
  //   const projectName = await getRandomName(10);
  //   await DashboardPage.inputProjectName(projectName);
  //   await DashboardPage.selectCurrencyUSD();
  //   await DashboardPage.inputProjectBudget("4000");
  //   await DashboardPage.getUpdateProjectInfoBtn();
  // });
  // it("Active Project Cases: Updating Project Settings with Site Address & Active Status", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectSettings();
  //   await browser.pause(2000);
  //   const siteAddressLetter = await getRandomLetter();
  //   await DashboardPage.inputActiveSiteAddress(siteAddressLetter);
  //   await scrollElement();
  //   await DashboardPage.selectProjectStatusCompleted();
  //   await DashboardPage.getUpdateProjectInfoBtn();
  // });
  // it("Active Project Cases: Updating Project Settings with Strat Date & End Date", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectSettings();
  //   await DashboardPage.getProjectStartDatePopUp();
  //   expect(await DashboardPage.getProjectStartDateMsg()).toHaveText(
  //     "Project Start Date"
  //   );
  //   await DashboardPage.getProjectStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await DashboardPage.getProjectStartDate(startDate);
  //   await DashboardPage.getProjectDeadlinePopUp();
  //   expect(await DashboardPage.getProjectDeadlineMsg()).toHaveText(
  //     "Project Deadline"
  //   );
  //   await DashboardPage.getProjectEndDateBtn();
  //   const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
  //   await DashboardPage.getProjectDeadline(deadline);
  //   await DashboardPage.getUpdateProjectInfoBtn();
  // });
  // it("Active Project Cases: Leave Poject in Project Settings ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectSettings();
  //   await DashboardPage.getLeaveProjectBtn();
  //   await DashboardPage.geTransferOwnershipBtn();
  // });
  // it("Active Project Cases: Delete Poject in Project Settings ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await DashboardPage.isActiveProjectVisible();
  //   await browser.pause(8000);
  //   await DashboardPage.scrollAndClickActiveProject();
  //   await browser.pause(8000);
  //   expect(await DashboardPage.getProgressBar()).toBeDisplayed();
  //   await browser.pause(8000);
  //   await scrollHorizontally();
  //   await DashboardPage.clickProjectSettings();
  //   await DashboardPage.getDeleteProjectBtn();
  // });
  it("Active Project Cases: Uploading Document", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.isActiveProjectVisible();
    await browser.pause(8000);
    await DashboardPage.scrollAndClickActiveProject();
    await browser.pause(8000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.getDocumentTab();
    await browser.pause(2000);
    await DashboardPage.uploadRandomPdfFile();
    await DashboardPage.getUploadBtn();
    await browser.pause(2000);
    // await scrollElement();
  });
  it("Active Project Cases: Adding a Task in Active Dashboard", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.isActiveProjectVisible();
    await browser.pause(8000);
    await DashboardPage.scrollAndClickActiveProject();
    await browser.pause(8000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.getActiveTasksBtn();
    await DashboardPage.getActiveCreateTaskBtn();
    const initialTitleName = await getRandomName(5);
    await DashboardPage.inputActiveTitle(initialTitleName);
    const initialDescription = await getRandomName(15);
    await DashboardPage.inputActiveDescription(initialDescription);
    await DashboardPage.selectActiveStatusToDo();
    await DashboardPage.getActiveTaskStartDatePopUp();
    await DashboardPage.getActiveTaskStartDateBtn();
    const startDate = getCurrentFormattedDate(); // MMDDYYYY format
    await DashboardPage.getActiveTaskStartDate(startDate);
    await DashboardPage.getActiveTaskDueDatePopUp();
    expect(await DashboardPage.getActiveTaskDueDateMsg()).toHaveText(
      "Task Deadline"
    );
    await DashboardPage.getActiveTaskDueDateBtn();
    const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
    await DashboardPage.getActiveTaskDeadline(deadline);
    await scrollElement();
    await DashboardPage.selectActiveAssigneeDropDown();
    await DashboardPage.getActiveAssigneeCheckBox();
    await DashboardPage.getActiveAssigneeDoneBtn();
    await DashboardPage.clickActiveLabelDropdown();
    const initialLabelName = await getRandomName(5);
    await DashboardPage.inputActiveLabel(initialLabelName);
    await DashboardPage.getActiveAddLabelBtn();
    const expectedLabel = await DashboardPage.verifyActiveLabel(
      initialLabelName
    );
    expect(initialLabelName).toBe(expectedLabel);
    await DashboardPage.getActiveLabelDoneBtn();
    await DashboardPage.addActiveChecklist("Checking");
    await DashboardPage.getActiveCreateTaskBtn();
    expect(await DashboardPage.getActiveTaskCreatedMsg()).toHaveText(
      "Task created successfully"
    );
  });
  it("Active Project Cases: Updating a created task with Name, Description, Status, Label & Checklist", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.isActiveProjectVisible();
    await browser.pause(8000);
    await DashboardPage.scrollAndClickActiveProject();
    await browser.pause(8000);
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.getActiveTasksBtn();
    expect(await DashboardPage.getProgressBar()).toBeDisplayed();
    await browser.pause(8000);
    await DashboardPage.isActiveTaskVisible();
    await browser.pause(8000);
    await DashboardPage.scrollAndClickActiveTask();
    await browser.pause(8000);
    const initialTitleName = await getRandomName(5);
    await DashboardPage.inputActiveTitle(initialTitleName);
    const initialDescription = await getRandomName(15);
    await DashboardPage.inputActiveTitle(initialDescription);
    await DashboardPage.selectActiveStatusInProgress();
    await scrollElement();
    await DashboardPage.clickActiveLabelDropdown();
    const initialLabelName = await getRandomName(5);
    await DashboardPage.inputActiveLabel(initialLabelName);
    await DashboardPage.getActiveAddLabelBtn();
    const expectedLabel = await DashboardPage.verifyActiveLabel(
      initialLabelName
    );
    expect(initialLabelName).toBe(expectedLabel);
    await DashboardPage.getActiveLabelDoneBtn();
    await DashboardPage.addActiveChecklist("Checking");
    await DashboardPage.getActiveCreateTaskBtn();
    expect(await DashboardPage.getActiveTaskUpdatedMsg()).toHaveText(
      "Task updated successfully"
    );
  });
});
