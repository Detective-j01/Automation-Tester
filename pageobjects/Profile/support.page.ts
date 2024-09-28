import Page from "../Page/page.ts";

const SELECTORS = {
  ANDROID: {
    profileIcon: `android=${'new UiSelector().description("")'}`,
    supportBtn: `android=${'new UiSelector().description("Support")'}`,
    enquiryTypeDropdown: `android=${'new UiSelector().className("android.view.ViewGroup").instance(18)'}`,
    //`android=${'new UiSelector().className("android.widget.ImageView").instance(1)'}`,
    selectSales: `android=${'new UiSelector().description("Sales")'}`,
    selectSupport: `android=${'new UiSelector().description("Support")'}`,
    selectOthers: `android=${'new UiSelector().description("Other")'}`,
    inputComments: `android=${'new UiSelector().resourceId("text-input-flat").instance(2)'}`,
    submitBtn: `android=${'new UiSelector().resourceId("button")'}`,
    progressBar: `android=${'new UiSelector().className("android.widget.FrameLayout").instance(5)'}`,
    supportFormSubmitedMsg: `android=${'new UiSelector().description("Your support request has been submitted successfully"'}`,
    supportBackBtn: `android=${'new UiSelector().resourceId("button-container")'}`,
    inquiryTypeMsg: `android=${'new UiSelector().description("Please choose Inquiry Type"'}`,
    commentsMsg: `android=${'new UiSelector().description("Please enter your comment."'}`,
  },
};

class SettingsPage extends Page {
  public async getProfileIconBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.profileIcon)
      : driver.isIOS;
  }
  public async getProgressBar() {
    return driver.isAndroid
      ? await this.getElement(SELECTORS.ANDROID.progressBar)
      : driver.isIOS;
  }
  public async getSupportBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.supportBtn)
      : driver.isIOS;
  }
  public async inputComments() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.profileIcon)
      : driver.isIOS;
  }
  public async selectEnquiryTypeSales() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.enquiryTypeDropdown);
      await this.clickElement(SELECTORS.ANDROID.selectSales);
    }
  }
  public async selectEnquiryTypeSupport() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.enquiryTypeDropdown);
      await this.clickElement(SELECTORS.ANDROID.selectSupport);
    }
  }
  public async selectEnquiryTypeOthers() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.enquiryTypeDropdown);
      await this.clickElement(SELECTORS.ANDROID.selectOthers);
    }
  }
  public async getSubmitBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.supportBtn)
      : driver.isIOS;
  }
  public async getSupportFormSubmitedMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.supportFormSubmitedMsg)
      : driver.isIOS;
  }
  public async getErrorInquiryMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.supportFormSubmitedMsg)
      : driver.isIOS;
  }
}

export default new SettingsPage();
