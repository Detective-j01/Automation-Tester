import Page from "../Page/page.ts";

const SELECTORS = {
  ANDROID: {
    profileIcon: `android=${'new UiSelector().description("")'}`,
    settingsBtn: `android=${'new UiSelector().description("Settings")'}`,
    siteInstructionUpdates:
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[2]",
    //`android=${'new UiSelector().className("android.widclick.Switch").instance(1)'}`,
    //`android=${'new UiSelector().className("android.widclick.Switch").instance(4)'}`,
    taskUpdates:
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[5]",
    //`android=${'new UiSelector().className("android.widclick.Switch").instance(5)'}`,
    drawingUpdates:
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch[6]",
    documentsAccess: `android=${'new UiSelector().className("android.widclick.Switch").instance(8)'}`,
    projectMemeberUpdates: `android=${'new UiSelector().className("android.widclick.Switch").instance(9)'}`,
    progressBar: `android=${'new UiSelector().className("android.widclick.FrameLayout").instance(5)'}`,
    notificationPreferenceMsg: `android=${'new UiSelector().description("Notification preference updated"'}`,
  },
};

class SettingsPage extends Page {
  public async getProfileIconBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.profileIcon)
      : driver.isIOS;
  }
  public async getSettingBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.settingsBtn)
      : driver.isIOS;
  }
  public async getProgressBar() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.progressBar)
      : driver.isIOS;
  }
  public async clickSiteUpdatesEmail() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.siteInstructionUpdates)
      : driver.isIOS;
  }
  public async clickTaskUpdatesPush() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.taskUpdates)
      : driver.isIOS;
  }
  public async clickDocumentsUpdatesPush() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.documentsAccess)
      : driver.isIOS;
  }

  public async clickProjectMemberUpdatesEmail() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.projectMemeberUpdates)
      : driver.isIOS;
  }
  public async clickDrawingsUpdatesEmail() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.drawingUpdates)
      : driver.isIOS;
  }
  public async getNotificationPreferenceMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.notificationPreferenceMsg)
      : driver.isIOS;
  }
}

export default new SettingsPage();
