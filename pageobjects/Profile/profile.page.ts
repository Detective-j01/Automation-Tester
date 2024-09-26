import Page from "../Page/page.ts";

const SELECTORS = {
  ANDROID: {
    profileIcon: `android=${'new UiSelector().description("")'}`,
    profileBtn: `android=${'new UiSelector().description("Profile")'}`,
    firstNameInput: `android=${'new UiSelector().resourceId("text-input-flat").instance(0)'}`,
    lastNameInput: `android=${'new UiSelector().resourceId("text-input-flat").instance(1)'}`,
    professionDropDown: `android=${'new UiSelector().className("android.widget.ImageView").instance(0)'}`,
    builder: `android=${'new UiSelector().description("Builder")'}`,
    BodyAssociatedDropDown: `android=${'new UiSelector().className("android.widget.ImageView").instance(1)'}`,
    selectSACSSP: `android=${'new UiSelector().description("Builder")'}`,
    ProfessionalBodyRegisterNumber: `android=${'new UiSelector().resourceId("text-input-flat").instance(2)'}`,
    updateBtn: `android=${'new UiSelector().resourceId("button")'}`,
    companyName: `android=${'new UiSelector().resourceId("text-input-flat").instance(3)'}`,
  },
};

class ProfilePage extends Page {
  public async getProfileIconBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.profileIcon)
      : driver.isIOS;
  }

  public async getProfileBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.profileBtn)
      : driver.isIOS;
  }
  public async inputfirstName(firstName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.firstNameInput,
          firstName
        )
      : driver.isIOS;
  }
  public async inputlastName(lastName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.lastNameInput,
          lastName
        )
      : driver.isIOS;
  }
  public async selectProfileProfessionDropdown() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.professionDropDown);
      await this.clickElement(SELECTORS.ANDROID.builder);
    }
  }
  public async selectProfileBodyAssociationDropdown() {
    if (driver.isAndroid) {
      await this.clickElement(SELECTORS.ANDROID.BodyAssociatedDropDown);
      await this.clickElement(SELECTORS.ANDROID.selectSACSSP);
    }
  }
  public async getProfessionalBodyRegisterNumber(RegisterNumber: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.ProfessionalBodyRegisterNumber,
          RegisterNumber
        )
      : driver.isIOS;
  }
  public async getCompanyName(CompanyName: string) {
    return driver.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.companyName,
          CompanyName
        )
      : driver.isIOS;
  }
  public async getProfileUpdateBtn() {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.updateBtn)
      : driver.isIOS;
  }
}

export default new ProfilePage();
