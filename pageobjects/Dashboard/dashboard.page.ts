import Page from "../Page/page.ts";
import { readFileSync } from "fs";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export const SELECTORS = {
  ANDROID: {
    email: `android=${'new UiSelector().text("email@address.com")'}`,
    password: `android=${'new UiSelector().text("Must be atleast 6 characters")'}`,
    btnLogin: `android=${'new UiSelector().resourceId("button")'}`,
    btnPermission:
      '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
    loginSuccessMessage: `android=${'new UiSelector().text("Login Success")'}`,
    dashboardTextMessage: `android=${'new UiSelector().text("Dashboard")'}`,
    invalidLoginMessage: `android=${'new UiSelector().description("Invalid email/password")'}`,
    // invalidLoginMessage:
    //   '//android.widget.TextView[@text="Invalid email/password"]',
    loginText: `android=${'new UiSelector().text("Log In")'}`,
    projectName:
      '(//android.widget.EditText[@resource-id="text-input-flat"])[1]',
    projectSiteAddress: `android=${'new UiSelector().text("Enter Location")'}`,
    siteAddressDropdown:
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.HorizontalScrollView/android.view.ViewGroup',
    // `android=${'new UiSelector().className("android.view.ViewGroup").instance(21)'}`,
    //new UiSelector().className("android.view.ViewGroup").instance(23)
    activeSiteAddress: `android=${'new UiSelector().className("android.view.ViewGroup").instance(20)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup
    currencyDropdown: `android=${'new UiSelector().className("android.widget.EditText").instance(2)'}`,
    selectUSD: `android=${'new UiSelector().description("USD")'}`,
    createProjectBtn: `android=${'new UiSelector().description("Create Project")'}`,
    projectInfoMsg: `android=${'new UiSelector().text("Project info")'}`,
    projectBudget:
      '(//android.widget.EditText[@resource-id="text-input-flat"])[2]',
    projectStartDateMsg: `android=${'new UiSelector().text("Project Start Date")'}`,
    projectDeadlineMsg: `android=${'new UiSelector().text("Project Deadline")'}`,
    projectStartDatePopUp:
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView',
    projectStartDateBtn: `android=${'new UiSelector().resourceId("icon-button-container").instance(0)'}`,
    projectStartDate:
      '//android.widget.EditText[@resource-id="text-input-flat"]',
    projectDeadlinePopup:
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView',
    projectEndDateBtn: `android=${'new UiSelector().resourceId("icon-button-container").instance(0)'}`,
    projectDeadline:
      '//android.widget.EditText[@resource-id="text-input-flat"]',
    InvalidBugetMsg: `android=${'new UiSelector().description("Invalid Budget")'}`,
    projectCreatedMsg: `android=${'new UiSelector().text("Project create successfully")'}`,
    projectCancelBtn: `android=${'new UiSelector().text("Cancel")'}`,
    projectSuccessDialog: `android=${'new UiSelector().description("Project create successfully")'}`,
    projectInvalidMsg: `android=${'new UiSelector().description("Invalid Date")'}`,
    createProjectLabel: `android=${'new UiSelector().text("Create Project")'}`,
    projectSameErrorMsg: `android=${'new UiSelector().text("Project Start Date can not be greater than Project Deadline.")'}`,
    selectEUR: `android=${'new UiSelector().description("EUR")'}`,
    selectZAR: `android=${'new UiSelector().description("ZAR")'}`,
    activeProject: `android=${'new UiSelector().className("android.view.ViewGroup").instance(15)'}`,
    //android.widget.ScrollView/android.view.ViewGroup
    //new UiSelector().description("3375, Name, XyOFUEbHMa, Site Address, Zürich, Status, Active")
    //android.view.ViewGroup[@content-desc="3375, Name, XyOFUEbHMa, Site Address, Zürich, Status, Active"]
    activeDirectory: `android=${'new UiSelector().className("android.view.ViewGroup").instance(12)'}`,
    firstActiveProject: `android=${'new UiSelector().description("3262, Name, yUosEA6pC0, Site Address, Washington D.C., Status, Active")'}`,
    teambtn: `android=${'new UiSelector().description("Team")'}`,
    //android.view.ViewGroup[@content-desc="Team"]
    //`android=${'new UiSelector().text("Active Projects")'}`,
    activeProjectLabel: `android=${'new UiSelector().text("Active Projects")'}`,
    progressBar: `android=${'new UiSelector().className("android.widget.FrameLayout").instance(5)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.FrameLayout
    //`android=${'new UiSelector().className("android.widget.ProgressBar")'}`,
    activeAddMemberBtn: `android=${'new UiSelector().description("Add Member")'}`,
    //android.view.ViewGroup[@content-desc="Add Member"]
    activeProjectName: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    //android.widget.EditText[@resource-id="text-input-flat"])[1]
    //`android=${'new UiSelector().className("android.view.ViewGroup").instance(14)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]
    activeEmailAdress: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    //android.widget.EditText[@resource-id="text-input-flat"])[2]
    //`android=${'new UiSelector().className("android.view.ViewGroup").instance(18)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]
    activeProjectRoleDropdown: `android=${'new UiSelector().className("android.widget.EditText").instance(2)'}`,
    //android.widget.Button/android.view.ViewGroup/android.widget.EditText
    //new UiSelector().className("android.view.ViewGroup").instance(20)
    //android.widget.Button/android.view.ViewGroup
    activeProjectProfessionalTeam: `android=${'new UiSelector().description("Professional Team")'}`,
    //android.view.ViewGroup[@content-desc="Professional Team"]
    activeProjectMainContrator: `android=${'new UiSelector().description("Main Contractor")'}`,
    //android.view.ViewGroup[@content-desc="Main Contractor"]
    activeProjectSubContractor: `android=${'new UiSelector().description("Sub Contractor")'}`,
    //android.view.ViewGroup[@content-desc="Sub Contractor"]
    activeProjectOther: `android=${'new UiSelector().description("Other")'}`,
    //android.view.ViewGroup[@content-desc="Other"]
    activePermissionsCanViewUnapprovedDrawings: `android=${'new UiSelector().className("android.widget.Switch").instance(0)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[1]
    activePermissionsCanIssueSiteInstruction: `android=${'new UiSelector().className("android.widget.Switch").instance(1)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[2]
    activePermissionsAddProjectToDirectorty: `android=${'new UiSelector().className("android.widget.Switch").instance(2)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[3]
    activePermissionsIsThisAnAdminUser: `android=${'new UiSelector().className("android.widget.Switch").instance(3)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[4]
    activeAddSubmitBtn: `android=${'new UiSelector().description("Add")'}`,
    //android.view.ViewGroup[@content-desc="Add"]
    activeUpdateBtn: `android=${'new UiSelector().description("Update")'}`,
    //android.view.ViewGroup[@content-desc="Update"]
    removeMemberBtn: `android=${'new UiSelector().description("Remove member")'}`,
    //android.view.ViewGroup[@content-desc="Remove member"]
    activeUserInviteMsg: `android=${'new UiSelector().text("User Invited Succesfully")'}`,
    activeMissingNameMsg: `android=${'new UiSelector().description("Name is required")'}`,
    activeMissingEmailMsg: `android=${'new UiSelector().description("Email is required")'}`,
    activeMissingRoleMsg: `android=${'new UiSelector().description("Role is required")'}`,
    activeMember: `android=${'new UiSelector().className("android.view.ViewGroup").instance(15)'}`,
    roleText: `android=${'new UiSelector().text("Professional Team")'}`,
    documentsBtn: `android=${'new UiSelector().description("Documents")'}`,
    //android.view.ViewGroup[@content-desc="Documents"]
    createNewFolderBtn: `android=${'new UiSelector().description("CREATE NEW FOLDER")'}`,
    //android.widget.Button[@content-desc="CREATE NEW FOLDER"]
    folderName: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    //android.widget.EditText[@resource-id="text-input-flat"])[2]
    createFolderBtn: `android=${'new UiSelector().description("CREATE")'}`,
    uploadBtn: '//android.widget.Button[@content-desc="UPLOAD"]',
    //`android=${'new UiSelector().description("UPLOAD")'}`,
    uploadDescriptionBtn:
      '//android.widget.EditText[@resource-id="text-input-flat" and @text="Description"]',
    //`android${'new UiSelector().text("Description")'}`
    checkBoxYes: `android={'new UiSelector().className("android.widget.CheckBox").instance(0)'}`,
    //android.widget.ScrollView/android.view.ViewGroup/android.widget.CheckBox[1]
    checkBoxNo: `android=${'new UiSelector().className("android.widget.CheckBox").instance(1)'}`,
    //android.widget.ScrollView/android.view.ViewGroup/android.widget.CheckBox[2]'
    accessorsDropdown: `android=${'new UiSelector().className("android.view.ViewGroup").instance(18)'}`,
    //android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]
    accessorsdoneBtn: `android=${'new UiSelector().description("Done")'}`,
    siteInstructtionBtn: `android=${'new UiSelector().description("Site Instructions")'}`,
    isssueInstructionBtn: `android=${'new UiSelector().description("Issue Instructions")'}`,
    siteInstructionTitle: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    siteInstructionJobSite: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    siteInstructionAssigneeDropdown: `android${'new UiSelector().className("android.view.ViewGroup").instance(23)'}`,
    //android.widget.ScrollView/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup
    selectVufug: `android=${'new UiSelector().description("Vufug")'}`,
    selectHshs: `android=${'new UiSelector().description("Hshsh")'}`,
    selectJawadTestimg: `android=${'new UiSelector().description("JawadTestimg")'}`,
    selectTestingQA: `android=${'new UiSelector().description("Testing Qa")'}`,
    nextBtn: `android=${'new UiSelector().description("NEXT")'}`,
    //android.view.ViewGroup[@content-desc="NEXT"]
    CreatedMsg: `android=${'new UiSelector().description("Created Successfully")'}`,
    errorTitleMsg: `android=${'new UiSelector().description("Title is required.")'}`,
    errorJobSiteMsg: `android=${'new UiSelector().description("Job site is required.")'}`,
    errorDueDateMsg: `android=${'new UiSelector().description("Due date is required.")'}`,
    errorAssigneeMsg: `android=${'new UiSelector().description("Assignee/Issue Instruction to is required.")'}`,
    projectInfoLabel: `android=${'new UiSelector().text("Project Info")'}`,
    directoryEntry: `android=${'new UiSelector().description("Add Entry")'}`,
    directoryfirstName: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    directorylastName: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    directoryRoledropdown: `android=${'new UiSelector().className("android.widget.ImageView").instance(0)'}`,
    directoryselectProfessionalTeam: `android=${'new UiSelector().description("Professional Team")'}`,
    directoryselectMaincontractor: `android=${'new UiSelector().description("Main Contractor")'}`,
    directoryselectSubContractor: `android=${'new UiSelector().description("Sub Contractor")'}`,
    directoryselectOther: `android=${'new UiSelector().description("Other")'}`,
    directoryEmailAddress: `android=${'new UiSelector().resourceId("text-input-flat").instance(2)'}`,
    professionDropDown: `android=${'new UiSelector().className("android.view.ViewGroup").instance(23)'}`,
    // `android=${'new UiSelector().className("android.widget.ImageView").instance(0)'}`,
    softwareEngineer: `android=${'new UiSelector().description("Software Engineer")'}`,
    civilEngineer: `android=${'new UiSelector().description("Civil Engineer")'}`,
    mechanicalEnguneer: `android=${'new UiSelector().description("Mechanical Engineer")'}`,
    foreman: `android=${'new UiSelector().description("Foreman")'}`,
    agriculturalEngineering: `android=${'new UiSelector().description("Agricultural Engineer")'}`,
    consultant: `android=${'new UiSelector().description("Consultant")'}`,
    builder: `android=${'new UiSelector().description("Builder")'}`,
    architect: `android=${'new UiSelector().description("Architect")'}`,
    projectManager: `android=${'new UiSelector().description("Project Manager")'}`,
    quantitySurveyor: `android=${'new UiSelector().description("Quantity Surveyor")'}`,
    qualitySurveyor: `android=${'new UiSelector().description("Quality Engineer")'}`,
    accountant: `android=${'new UiSelector().description("Accountant")'}`,
    professionOther: `android=${'new UiSelector().description("Other")'}`,
    directoryCompany: `android=${'new UiSelector().resourceId("text-input-flat").instance(3)'}`,
    contactNoDropdown: `android=${'new UiSelector().text("Insert your phone number")'}`,
    //android.widget.EditText[@text="Insert your phone number"]
    // `android=${'new UiSelector().className("android.view.ViewGroup").instance(30)'}`,
    scrollactiveproject: `anrdroid=${'new UiSelector().className("android.view.ViewGroup").instance(15)'}`,
    assertCreateProject: `android=${'new UiSelector().text("Create Project")'}`,
    projectDirectory: `android=${'new UiSelector().description("Project Directory")'}`,
    addEntry: `android=${'new UiSelector().description("Add Entry")'}`,
    company: `android=${'new UiSelector().resourceId("text-input-flat").instance(3)'}`,
    projectSettings: `android=${'new UiSelector().description("Project Settings")'}`,
    updateProjectInfoBtn: `android=${'new UiSelector().description("Update Project Info")'}`,
    projectStatusDropdown: `android=${'new UiSelector().className("android.widget.Button").instance(3)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.Button
    selectStatusCompleted: `android=${'new UiSelector().description("Completed")'}`,
    leaveProjectBtn: `android=${'new UiSelector().description("Leave Project")'}`,
    deleteProjectBtn: `android=${'new UiSelector().description("Delete Project")'}`,
    transferOwnershipBtn: `android=${'new UiSelector().description("Transfer Onwership")'}`,
    updateEntryBtn: `android=${'new UiSelector().description("Update Entry")'}`,
    directoryUpdatedMsg: `android=${'new UiSelector().description("directory updated successfully")'}`,
    phoneStorageMenu: `android=${'new UiSelector().description("Show roots")'}`,
    internalStorage: `android=${'new UiSelector().className("android.widget.LinearLayout").instance(20)'}`,
    //new UiSelector().resourceId("android:id/icon").instance(3)
    //(//android.widget.ImageView[@resource-id="android:id/icon"])[4]
    searchDocumentBtn: `android=${'new UiSelector().className("androidx.cardview.widget.CardView").instance(5)'}`,
    // new UiSelector().className("android.widget.LinearLayout").instance(9)
    searchDocument: ` android=${'new UiSelector().resourceId("com.google.android.documentsui:id/search_src_text")'}`,
    pdfFilePicker: `android=${'new UiSelector().description("Upload PDF File Here")'}`,
    selectPdfFile: `android=${'new UiSelector().resourceId("com.google.android.documentsui:id/item_root").instance(0)'}`,
    //new UiSelector().resourceId("com.google.android.documentsui:id/item_root").instance(0)
    //new UiSelector().className("android.view.View").instance(0)
    //`android=${'new UiSelector().className("android.widget.LinearLayout").instance(10)'}`,
    documentTab: `android=${'new UiSelector().text("Documents")'}`,
    documents: `android=${'new UiSelector().className("android.widget.LinearLayout").instance(10)'}`,
    activeTasksBtn: `android=${'new UiSelector().description("Tasks")'}`,
    activeCreateTasksBtn: `android=${'new UiSelector().description("Create Task")'}`,
    statusDropdown: `android=${'new UiSelector().className("android.view.ViewGroup").instance(20)'}`,
    selectInProgress: `android=${'new UiSelector().description("In Progress")'}`,
    selectCompleted: `android=${'new UiSelector().description("Completed")'}`,
    selectBlocked: `android=${'new UiSelector().description("Blocked")'}`,
    selectToDo: `android=${'new UiSelector().description("To do")'}`,
    taskStartdatePopup:
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup",
    taskStartDateMsg: `android=${'new UiSelector().resourceId("text-input-flat")'}`,
    // labelDropdown: `android=${'new UiSelector().className("android.widget.TextView").instance(12)'}`,
    Label: `android=${'new UiSelector().className("android.widget.EditText")'}`,
    //android.widget.EditText
    addLabelBtn: `android=${'new UiSelector().description("Add")'}`,
    //android.view.ViewGroup[@content-desc="Add"]
    doneLabelBtn: `android=${'new UiSelector().description("Done")'}`,
    //android.view.ViewGroup[@content-desc="Done"]
    taskDate: `android=${'new UiSelector().description("typeInDate")'}`,
    taskDueDatePopUp: `android=${'new UiSelector().resourceId("-container").instance(1)'}`,
    taskDueDateBtn: `android=${'new UiSelector().description("typeInDate")'}`,
    inputDate: `//android.widget.EditText[@resource-id="text-input-flat"]`,
    taskDueDateMsg: '//android.widget.EditText[@resource-id="text-input-flat"]',
    assignee: `android=${'new UiSelector().className("android.widget.TextView").instance(10)'}`,
    //android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView,
    assigneefilter: `android=${'new UiSelector().className("android.widget.TextView").instance(8)'}`,
    assigneeCheckBox: `android=${'new UiSelector().className("android.widget.CheckBox")'}`,
    //android.widget.CheckBox
    assigneeDoneBtn: `android=${'new UiSelector().description("Done")'}`,
    labelInput: "//android.widget.EditText",
    //`android=${'new UiSelector().className("android.widget.EditText")'}`,
    doneBtn: `android=${'new UiSelector().description("Done")'}`,
    //android.view.ViewGroup[@content-desc="Done"]
    labelDropdown: `android=${'new UiSelector().className("android.widget.TextView").instance(12)'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView
    labeFilterDropdown: `android=${'new UiSelector().className("android.widget.TextView").instance(5)'}`,
    filterDoneLabelBtn: `android=${'new UiSelector().description("Done")'}`,
    labelCheckBox: `android=${'new UiSelector().className("android.widget.CheckBox")'}`,
    //android.widget.CheckBox
    checklistBtn: `android=${'new UiSelector().description(" Add Checklist")'}`,
    //android.view.ViewGroup[@content-desc=" Add Checklist"]
    addChecklistInput: `android=${'new UiSelector().resourceId("text-input-flat")'}`,
    addChecklistBtn: `android=${'new UiSelector().resourceId("button")'}`,
    submitTaskBtn: `android=${'new UiSelector().description("Create Task")'}`,
    taskDateBtn: `android=${'new UiSelector().description("typeInDate")'}`,
    createTaskBtn: `android=${'new UiSelector().description("Create Task")'}`,
    taskCreatedMsg: `android=${'new UiSelector().description("Task created successfully")'}`,
    taskUpdatedMsg: `android=${'new UiSelector().description("Task updated successfully")'}`,
    activetaskTitle: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    activetaskDescription: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    activeTask: `android=${'new UiSelector().className("android.view.ViewGroup").instance(11)'}`,
    projectSuccessDialog1: `android=${'new UiSelector().description("Project create successfully")'}`,
  },

  //   IOS: {},
};

class DashboardPage extends Page {
  public async inputProjectName(projectName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.projectName,
          projectName
        )
      : driver.isIOS;
  }

  public async getProjectDialog() {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.projectSuccessDialog)
      : driver.isIOS;
  }
  public async getCreateProjectLabel() {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.createProjectLabel)
      : driver.isIOS;
  }
  public async getProgressBar() {
    return driver.isAndroid
      ? await this.getElement(SELECTORS.ANDROID.progressBar)
      : driver.isIOS;
  }

  public async inputProjectSiteAddress(projectName: string) {
    if (driver.isAndroid) {
      // Click the address field to focus on it
      await this.clickElement(SELECTORS.ANDROID.projectSiteAddress);

      // Wait for the field to be focused
      await browser.pause(1000); // Adjust based on actual behavior

      // Type each character one by one
      for (const letter of projectName) {
        // Add the letter to the field
        await this.addElementInputValue(
          SELECTORS.ANDROID.projectSiteAddress,
          letter
        );

        // Wait for a short period to simulate a natural typing pace
        await browser.pause(300); // Adjust the timing as necessary
      }
    }
  }
  public async inputActiveSiteAddress(projectName: string) {
    if (driver.isAndroid) {
      // Click the address field to focus on it
      await this.clickElement(SELECTORS.ANDROID.activeSiteAddress);

      // Wait for the field to be focused
      await browser.pause(1000); // Adjust based on actual behavior
      await this.addElementInputValue(
        SELECTORS.ANDROID.activeSiteAddress,
        "pakistan"
      );
      // Clear the existing text from the field
      //await this.clearElement(SELECTORS.ANDROID.activeSiteAddress);

      // Wait for a short period to ensure the field is cleared
      await browser.pause(500); // Adjust based on actual behavior

      // Type each character one by one
      for (const letter of projectName) {
        // Add the letter to the field
        await this.addElementInputValue(
          SELECTORS.ANDROID.activeSiteAddress,
          letter
        );

        // Wait for a short period to simulate a natural typing pace
        await browser.pause(300); // Adjust the timing as necessary
      }
    }
  }

  //Implement the clearElement method
  public async clearElement(selector: string) {
    const element = await $(selector);
    await element.setValue(""); // This will clear the field
  }

  public async selectSiteAddressDropDown() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.siteAddressDropdown)
      : driver.isIOS;
  }
  public async selectCurrencyUSD() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.currencyDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectUSD))
      : driver.isIOS;
  }

  public async selectCurrencyEUR() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.currencyDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectEUR))
      : driver.isIOS;
  }
  public async selectCurrencyZAR() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.currencyDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectZAR))
      : driver.isIOS;
  }

  public async inputProjectBudget(projectBudget: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.projectBudget,
          projectBudget
        )
      : driver.isIOS;
  }
  public async inputProjectBudgetFloat(projectBudget: string) {
    // Ensure the budget is in a decimal format
    const formattedBudget = Number(projectBudget).toFixed(2);

    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.projectBudget,
          formattedBudget
        )
      : driver.isIOS;
  }
  public async getCreateProjectBtn() {
    return driver.isAndroid
      ? await (async () => {
          // Scroll to the Add User button
          const scrollableSelector =
            "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
            'new UiSelector().description("Create Project"))';
          await driver.$(`android=${scrollableSelector}`);

          // Click the Add User button
          return this.clickElement(SELECTORS.ANDROID.createProjectBtn);
        })()
      : driver.isIOS; // Add iOS logic here if needed
  }
  public async getProjectInfoMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectInfoMsg)
      : driver.isIOS;
  }
  public async getProjectStartDateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectStartDateMsg)
      : driver.isIOS;
  }
  public async getProjectDeadlineMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectDeadlineMsg)
      : driver.isIOS;
  }
  public async getProjectStartDatePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectStartDatePopUp)
      : driver.isIOS;
  }
  public async getProjectStartDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectStartDateBtn)
      : driver.isIOS;
  }
  public async getProjectStartDate(startDate: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.projectStartDate,
          startDate
        )
      : driver.isIOS;
  }
  public async getProjectDeadlinePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectDeadlinePopup)
      : driver.isIOS;
  }

  public async getProjectEndDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectEndDateBtn)
      : driver.isIOS;
  }

  public async getProjectDeadline(deadline: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.projectDeadline,
          deadline
        )
      : driver.isIOS;
  }
  public async getInvalidBugetMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.InvalidBugetMsg)
      : driver.isIOS;
  }

  // public async getProjectCreatedMsg() {
  //   if (driver.isAndroid) {
  //     await browser.pause(800); // Optional pause
  //     return this.getElementText(SELECTORS.ANDROID.projectCreatedMsg);
  //   } else if (driver.isIOS) {
  //     // iOS-specific logic
  //     return;
  //     // return this.getElementText(SELECTORS.IOS.projectCreatedMsg);
  //   }
  //   return undefined;
  // }

  public async getProjectCancelBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectCancelBtn)
      : driver.isIOS;
  }
  public async getProjectInvalidMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectInvalidMsg)
      : driver.isIOS;
  }
  public async getProjectSameDateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectSameErrorMsg)
      : driver.isIOS;
  }

  public async isActiveProjectVisible() {
    await browser.pause(1000);
    const activeProject = await driver.$(SELECTORS.ANDROID.activeProject);
    const isVisible = await activeProject.isDisplayed();
    console.log(`Active Project visible: ${isVisible}`);
    return isVisible;
  }
  public async isActiveDirectoryVisible() {
    await browser.pause(1000);
    const activeDirectory = await driver.$(SELECTORS.ANDROID.activeDirectory);
    const isVisible = await activeDirectory.isDisplayed();
    console.log(`Active Directory visible: ${isVisible}`);
    return isVisible;
  }

  public async getActiveProjectLabel() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.activeProjectLabel)
      : driver.isIOS;
  }
  public async getMemberName(memberName: string) {
    const memberNameSelector = `android=new UiSelector().text("${memberName}")`;
    const isNameCreated = await this.getElementText(memberNameSelector);
    return isNameCreated;
  }
  public async scrollAndClickActiveProject() {
    const scrollableSelector =
      "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
      'new UiSelector().className("android.view.ViewGroup").instance(15));';
    const activeProject = await driver.$(`android=${scrollableSelector}`);
    await activeProject.waitForDisplayed({ timeout: 5000 });
    await activeProject.click();
  }
  public async scrollAndClickActiveDirectory() {
    const scrollableSelector =
      "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
      'new UiSelector().className("android.view.ViewGroup").instance(12));';
    const activeProjectDir = await driver.$(`android=${scrollableSelector}`);
    await activeProjectDir.waitForDisplayed({ timeout: 5000 });
    await activeProjectDir.click();
  }
  public async isActiveTeamMemberVisible() {
    await browser.pause(2000);
    const activeProject = await driver.$(SELECTORS.ANDROID.activeMember);
    const isVisible = await activeProject.isDisplayed();
    console.log(`Active Project visible: ${isVisible}`);
    return isVisible;
  }
  public async scrollAndClickActiveMember() {
    // const scrollableSelector =
    //   "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
    //   'new UiSelector().className("android.view.ViewGroup").instance(15));';
    // const activeProject = await driver.$(`android=${scrollableSelector}`);
    // await activeProject.waitForDisplayed({ timeout: 5000 });
    // await activeProject.click();
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.scrollactiveproject)
      : driver.isIOS;
  }
  public async getTeamBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.teambtn))
      : driver.isIOS;
  }
  public async getDocumentBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.documentsBtn))
      : driver.isIOS;
  }
  public async getCreateBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.createFolderBtn))
      : driver.isIOS;
  }
  public async getAddMemberBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.activeAddMemberBtn))
      : driver.isIOS;
  }
  public async getCreateNewFolderBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.createNewFolderBtn))
      : driver.isIOS;
  }
  public async getUploadBtn() {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.clickElement(SELECTORS.ANDROID.uploadBtn))
      : driver.isIOS;
  }
  public async selectRestrictedDocumentOptionYes() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.checkBoxYes)
      : driver.isIOS;
  }
  public async clickAccessorsDropdown() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.accessorsDropdown)
      : driver.isIOS;
  }
  public async getAccessorsDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.accessorsdoneBtn)
      : driver.isIOS;
  }
  public async selectRestrictedDocumentOptionNo() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.checkBoxNo)
      : driver.isIOS;
  }
  public async inputActiveProjectTeamName(teamProjectName: string) {
    return driver.isAndroid
      ? (await browser.pause(2000),
        await this.setElementInputValue(
          SELECTORS.ANDROID.activeProjectName,
          teamProjectName
        ))
      : driver.isIOS;
  }
  public async inputActiveProjectTeamEmail(teamEmailAddress: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.activeEmailAdress,
          teamEmailAddress
        )
      : driver.isIOS;
  }
  public async inputDocumentFolderName(document: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.folderName, document)
      : driver.isIOS;
  }
  public async inputDocumentUploadDescription(description: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.uploadDescriptionBtn,
          description
        )
      : driver.isIOS;
  }
  public async selectActiveProjectRoleProfessionalTeam() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.activeProjectRoleDropdown);
      await this.clickElement(SELECTORS.ANDROID.activeProjectProfessionalTeam);
    }
  }
  public async selectActiveProjectRoleMainContractor() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.activeProjectRoleDropdown);
      await this.clickElement(SELECTORS.ANDROID.activeProjectMainContrator);
    }
  }
  public async selectActiveProjectRoleSubContractor() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.activeProjectRoleDropdown);
      await this.clickElement(SELECTORS.ANDROID.activeProjectSubContractor);
    }
  }
  public async selectActiveProjectRoleOther() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.activeProjectRoleDropdown);
      await this.clickElement(SELECTORS.ANDROID.activeProjectOther);
    }
  }
  public async getActivePermissionsCanViewUnapprovedDrawings() {
    return driver.isAndroid
      ? await this.clickElement(
          SELECTORS.ANDROID.activePermissionsCanViewUnapprovedDrawings
        )
      : driver.isIOS;
  }
  public async getActivePermissionsCanIssueSiteInstruction() {
    return driver.isAndroid
      ? await this.clickElement(
          SELECTORS.ANDROID.activePermissionsCanIssueSiteInstruction
        )
      : driver.isIOS;
  }
  public async getActivePermissionsAddProjectToDirectorty() {
    return driver.isAndroid
      ? await this.clickElement(
          SELECTORS.ANDROID.activePermissionsAddProjectToDirectorty
        )
      : driver.isIOS;
  }
  public async getActivePermissionsIsThisAnAdminUser() {
    return driver.isAndroid
      ? await this.clickElement(
          SELECTORS.ANDROID.activePermissionsIsThisAnAdminUser
        )
      : driver.isIOS;
  }
  public async getAddSubmitBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.activeAddSubmitBtn)
      : driver.isIOS;
  }
  public async getActiveRemoveBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.removeMemberBtn)
      : driver.isIOS;
  }
  public async getActiveUpdateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.activeAddSubmitBtn)
      : driver.isIOS;
  }
  public async getActiveUserInvitedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.activeUserInviteMsg)
      : driver.isIOS;
  }
  public async getActiveMissingNameMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.activeMissingNameMsg)
      : driver.isIOS;
  }
  public async getActiveMissingEmailMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.activeMissingEmailMsg)
      : driver.isIOS;
  }
  public async getActiveMissingRoleMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.activeMissingRoleMsg)
      : driver.isIOS;
  }
  public async verifyCreatedTeamMember(
    memberName: string,
    memberEmail: string,
    memberRole: string
  ) {
    const memberLabelSelector = `android=new UiSelector().description("${
      "Name, " +
      memberName +
      ", Email, " +
      memberEmail +
      ", Role, " +
      memberRole
    }")`;
    const element = await $(memberLabelSelector);
    await element.waitForDisplayed({ timeout: 15000 });
    const isMemberCreated = await this.getElementText(memberLabelSelector);
    console.log("expectednameIs", isMemberCreated);
    return isMemberCreated.toString();
  }
  public async getRoleText() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.roleText)
      : driver.isIOS;
  }
  // new UiSelector().description("Name, Vufug, Email, hchcucuc, Role, Professional Team")

  public async clickSiteInstruction() {
    const scrollView =
      'new UiSelector().className("android.widget.HorizontalScrollView")';
    const targetDescription = "Site Instruction";

    // Create a UiScrollable object for the horizontal scroll view
    const scrollableElement = `android=new UiScrollable(${scrollView}).setAsHorizontalList()`;

    // Perform dynamic scrolling by 50%
    let isElementFound = false;
    let maxScrolls = 10; // Set a reasonable limit to avoid infinite scrolling

    for (let i = 0; i < maxScrolls; i++) {
      try {
        // Attempt to find the element and click
        const element = await $(
          `android=new UiSelector().description("${targetDescription}")`
        );
        if (await element.isDisplayed()) {
          await element.click();
          isElementFound = true;
          break;
        }
      } catch (error) {
        console.log("Element not found in this scroll. Scrolling further...");
      }

      // Scroll by 50% horizontally
      await driver.execute("mobile: scroll", {
        direction: "left",
        element: await $(scrollableElement).elementId,
        percent: 0.5, // Scroll by 50%
      });

      // Add a pause between scrolls to wait for UI to settle
      await driver.pause(1000);
    }

    if (!isElementFound) {
      throw new Error(
        `Element with description "${targetDescription}" not found after ${maxScrolls} scrolls.`
      );
    }
  }
  public async getSiteInstruction() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.siteInstructtionBtn)
      : driver.isIOS;
  }
  public async getIssueInstruction() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.isssueInstructionBtn)
      : driver.isIOS;
  }
  public async inputSiteInstructionTitle(title: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.siteInstructionTitle,
          title
        )
      : driver.isIOS;
  }
  public async inputSiteInstructionJobSite(jobSite: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.siteInstructionJobSite,
          jobSite
        )
      : driver.isIOS;
  }
  public async selectSiteInstructionAssigneeDropdownVufug() {
    return driver.isAndroid
      ? (await this.clickElement(
          SELECTORS.ANDROID.siteInstructionAssigneeDropdown
        ),
        await this.clickElement(SELECTORS.ANDROID.selectVufug))
      : driver.isIOS;
  }
  public async selectSiteInstructionAssigneeDropdownHshs() {
    return driver.isAndroid
      ? (await this.clickElement(
          SELECTORS.ANDROID.siteInstructionAssigneeDropdown
        ),
        await this.clickElement(SELECTORS.ANDROID.selectHshs))
      : driver.isIOS;
  }
  public async selectSiteInstructionAssigneeDropdownJawadTestimg() {
    return driver.isAndroid
      ? (await this.clickElement(
          SELECTORS.ANDROID.siteInstructionAssigneeDropdown
        ),
        await this.clickElement(SELECTORS.ANDROID.selectJawadTestimg))
      : driver.isIOS;
  }
  public async selectSiteInstructionAssigneeDropdownTestinQA() {
    return driver.isAndroid
      ? (await this.clickElement(
          SELECTORS.ANDROID.siteInstructionAssigneeDropdown
        ),
        await this.clickElement(SELECTORS.ANDROID.selectTestingQA))
      : driver.isIOS;
  }
  public async getNextBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.nextBtn)
      : driver.isIOS;
  }
  public async getSiteInstructionCreatedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.CreatedMsg)
      : driver.isIOS;
  }
  public async getSiteInstructionTitleErrorMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.errorTitleMsg)
      : driver.isIOS;
  }
  public async getSiteInstructionJobSiteErrorMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.errorJobSiteMsg)
      : driver.isIOS;
  }
  public async getSiteInstructionCDueDateErrorMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.errorDueDateMsg)
      : driver.isIOS;
  }
  public async getSiteInstructionAssigneeErrorMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.errorAssigneeMsg)
      : driver.isIOS;
  }
  public async getProjectInfoLabel() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.projectInfoLabel)
      : driver.isIOS;
  }

  public async inputDirectoryFirstName(firstName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.directoryfirstName,
          firstName
        )
      : driver.isIOS;
  }
  public async inputDirectoryLastName(directoryName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.directorylastName,
          directoryName
        )
      : driver.isIOS;
  }
  public async inputDirectoryEmailAddress(email: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.directoryEmailAddress,
          email
        )
      : driver.isIOS;
  }
  public async selectDirectoryProfessionalRole() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.directoryRoledropdown);
      await this.clickElement(
        SELECTORS.ANDROID.directoryselectProfessionalTeam
      );
    }
  }
  public async selectDirectoryRoleMaincontractor() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.directoryRoledropdown);
      await this.clickElement(SELECTORS.ANDROID.directoryselectMaincontractor);
    }
  }
  public async selectDirectoryRoleSubcontractor() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.directoryRoledropdown);
      await this.clickElement(SELECTORS.ANDROID.directoryselectSubContractor);
    }
  }
  public async selectDirectoryRoleOthers() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.directoryRoledropdown);
      await this.clickElement(SELECTORS.ANDROID.directoryselectOther);
    }
  }
  public async getAssertCreateProject() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.assertCreateProject)
      : driver.isIOS;
  }
  public async clickProjectDirectory() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectDirectory)
      : driver.isIOS;
  }
  public async clickProjectSettings() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectSettings)
      : driver.isIOS;
  }
  public async selectDirectoryProfessionDropdown() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.professionDropDown);
      await this.clickElement(SELECTORS.ANDROID.builder);
    }
  }
  public async selectDirectoryProfessionDropdown2() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.professionDropDown);
      await this.clickElement(SELECTORS.ANDROID.foreman);
    }
  }
  public async inputDirectoryContactNumber(contactNumber: string) {
    if (driver.isAndroid) {
      // Click the contact number field to focus on it
      await this.clickElement(SELECTORS.ANDROID.contactNoDropdown);

      // Wait for the field to be focused
      await browser.pause(1000); // Adjust based on actual behavior

      // Type each digit one by one
      for (const digit of contactNumber) {
        // Add the digit to the field
        await this.addElementInputValue(
          SELECTORS.ANDROID.contactNoDropdown,
          digit
        );

        // Wait for a short period to simulate a natural typing pace
        await browser.pause(300); // Adjust the timing as necessary
      }
    }
  }

  // public async inputDirectoryContactNo(randomNumbers: string) {
  //   await browser.pause(500);
  //   return driver.isAndroid
  //     ? (await this.clickElement(SELECTORS.ANDROID.contactNoDropdown),
  //       await browser.pause(500))
  //     : driver.isIOS;
  // }
  public async addEntryBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.addEntry)
      : driver.isIOS;
  }
  public async inputDirectoryCompanyName(CompanyName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.company, CompanyName)
      : driver.isIOS;
  }
  public async getUpdateProjectInfoBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.updateProjectInfoBtn)
      : driver.isIOS;
  }
  public async selectProjectStatusCompleted() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.projectStatusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectStatusCompleted))
      : driver.isIOS;
  }
  public async getLeaveProjectBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.leaveProjectBtn)
      : driver.isIOS;
  }
  public async getDeleteProjectBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.deleteProjectBtn)
      : driver.isIOS;
  }
  public async getTransferOwnershipBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.transferOwnershipBtn)
      : driver.isIOS;
  }
  public async getUpdateEntryBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.updateEntryBtn)
      : driver.isIOS;
  }
  public async getDirectoryUpdateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.directoryUpdatedMsg)
      : driver.isIOS;
  }
  public async getPhoneStorageMenu() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.phoneStorageMenu)
      : driver.isIOS;
  }
  public async getPhoneInternalStorage() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.internalStorage)
      : driver.isIOS;
  }
  public async searchUploadedDocument(document: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.searchDocument,
          document
        )
      : driver.isIOS;
  }
  public async getSearchDocumentBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.searchDocumentBtn)
      : driver.isIOS;
  }
  public async getDocumentsBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.documents)
      : driver.isIOS;
  }
  public async getPDFFilePicker() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.pdfFilePicker)
      : driver.isIOS;
  }
  public async selectUploadedDocument() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.selectPdfFile)
      : driver.isIOS;
  }
  public async getUploadedPdfFile(fileName: string) {
    const pdfFileSelector = `android = new UiSelector().text("${fileName}")`;
    const isFileUploaded = await this.getElementText(pdfFileSelector);
    return isFileUploaded;
  }
  public async getDocumentTab() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.documentTab)
      : driver.isIOS;
  }
  public async uploadRandomPdfFile() {
    let fileName: string;

    // Generate a random UUID and use it in the file name
    const uniqueId = uuidv4(); // Generate a random UUID
    fileName = `sample_drawing_${uniqueId}.pdf`; // Append the UUID to the file name

    if (driver.isAndroid) {
      // Read and convert the PDF file to base64
      const pdfFileContent = readFileSync(
        join(process.cwd(), "files/sample_drawing.pdf"),
        "base64"
      );

      // Push the file to /sdcard/Download instead of /mnt/sdcard/Download
      await driver.pushFile(`/sdcard/Document/${fileName}`, pdfFileContent);

      // Click on the upload button to open the file picker
      await this.getPDFFilePicker();
      await this.getPhoneStorageMenu();
      await this.getPhoneInternalStorage();
      await browser.pause(1000);
      await this.getSearchDocumentBtn();
      await this.searchUploadedDocument(fileName);
      await browser.pause(3000);
      await this.selectUploadedDocument();
      const expectedFile = await this.getUploadedPdfFile(fileName);
      expect(fileName).toBe(expectedFile);
      await this.getUploadBtn();
      await browser.pause(4000);
    } else if (driver.isIOS) {
      // Handle iOS file upload if needed
    }
  }
  public async getActiveTasksBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.activeTasksBtn)
      : driver.isIOS;
  }
  public async selectActiveStatusToDo() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectToDo))
      : driver.isIOS;
  }
  public async selectActiveStatusInProgress() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectInProgress))
      : driver.isIOS;
  }
  public async getActiveTaskStartDatePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskStartdatePopup)
      : driver.isIOS;
  }
  public async getActiveTaskStartDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDateBtn)
      : driver.isIOS;
  }
  public async getActiveTaskStartDate(startDate: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.inputDate, startDate)
      : driver.isIOS;
  }
  public async getActiveTaskDueDatePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDueDatePopUp)
      : driver.isIOS;
  }

  public async getActiveTaskDueDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDateBtn)
      : driver.isIOS;
  }

  public async getActiveTaskDeadline(deadline: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.inputDate, deadline)
      : driver.isIOS;
  }
  async selectActiveAssigneeDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.assignee),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getActiveAssigneeCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeCheckBox)
      : driver.isIOS;
  }
  async getActiveAssigneeDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeDoneBtn)
      : driver.isIOS;
  }
  async selectActiveAssigneeFilterDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.assigneefilter),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getActiveAssigneeFilterCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeCheckBox)
      : driver.isIOS;
  }
  async getActiveAssigneeFilterDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeDoneBtn)
      : driver.isIOS;
  }
  async selectActiveLabelFilterDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.labeFilterDropdown),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getActiveLabelFilterCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.labelCheckBox)
      : driver.isIOS;
  }
  async getActiveLabelFilterDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.filterDoneLabelBtn)
      : driver.isIOS;
  }
  public async inputActiveLabel(label: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.labelInput, label)
      : driver.isIOS;
  }

  public async getActiveAddLabelBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.addLabelBtn)
      : driver.isIOS;
  }

  public async getActiveLabelDropdown() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.labelDropdown)
      : driver.isIOS;
  }

  public async addActiveChecklist(checklistName: string) {
    return driver.isAndroid
      ? await (async () => {
          // Click on the Checklist button to open the popup
          await this.clickElement(SELECTORS.ANDROID.checklistBtn);

          // Add checklist name
          await this.setElementInputValue(
            SELECTORS.ANDROID.addChecklistInput,
            checklistName
          );

          // Click the Add Checklist button
          await this.clickElement(SELECTORS.ANDROID.addChecklistBtn);
        })()
      : driver.isIOS;
  }
  public async getActiveTaskDueDateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskDueDateMsg)
      : driver.isIOS;
  }
  public async clickActiveLabelDropdown() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.labelDropdown)
      : driver.isIOS;
  }
  public async verifyActiveLabel(label: string) {
    const userLabelSelector = `android=new UiSelector().text("${label}")`;
    const isLabelCreated = await this.getElementText(userLabelSelector);
    // expect(isLabelCreated).toBe(`${label}`);
    return isLabelCreated;
  }
  public async getActiveLabelDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.doneBtn)
      : driver.isIOS;
  }
  public async getActiveCreateTaskBtn() {
    return driver.isAndroid
      ? await (async () => {
          // Scroll to the Add User button
          const scrollableSelector =
            "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
            'new UiSelector().description("Create Task"))';
          await driver.$(`android=${scrollableSelector}`);

          // Click the Add User button
          return this.clickElement(SELECTORS.ANDROID.createTaskBtn);
        })()
      : driver.isIOS; // Add iOS logic here if needed
  }
  public async getActiveTaskCreatedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskCreatedMsg)
      : driver.isIOS;
  }
  public async getActiveTaskUpdatedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskUpdatedMsg)
      : driver.isIOS;
  }
  public async inputActiveTitle(title: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.activetaskTitle,
          title
        )
      : driver.isIOS;
  }

  public async inputActiveDescription(description: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.activetaskDescription,
          description
        )
      : driver.isIOS;
  }
  public async isActiveTaskVisible() {
    await browser.pause(1000);
    const activeProject = await driver.$(SELECTORS.ANDROID.activeTask);
    const isVisible = await activeProject.isDisplayed();
    console.log(`Active Task visible: ${isVisible}`);
    return isVisible;
  }
  public async scrollAndClickActiveTask() {
    const scrollableSelector =
      "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
      'new UiSelector().className("android.view.ViewGroup").instance(11));';
    const activeProject = await driver.$(`android=${scrollableSelector}`);
    await activeProject.waitForDisplayed({ timeout: 5000 });
    await activeProject.click();
  }
  public async getActiveUpdateTaskBtn() {
    return driver.isAndroid
      ? await (async () => {
          // Scroll to the Add User button
          const scrollableSelector =
            "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
            'new UiSelector().description("Update Task")';
          await driver.$(`android=${scrollableSelector}`);

          // Click the Add User button
          return this.clickElement(SELECTORS.ANDROID.createTaskBtn);
        })()
      : driver.isIOS; // Add iOS logic here if needed
  }
  public async getProjectCreatedMsg() {
    //
    const activeProject = await driver.$(
      SELECTORS.ANDROID.projectSuccessDialog1
    );
    const isVisible = await activeProject.isDisplayed();
    return isVisible;
  }
}

export default new DashboardPage();
