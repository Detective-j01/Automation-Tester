import Page from "../Page/page.ts";

const SELECTORS = {
  ANDROID: {
    loginText: `android=${'new UiSelector().text("Log In")'}`,
    myTasksBtn: '//android.view.ViewGroup[@content-desc="My Tasks"]',
    // btnPermission:
    //   '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
    // selectProjectForTask: `android=${""}`,
    createTaskBtn: `android=${'new UiSelector().description("Create Task")'}`,
    taskTitle: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    taskDescription: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    taskStatus: `android=${'new UiSelector().text("To do")'}`,
    selectToDo: `android=${'new UiSelector().description("To do")'}`,
    statusDropdown: `android=${'new UiSelector().className("android.widget.ImageView").instance(1)'}`,
    selectInProgress: `android=${'new UiSelector().description("In Progress")'}`,
    selectCompleted: `android=${'new UiSelector().description("Completed")'}`,
    selectBlocked: `android=${'new UiSelector().description("Blocked")'}`,
    taskDateBtn: `android=${'new UiSelector().description("typeInDate")'}`,
    // taskStartdatePopup:
    //   '(//android.view.ViewGroup[@resource-id="-container"])[1]',
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
    //android.widget.EditText[@resource-id="text-input-flat"]
    //new UiSelector().className("android.view.ViewGroup").instance(10)
    //android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]
    addChecklistBtn: `android=${'new UiSelector().resourceId("button")'}`,
    //new UiSelector().resourceId("button-container")
    //android.view.ViewGroup[@resource-id="button-container"]
    submitTaskBtn: `android=${'new UiSelector().description("Create Task")'}`,
    missingProjectMsg: `android=${'new UiSelector().description("Project can not be empty.")'}`,
    missingTitleMsg: `android=${'new UiSelector().description("Title can not be empty.")'}`,
    taskCreatedMsg: `android=${'new UiSelector().description("Task created successfully")'}`,
    projectTaskDropdownBtn:
      "//android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]/android.view.ViewGroup/android.widget.ImageView",

    //`android=${'new UiSelector().className("android.widget.EditText").instance(0)'}`,
    selectTaskProject: `android=${'new UiSelector().className("android.view.ViewGroup").instance(12)'}`,
    //"android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]",

    filterBtn: `android=${'new UiSelector().description("Filter")'}`,
    searchBar: `android=${'new UiSelector().resourceId("text-input-flat")'}`,
    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[1]
    //android.widget.EditText[@resource-id="text-input-flat"]
    filterSubmitBtn: `android=${'new UiSelector().description("Filter")'}`,
    filterStatusAny: `android=${'new UiSelector().description("Any")'}`,
    //android.view.ViewGroup[@content-desc="Any"]
    //new UiSelector().className("android.view.ViewGroup").instance(12)
    //android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]
    reasonToBlock: `android=${'new UiSelector().resourceId("text-input-flat").instance(2)'}`,
    //android.widget.EditText[@resource-id="text-input-flat"])[3]
    //new UiSelector().className("android.view.ViewGroup").instance(24)
    //android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[1]
    displayTask: `android=${'new UiSelector().className("android.view.ViewGroup").instance(15)'}`,
  },
};

