import LoginPage from "../../pageobjects/Login/login.page.ts";
import {
  loginNewUser,
  invalidLogin,
} from "../../pageobjects/Login/login.calls.ts";

describe("My Login application", () => {
  beforeEach(async () => {
    // Navigate to the login page before each test
    await browser.reloadSession();
  });
  it("Login User", async () => {
    // Perform valid login
    await loginNewUser(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    expect(await LoginPage.getLoginSuccessMsg()).toHaveText("Login Success");
    expect(await LoginPage.getDashboardTextMsg()).toHaveText("Dashboard");
  });
  it("Invalid Login", async () => {
    // Perform invalid login
    await invalidLogin("lionfc@gmail.com", "sagjhfds");
  });
});
