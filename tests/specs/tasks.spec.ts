import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";
import tasksPage from "../../pageobjects/Tasks/tasks.page.ts";
import TaskPage from "../../pageobjects/Tasks/tasks.page.ts";

import {
  getRandomName,
  getCurrentFormattedDate,
  getNextFormattedDate,
  scrollElement,
} from "../../pageobjects/Utils/utils.ts";
describe("Task management functionality", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Should Create a new task with Status (To Do)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await TaskPage.clickMyTasksBtn();
    await TaskPage.getCreateTaskBtn();
    await TaskPage.selectProjectForTaskdropdown();
    await TaskPage.inputTaskTitle("New Task 1");
    await TaskPage.inputTaskDescription("Task Description");
    await TaskPage.selectStatusToDo();
    await TaskPage.getTaskStartDatePopUp();
    await TaskPage.getTaskStartDateBtn();
    const startDate = getCurrentFormattedDate(); // MMDDYYYY format
    await TaskPage.getTaskStartDate(startDate);
    await TaskPage.getTaskDueDatePopUp();
    expect(await TaskPage.getTaskDueDateMsg()).toHaveText("Task Deadline");
    await TaskPage.getTaskDueDateBtn();
    const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
    await TaskPage.getTaskDeadline(deadline);
    await scrollElement();
    await TaskPage.selectAssigneeDropDown();
    await TaskPage.getAssigneeCheckBox();
    await TaskPage.getAssigneeDoneBtn();
    await TaskPage.clickLabelDropdown();
    const initialLabelName = await getRandomName(5);
    await TaskPage.inputLabel(initialLabelName);
    await TaskPage.getAddLabelBtn();
    const expectedLabel = await TaskPage.verifyLabel(initialLabelName);
    expect(initialLabelName).toBe(expectedLabel);
    await TaskPage.getLabelDoneBtn();
    await TaskPage.addChecklist("Checking");
    await TaskPage.getCreateTaskBtn();
    expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
      "Task created successfully"
    );
  });

  // it("Should Create a new task with Status (In Progress)", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 2");
  //   await TaskPage.inputTaskDescription("Task Description 2");
  //   await TaskPage.selectStatusInProgress();
  //   await TaskPage.getTaskStartDatePopUp();
  //   await TaskPage.getTaskStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await TaskPage.getTaskStartDate(startDate);
  //   await TaskPage.getTaskDueDatePopUp();
  //   // expect(await TaskPage.getTaskDueDateMsg()).toHaveText("Task Deadline");
  //   await TaskPage.getTaskDueDateBtn();
  //   const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
  //   await TaskPage.getTaskDeadline(deadline);
  //   // await scrollElement();
  //   // await TaskPage.clickLabelDropdown();
  //   // const initialLabelName = await getRandomName(5);
  //   // await TaskPage.inputLabel(initialLabelName);
  //   // await TaskPage.getAddLabelBtn();
  //   // const expectedLabel = await TaskPage.verifyLabel(initialLabelName);
  //   // expect(initialLabelName).toBe(expectedLabel);
  //   // const dropdownLabels = await TaskPage.getLabelDropdown();
  //   // await TaskPage.inputLabel("Urgent");
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });

  // it("Should Create a new task with Status (Completed)", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 3");
  //   await TaskPage.inputTaskDescription("Task Description 3");
  //   await TaskPage.selectStatusCompleted();
  //   await TaskPage.getTaskStartDatePopUp();
  //   await TaskPage.getTaskStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await TaskPage.getTaskStartDate(startDate);
  //   await TaskPage.getTaskDueDatePopUp();
  //   // expect(await TaskPage.getTaskDueDateMsg()).toHaveText("Task Deadline");
  //   await TaskPage.getTaskDueDateBtn();
  //   const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
  //   await TaskPage.getTaskDeadline(deadline);
  //   // await scrollElement();
  //   // await TaskPage.clickLabelDropdown();
  //   // const initialLabelName = await getRandomName(5);
  //   // await TaskPage.inputLabel(initialLabelName);
  //   // await TaskPage.getAddLabelBtn();
  //   // const expectedLabel = await TaskPage.verifyLabel(initialLabelName);
  //   // expect(initialLabelName).toBe(expectedLabel);
  //   // const dropdownLabels = await TaskPage.getLabelDropdown();
  //   // await TaskPage.inputLabel("Urgent");
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Should Create a new task with Status (Blocked)", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 4");
  //   await TaskPage.inputTaskDescription("Task Description 4");
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.inputReasonToBlock("Hacker");
  //   await TaskPage.getTaskStartDatePopUp();
  //   await TaskPage.getTaskStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await TaskPage.getTaskStartDate(startDate);
  //   await TaskPage.getTaskDueDatePopUp();
  //   // expect(await TaskPage.getTaskDueDateMsg()).toHaveText("Task Deadline");
  //   await TaskPage.getTaskDueDateBtn();
  //   const deadline = getNextFormattedDate(startDate); // MMDDYYYY format
  //   await TaskPage.getTaskDeadline(deadline);
  //   // await scrollElement();
  //   // await TaskPage.clickLabelDropdown();
  //   // const initialLabelName = await getRandomName(5);
  //   // await TaskPage.inputLabel(initialLabelName);
  //   // await TaskPage.getAddLabelBtn();
  //   // const expectedLabel = await TaskPage.verifyLabel(initialLabelName);
  //   // expect(initialLabelName).toBe(expectedLabel);
  //   // const dropdownLabels = await TaskPage.getLabelDropdown();
  //   // await TaskPage.inputLabel("Urgent");
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });

  // it("Create Task with Select Project, Title, Description, and Create Task button", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 5");
  //   await TaskPage.inputTaskDescription("Task Description 5");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });

  // it("Creating Task without Project ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.inputTaskTitle("Task Title 6");
  //   await TaskPage.inputTaskDescription("Task Description 6");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getMissingProjectMsg()).toHaveText(
  //     "Project cannot be empty"
  //   );
  // });
  // it("Creating Task without Title ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskDescription("Task Description 7");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getMissingTitleMsg()).toHaveText(
  //     "Title cannot be empty"
  //   );
  // });
  // it("Creating Task without Description ", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 8");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Create Task with Title, Description, and Start Date", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 9");
  //   await TaskPage.inputTaskDescription("Task Description 9");
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.getTaskStartDatePopUp();
  //   await TaskPage.getTaskStartDateBtn();
  //   const startDate = getCurrentFormattedDate(); // MMDDYYYY format
  //   await TaskPage.getTaskStartDate(startDate);
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Create Task with Title, Description, and End Date", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 10");
  //   await TaskPage.inputTaskDescription("Task Description 10");
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.getTaskDueDateBtn();
  //   const deadline = getCurrentFormattedDate(); // MMDDYYYY format
  //   await TaskPage.getTaskDeadline(deadline);
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Should Create a new task with Status (Blocked) & Assignee", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("New Task 11");
  //   await TaskPage.inputTaskDescription("Task Description 11");
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.inputReasonToBlock("Hacker");
  //   await scrollElement();
  //   await TaskPage.selectAssigneeDropDown();
  //   await TaskPage.getAssigneeCheckBox();
  //   await TaskPage.getAssigneeDoneBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Should Create a new task with Status (In Progress) & Label", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("New Task 12");
  //   await TaskPage.inputTaskDescription("Task Description 12");
  //   await TaskPage.selectStatusInProgress();
  //   await scrollElement();
  //   await TaskPage.clickLabelDropdown();
  //   const initialLabelName = await getRandomName(5);
  //   await TaskPage.inputLabel(initialLabelName);
  //   await TaskPage.getAddLabelBtn();
  //   const expectedLabel = await TaskPage.verifyLabel(initialLabelName);
  //   expect(initialLabelName).toBe(expectedLabel);
  //   await TaskPage.getLabelDoneBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });
  // it("Should Create a new task with Status (Completed) & CheckList", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("New Task 13");
  //   await TaskPage.inputTaskDescription("Task Description 13");
  //   await TaskPage.selectStatusCompleted();
  //   await scrollElement();
  //   await TaskPage.addChecklist("Mike Check Testing");
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  // });

  // it("Updating a created task", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.getCreateTaskBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputTaskTitle("Task Title 14");
  //   await TaskPage.inputTaskDescription("This is the description for Task 14");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.getCreateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task created successfully"
  //   );
  //   const taskTitle = "Task Title 14";
  //   await TaskPage.updateTaskTitle(taskTitle);
  //   const newTaskTitle = "Updated Task Title 14";
  //   const newTaskDescription = "Updated Task Description 14";
  //   await TaskPage.inputTaskTitle(newTaskTitle);
  //   await TaskPage.inputTaskDescription(newTaskDescription);
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.getUpdateTaskBtn();
  //   expect(await TaskPage.getTaskCreatedMsg()).toHaveText(
  //     "Task updated successfully"
  //   );
  // });
  it("Filter Case, Select project for Task , Search Title , Status(Any) , Label & Assignee", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await TaskPage.clickMyTasksBtn();
    await TaskPage.clickFilterBtn();
    await TaskPage.selectProjectForTaskdropdown();
    await TaskPage.inputFilterSearch("Project for Automation");
    await TaskPage.selectLabelFilterDropDown();
    await TaskPage.getLabelFilterCheckBox();
    await TaskPage.getLabelFilterDoneBtn();
    await TaskPage.selectFilterStatusAny();
    await TaskPage.selectAssigneeFilterDropDown();
    await TaskPage.getAssigneeFilterCheckBox();
    await TaskPage.getAssigneeFilterDoneBtn();
    await TaskPage.clickFilterSubmitBtn();
    await browser.pause(2000);
    const taskDisplay = await TaskPage.getTaskDisplay();
    console.log("Diplay task is", taskDisplay);
  });
  // it("Filter Case, Select project for Task , Search Title , Status(To Do) & Assignee", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.clickFilterBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputFilterSearch("Project Buildware");
  //   await TaskPage.selectStatusToDo();
  //   await TaskPage.selectAssigneeFilterDropDown();
  //   await TaskPage.getAssigneeFilterCheckBox();
  //   await TaskPage.getAssigneeFilterDoneBtn();
  //   await TaskPage.clickFilterSubmitBtn();
  // });
  // it("Filter Case, Select project for Task , Search Title , Status(In Progress) & Lable", async () => {
  //   await TaskPage.clickMyTasksBtn();
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickFilterBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputFilterSearch("Mobile Automation");
  //   await TaskPage.selectStatusInProgress();
  //   await TaskPage.selectLabelFilterDropDown();
  //   await TaskPage.getLabelFilterCheckBox();
  //   await TaskPage.getLabelFilterDoneBtn();
  //   await TaskPage.clickFilterSubmitBtn();
  // });
  // it("Filter Case, Select project for Task , Search Title , Status(Completed)", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.clickFilterBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputFilterSearch("QA Automation");
  //   await TaskPage.selectStatusCompleted();
  //   await TaskPage.clickFilterSubmitBtn();
  // });
  // it("Filter Case, Select project for Task , Search Title , Status(Blocked)", async () => {
  //   await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //   await TaskPage.clickMyTasksBtn();
  //   await TaskPage.clickFilterBtn();
  //   await TaskPage.selectProjectForTaskdropdown();
  //   await TaskPage.inputFilterSearch("User Banned");
  //   await TaskPage.selectStatusBlocked();
  //   await TaskPage.clickFilterSubmitBtn();
  // });
});
