import Page from "../Page/page.ts";
export const SELECTORS = {
  ANDROID: {
    addUserBtn: `android=${' new UiSelector().description("ADD USER")'}`,
    userNameField:
      '(//android.widget.EditText[@resource-id="text-input-flat"])[1]',
    updatedUserNameField: `android=${'new UiSelector().className("android.view.ViewGroup").instance(17)'}`,
    userEmailField: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    userRoleDropdown: `android=${' new UiSelector().className("android.widget.EditText").instance(2)'}`,
    selectProfessionalTeam: `android=${'new UiSelector().description("Professional Team")'}`,
    selectMaincontractor: `android=${'new UiSelector().description("Main Contractor")'}`,
    selectSubContractor: `android=${'new UiSelector().description("Sub Contractor")'}`,
    selectOther: `android=${'new UiSelector().description("Other")'}`,
    canViewUnapprovedDrawings: `android=${'new UiSelector().className("android.widget.ImageView").instance(1)'}`,
    selectdropDown1: `android=${'new UiSelector().description("Yes")'}`,
    canIssueSiteInstruction: `android=${'new UiSelector().className("android.widget.ImageView").instance(2)'}`,
    selectdropDown2: '//android.view.ViewGroup[@content-desc="Yes"]',
    addToProjectDirectory: `android=${'new UiSelector().className("android.widget.ImageView").instance(3)'}`,
    selectdropDown3: `android=${'new UiSelector().description("Yes")'}`,
    isThisAnAdminUser: `android=${'new UiSelector().className("android.widget.ImageView").instance(4)'}`,
    selectdropDown4: '//android.view.ViewGroup[@content-desc="Yes"]',
    missingName: `android=${'new UiSelector().text("Name is required")'}`,
    missingEmail: `android=${'new UiSelector().description("Email is required")'}`,
    missingRole: `android=${'new UiSelector().description("Role is required")'}`,
    addUserFinalBtn: `android=${'new UiSelector().description("Add")'}`,
    skipBtn: `android=${'new UiSelector().description("Skip")'}`,
    //android.view.ViewGroup[@content-desc="Skip"]
    ShareInviteBtn: `android=${'new UiSelector().description("Send Invite")'}`,
    //android.view.ViewGroup[@content-desc="Send Invite"]
    userInvitedMsg: `android=${'new UiSelector().description("User invited successfully")'}`,
    userLabel: `android=${'new UiSelector().className("android.view.ViewGroup").instance(18)'}`,
    addUserText: `android=${'new UiSelector().text("ADD USER")'}`,
    userText: `android=${'new UiSelector().text("Users")'}`,
    userNameLabel: `android=${'new UiSelector().text("Name")'}`,
    emailAddressLabel: `android=${'new UiSelector().text("Email Address")'}`,
    screen: `android=${'new UiSelector().className("android.widget.LinearLayout").instance(0)'}`,
    createdUserTab: `android=${'new UiSelector().className("android.view.ViewGroup").instance(16)'}`,
    updateUserField: `android=${'new UiSelector().description("Update")'}`,
  },
  //   IOS: {},
};
class UserPage extends Page {
  public async clickAddUserBtn() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.addUserBtn);
    }
  }
  // public async clickAddUserBtn() {
  //   if (driver.isAndroid) {
  //     // Wait for the Add User button to be visible and clickable
  //     const addUserBtn = await $(SELECTORS.ANDROID.addUserBtn);
  //     await addUserBtn.waitForDisplayed({
  //       timeout: 5000, // Wait up to 5 seconds for the button to be visible
  //       timeoutMsg: "Add User button not visible after 5 seconds",
  //     });
  //     await addUserBtn.waitForClickable({
  //       timeout: 5000, // Wait up to 5 seconds for the button to be clickable
  //       timeoutMsg: "Add User button not clickable after 5 seconds",
  //     });
  //     // Click the Add User button
  //     await addUserBtn.click();
  //   }
  // }
  public async inputUserName(userName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.userNameField,
          userName
        )
      : driver.isIOS;
  }

  public async getCreatedUserTab() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.createdUserTab)
      : driver.isIOS;
  }
  public async inputUserEmail(userEmail: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.userEmailField,
          userEmail
        )
      : driver.isIOS;
  }
  public async getUpdatedUserNameField() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.updatedUserNameField)
      : driver.isIOS;
  }

  public async selectRoleDropdown() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.userRoleDropdown)
      : driver.isIOS;
  }
  public async selectRoleProfessionalTeam() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.selectProfessionalTeam)
      : driver.isIOS;
  }
  public async selectRoleMainContractor() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.selectMaincontractor)
      : driver.isIOS;
  }
  public async selectRoleSubContractor() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.selectSubContractor)
      : driver.isIOS;
  }
  public async selectRoleOther() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.selectOther)
      : driver.isIOS;
  }
  public async selectCanViewUnapprovedDrawingsDropdown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.canViewUnapprovedDrawings),
        await this.clickElement(SELECTORS.ANDROID.selectdropDown1))
      : driver.isIOS;
  }
  // public async selectCanIssueSiteInstructionDropDown() {
  //   return driver.isAndroid
  //     ? (await this.clickElement(SELECTORS.ANDROID.canIssueSiteInstruction),
  //       await this.clickElement(SELECTORS.ANDROID.selectdropDown2),
  //       await browser.pause(300))
  //     : driver.isIOS;
  // }
  public async selectCanIssueSiteInstructionDropDown() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.canIssueSiteInstruction);
      await this.clickElement(SELECTORS.ANDROID.selectdropDown1);
    }
  }
  public async selectAddToProjectDirectoryDropDown() {
    return driver.isAndroid
      ? (await this.clickElement(SELECTORS.ANDROID.addToProjectDirectory),
        await this.clickElement(SELECTORS.ANDROID.selectdropDown1))
      : driver.isIOS;
  }
  public async selectIsThisAnAdminUserDropdown() {
    // return driver.isAndroid
    //   ? await (async () => {
    //       // Scroll to the Add User button
    //       const scrollableSelector =
    //         "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
    //         'new UiSelector().className("android.widget.ImageView").instance(4));';
    //       await driver.$(`android=${scrollableSelector}`);

    //       // Perform the required clicks
    //       await this.clickElement(SELECTORS.ANDROID.isThisAnAdminUser);
    //       return this.clickElement(SELECTORS.ANDROID.selectdropDown1);
    //     })()
    //   : driver.isIOS
    //   ? // Add iOS logic here if needed and return the result
    //     null
    //   : null;
    if (driver.isAndroid) {
      await browser.pause(800); // Optional pause
      const scrollableSelector =
        "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
        'new UiSelector().className("android.widget.ImageView").instance(4));';
      await driver.$(`android=${scrollableSelector}`);
      // Perform the required clicks
      await this.clickElement(SELECTORS.ANDROID.isThisAnAdminUser);
      return this.clickElement(SELECTORS.ANDROID.selectdropDown1);
    } else if (driver.isIOS) {
      // iOS-specific logic
      return;
      // return this.getElementText(SELECTORS.IOS.projectCreatedMsg);
    }
    return undefined;
  }

  public async clickAddUserSubmitBtn() {
    return driver.isAndroid
      ? await (async () => {
          // Scroll to the Add User button
          const scrollableSelector =
            "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
            'new UiSelector().description("ADD USER"));';
          await driver.$(`android=${scrollableSelector}`);

          // Click the Add User button
          return this.clickElement(SELECTORS.ANDROID.addUserFinalBtn);
        })()
      : driver.isIOS; // Add iOS logic here if needed
  }
  public async getUpdatedUser() {
    return driver.isAndroid
      ? await (async () => {
          // Scroll to the Add User button
          const scrollableSelector =
            "new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(" +
            'new UiSelector().text("Update"));';
          await driver.$(`android=${scrollableSelector}`);

          // Click the Add User button
          return this.clickElement(SELECTORS.ANDROID.updateUserField);
        })()
      : driver.isIOS; // Add iOS logic here if needed
  }

  public async getAddUserText() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.addUserText)
      : driver.isIOS;
  }

  public async clickSkipBtn() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.skipBtn);
    }
  }
  public async clickShareInviteBtn() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.ShareInviteBtn);
    }
  }

  public async getMissingNameMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.missingName)
      : driver.isIOS;
  }
  public async getUserInvitedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.userInvitedMsg)
      : driver.isIOS;
  }

  public async getMissingEmailAddressMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.missingEmail)
      : driver.isIOS;
  }
  public async getEmailLabel() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.emailAddressLabel)
      : driver.isIOS;
  }

  public async getUserLabel() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.userNameLabel)
      : driver.isIOS;
  }

  public async getMissingRoleMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.missingRole)
      : driver.isIOS;
  }
  getScreen() {
    return $(SELECTORS.ANDROID.screen);
  }
  public async verifyUserLabel(userName: string, userRole: string) {
    const expectedLabelText = ` ${userName} - ${userRole}`;
    const actualLabelText = await this.getElementText(
      SELECTORS.ANDROID.userLabel
    );
    expect(actualLabelText).toBe(expectedLabelText);
  }

  public async verifyCreatedUser(userName: string) {
    const userLabelSelector = `android=new UiSelector().text("${userName}")`;
    const isUserCreated = await this.getElementText(userLabelSelector);
    expect(isUserCreated).toBe(`${userName}`);
  }
  public async getExistingCreatedUser(existingUserName: string) {
    const userLabelSelector = `android=new UiSelector().text("${existingUserName}")`;
    await this.clickElement(userLabelSelector);
  }

  public async getExistingUserEmail(existingEmail: string) {
    const userEmailSelector = `android=new UiSelector().text("${existingEmail}")`;
    await this.clickElement(userEmailSelector);
  }
  // public async clickUserLabel() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.userLabel)
  //     : driver.isIOS;
  // }
}
export default new UserPage();
