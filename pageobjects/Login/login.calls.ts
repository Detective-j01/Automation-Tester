import LoginPage from "../../pageobjects/Login/login.page.ts";
export async function loginNewUser(email: string, password: string) {
  await LoginPage.inputEmail(email);
  await LoginPage.inputPassword(password);
  await LoginPage.getLoginBtn();
  //await LoginPage.getAllowPermission();
  await browser.pause(900);
  expect(await LoginPage.getLoginSuccessMsg()).toHaveText("Login Success");
  await browser.pause(900);
  expect(await LoginPage.getDashboardTextMsg()).toHaveText("Dashboard");
}

export async function invalidLogin(email: string, password: string) {
  await LoginPage.inputEmail(email);
  await LoginPage.inputPassword(password);
  await LoginPage.getLoginBtn();
  //await LoginPage.getAllowPermission();
  expect(await LoginPage.getInvalidLoginMsg()).toHaveText(
    "Invalid login credentials"
  );
  await browser.pause(3000);
}