class TaskPage extends Page {
  public async clickMyTasksBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.myTasksBtn)
      : driver.isIOS;
  }
  public async clickFilterBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.filterBtn)
      : driver.isIOS;
  }
  public async clickFilterSubmitBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.filterSubmitBtn)
      : driver.isIOS;
  }
  public async verifyLabel(label: string) {
    const userLabelSelector = `android=new UiSelector().text("${label}")`;
    const isLabelCreated = await this.getElementText(userLabelSelector);
    // expect(isLabelCreated).toBe(`${label}`);
    return isLabelCreated;
  }
  // public async getCreateProjectDropdown() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.projectTaskDropdownBtn)
  //     : driver.isIOS;
  // }
  // public async selectProjectForTaskdropdown() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.projectTaskDropdownBtn)
  //     : driver.isIOS;
  // }
  // public async selectTaskdropdownFirstOption() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.selectTaskProject)
  //     : driver.isIOS;
  // }
  public async selectProjectForTaskdropdown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.projectTaskDropdownBtn),
        await browser.pause(500),
        await this.clickElement(SELECTORS.ANDROID.selectTaskProject))
      : driver.isIOS;
  }
  public async inputFilterSearch(title: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.searchBar, title)
      : driver.isIOS;
  }
  public async inputTaskTitle(title: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.taskTitle, title)
      : driver.isIOS;
  }

  public async inputTaskDescription(description: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.taskDescription,
          description
        )
      : driver.isIOS;
  }

  public async clickLabelDropdown() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.labelDropdown)
      : driver.isIOS;
    // if (driver.isAndroid) {
    //   const scrollableSelector =
    //     "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
    //     'new UiSelector().className("android.widget.TextView").instance(11))';
    //   await driver.$(`android=${scrollableSelector}`);

    //   // Click the Add User button
    //   return this.clickElement(SELECTORS.ANDROID.labelDropdown);
    // } else if (driver.isIOS) {
    //   // iOS-specific logic
    //   return;
    //   // return this.getElementText(SELECTORS.IOS.projectCreatedMsg);
    // }
    // return undefined;
  }
  public async addLabel(labelName: string) {
    return driver.isAndroid
      ? await (async () => {
          // Click on the Label dropdown
          await this.clickElement(SELECTORS.ANDROID.Label);
          // Input the label name
          await this.setElementInputValue(SELECTORS.ANDROID.Label, labelName);

          // Click the Add Label button
          await this.clickElement(SELECTORS.ANDROID.addLabelBtn);
        })()
      : driver.isIOS;
  }

  public async clickDoneLabelBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.doneLabelBtn)
      : driver.isIOS;
  }

  public async selectStatusToDo() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectToDo))
      : driver.isIOS;
  }
  public async selectStatusInProgress() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectInProgress))
      : driver.isIOS;
  }
  public async selectStatusCompleted() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectCompleted))
      : driver.isIOS;
  }
  public async selectStatusBlocked() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.selectBlocked))
      : driver.isIOS;
  }
  public async inputReasonToBlock(value: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.reasonToBlock, value)
      : driver.isIOS;
  }
  public async selectFilterStatusAny() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.statusDropdown),
        await this.clickElement(SELECTORS.ANDROID.filterStatusAny))
      : driver.isIOS;
  }
  public async getTaskStartDateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskStartDateMsg)
      : driver.isIOS;
  }
  public async getTaskDueDateMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskDueDateMsg)
      : driver.isIOS;
  }
  public async getTaskStartDatePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskStartdatePopup)
      : driver.isIOS;
  }
  public async getTaskStartDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDateBtn)
      : driver.isIOS;
  }
  public async getTaskStartDate(startDate: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.inputDate, startDate)
      : driver.isIOS;
  }
  public async getTaskDueDatePopUp() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDueDatePopUp)
      : driver.isIOS;
  }

  public async getTaskDueDateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskDateBtn)
      : driver.isIOS;
  }

  public async getTaskDeadline(deadline: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.inputDate, deadline)
      : driver.isIOS;
  }
  async selectAssigneeDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.assignee),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getAssigneeCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeCheckBox)
      : driver.isIOS;
  }
  async getAssigneeDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeDoneBtn)
      : driver.isIOS;
  }
  async selectAssigneeFilterDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.assigneefilter),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getAssigneeFilterCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeCheckBox)
      : driver.isIOS;
  }
  async getAssigneeFilterDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.assigneeDoneBtn)
      : driver.isIOS;
  }
  async selectLabelFilterDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.labeFilterDropdown),
        await browser.pause(500))
      : driver.isIOS;
  }
  async getLabelFilterCheckBox() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.labelCheckBox)
      : driver.isIOS;
  }
  async getLabelFilterDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.filterDoneLabelBtn)
      : driver.isIOS;
  }
  public async inputLabel(label: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.labelInput, label)
      : driver.isIOS;
  }

  public async getAddLabelBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.addLabelBtn)
      : driver.isIOS;
  }

  public async getLabelDropdown() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.labelDropdown)
      : driver.isIOS;
  }

  public async addChecklist(checklistName: string) {
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

  public async getCreateTaskBtn() {
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

  // public async submitTask() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.submitTaskBtn)
  //     : driver.isIOS;
  // }
  public async getMissingProjectMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.missingProjectMsg)
      : driver.isIOS;
  }
  public async getTaskCreatedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.taskCreatedMsg)
      : driver.isIOS;
  }
  public async getMissingTitleMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.missingTitleMsg)
      : driver.isIOS;
  }
  public async updateTaskTitle(newTitle: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.taskTitle, newTitle)
      : driver.isIOS;
  }

  public async getTaskDisplay() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.displayTask)
      : driver.isIOS;
  }
  public async getUpdateTaskBtn() {
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
  public async getLabelDoneBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.doneBtn)
      : driver.isIOS;
  }
}

export default new TaskPage();
