import Page from "../Page/page.ts";

const SELECTORS = {
  ANDROID: {
    siteInstructionUpdates: `android=${""}`,
  },
};

class SettingsPage extends Page {
  public async clickEmailSiteInstructionUpdates() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.siteInstructionUpdates)
      : driver.isIOS;
  }
}

export default new SettingsPage();
