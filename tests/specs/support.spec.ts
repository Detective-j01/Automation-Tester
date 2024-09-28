import ProfilePage from "../../pageobjects/Profile/support.page.ts";
import { loginNewUser } from "../../pageobjects/Login/login.calls.ts";

describe("Support functionality", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Should fill out the Support Form with Equiry Type(Sales)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getSupportBtn();
    await browser.pause(1000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    await ProfilePage.selectEnquiryTypeSales();
    await ProfilePage.inputComments();
    await ProfilePage.getSubmitBtn();
    expect(await ProfilePage.getSupportFormSubmitedMsg()).toHaveText(
      "Your support request has been submitted successfully"
    );
  });
  it("Should fill out the Support Form with Equiry Type(Others)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getSupportBtn();
    await browser.pause(1000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    await ProfilePage.selectEnquiryTypeOthers();
    await ProfilePage.inputComments();
    await ProfilePage.getSubmitBtn();
    expect(await ProfilePage.getSupportFormSubmitedMsg()).toHaveText(
      "Your support request has been submitted successfully"
    );
  });
  it("Should fill out the Support Form with Equiry Type(Support)", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getSupportBtn();
    await browser.pause(1000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    await ProfilePage.selectEnquiryTypeSupport();
    await ProfilePage.inputComments();
    await ProfilePage.getSubmitBtn();
    expect(await ProfilePage.getSupportFormSubmitedMsg()).toHaveText(
      "Your support request has been submitted successfully"
    );
  });
  it("Enquiry Type is required", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getSupportBtn();
    await browser.pause(1000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    await ProfilePage.inputComments();
    await ProfilePage.getSubmitBtn();
    expect(await ProfilePage.getSupportFormSubmitedMsg()).toHaveText(
      "Please choose Inquiry Type"
    );
  });
  it("Comment is required", async () => {
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await browser.pause(1000);
    await ProfilePage.getProfileIconBtn();
    await ProfilePage.getSupportBtn();
    await browser.pause(1000);
    expect(await ProfilePage.getProgressBar()).toBeDisplayed();
    await ProfilePage.selectEnquiryTypeSupport();
    await ProfilePage.getSubmitBtn();
    expect(await ProfilePage.getSupportFormSubmitedMsg()).toHaveText(
      "Please enter your comment."
    );
  });
});
