import { $ } from "@wdio/globals";
import Page from "../Page/page.ts";
/**
 * Sub page containing specific selectors and methods for a specific page.
 */
const SELECTORS = {
  ANDROID: {
    email: `android=${'new UiSelector().text("email@address.com")'}`,
    password: `android=${'new UiSelector().text("Must be atleast 6 characters")'}`,
    // btnPermission:
    // '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',

    btnLogin: `android=${'new UiSelector().resourceId("button")'}`,
    SuccessMsg: `android=${'new UiSelector().text("Login Success")'}`,

    dashboardText: `android=${'new UiSelector().text("Dashboard")'}`,
    ErrorMsg: `android=${'new UiSelector().description("Invalid login credentials")'}`,
  },
  // IOS: {
  //   TITLE: "~ios",
  //   INPUT_FIELD: "~ios",
  //   ANSWER_FIELD: "~ios",

  //   FROM_TEXT: "~ios",
  //   TO_TEXT: "~ios",

  //   SWAP_BUTTON: "~ios",
  //   RESET_BUTTON: "~ios",
  // },
};
class LoginPage extends Page {
  /**
   * Define selectors using getter methods.
   */
  async getTitle(): Promise<string> {
    const selector = 'new UiSelector().text("Log In")';
    const title = await $(`android=${selector}`);
    return await title.getText();
  }

  public async inputEmail(userEmail: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.email, userEmail)
      : driver.isIOS;
  }

  public async inputPassword(userPassword: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.password,
          userPassword
        )
      : driver.isIOS;
  }
  // public async getAllowPermission() {
  //   return driver.isAndroid
  //     ? await this.clickElement(SELECTORS.ANDROID.btnPermission)
  //     : driver.isIOS;
  // }
  public async getLoginBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.btnLogin)
      : driver.isIOS;
  }
  public async getLoginSuccessMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.SuccessMsg)
      : driver.isIOS;
  }
  public async getInvalidLoginMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.ErrorMsg)
      : driver.isIOS;
  }
  public async getDashboardTextMsg() {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.dashboardText)
      : driver.isIOS;
  }

  // }
  // public async cancelProjectCreation() {
  //     await this.btnCancelProject.click();
  // }
}

export default new LoginPage();
