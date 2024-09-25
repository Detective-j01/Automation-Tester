import { driver, $, $$ } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

// export default class Page {
export default class Page {
  public async getElement(element: string) {
    return $(element);
  }

  public async getAllElements(element: string) {
    return $$(element);
  }

  public async scrollElementIntoView(element: string): Promise<void> {
    const elem = await this.getElement(element);
    await elem.scrollIntoView();
  }

  public async getListSize(element: string): Promise<number> {
    const elements = await this.getAllElements(element);

    if (elements && (await elements.length) > 0) {
      return elements.length;
    } else {
      throw new Error("No elements found with the specified selector.");
    }
  }

  public async getPageHTML(element: string): Promise<string> {
    const outerHTML = await this.getElement(element);
    return outerHTML.getHTML();
  }

  public async isElementDisplayed(element: string): Promise<boolean> {
    const elem = await this.getElement(element);
    return elem.isDisplayed();
  }

  public async isElementClickable(element: string): Promise<boolean> {
    const elem = await this.getElement(element);
    return elem.isClickable();
  }

  public async isElementSelected(element: string): Promise<boolean> {
    const elem = await this.getElement(element);
    return elem.isSelected();
  }

  protected async waitUntilElementDisplayed(
    element: string,
    timeout: number = 4000
  ): Promise<void> {
    const elem = await this.getElement(element);
    await elem.waitForDisplayed({ timeout });
  }

  public async getElementText(element: string): Promise<string> {
    await browser.waitUntil(
      async () => {
        const isDisplayed = await this.isElementDisplayed(element);
        return isDisplayed;
      },
      {
        timeout: 10000, // Adjust the timeout as needed
        timeoutMsg: `Element ${element} was not displayed after  10 seconds`,
      }
    );
    const elem = await this.getElement(element);
    return elem.getText();
  }

  public async setElementInputValue(
    element: string,
    value: string
  ): Promise<void> {
    // await this.waitUntilElementDisplayed(element);
    const elem = await this.getElement(element);
    await elem.setValue(value);
  }

  public async addElementInputValue(
    element: string,
    value: string
  ): Promise<void> {
    // await this.waitUntilElementDisplayed(element);
    const elem = await this.getElement(element);
    await elem.addValue(value);
  }

  public async clickElement(element: string): Promise<void> {
    // await this.waitUntilElementDisplayed(element);

    const elem = await this.getElement(element);
    await elem.click();
  }

  public async hideKeyboard(): Promise<void> {
    await driver.pressKeyCode(4);
  }

  public async waitForAlert(): Promise<void> {
    await driver.waitUntil(() => {
      return driver.getAlertText() !== null;
    });
  }

  public async waitNoAlert(): Promise<void> {
    await driver.waitUntil(() => {
      return driver.getAlertText() == null;
    });
  }

  public async getAlertText(): Promise<string | undefined> {
    if (driver.isMobile) {
      await this.waitForAlert();
      return driver.getAlertText();
    }
  }

  public async waitForAlertText(text: string): Promise<void> {
    await driver.waitUntil(async () => {
      const text = await driver.getAlertText();
      return text.includes(text);
    });
  }

  public async clickAcceptAlert(): Promise<void> {
    if (driver.isMobile) {
      if (driver.isAndroid) {
        await this.waitForAlert();
        await driver.acceptAlert();
      }
      if (driver.isIOS) {
        await this.waitForAlert();
        await driver.dismissAlert();
      }
    }
  }

  public async clickCancelAlert(): Promise<void> {
    if (driver.isMobile) {
      if (driver.isAndroid) {
        await this.waitForAlert();
        await driver.dismissAlert();
      }
      if (driver.isIOS) {
        await this.waitForAlert();
        await driver.acceptAlert();
      }
    }
  }

  async alertAction(text: string, action: string): Promise<void> {
    await this.waitForAlertText(text);
    if (action == "accept") {
      await this.clickAcceptAlert();
    } else {
      await this.clickCancelAlert();
    }
  }

  public async clickAndroidBackBtn(): Promise<void> {
    await driver.pressKeyCode(4);
  }
}
