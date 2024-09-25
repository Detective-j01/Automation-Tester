import { join } from "path";
import { config as baseConfig } from "./wdio.shared.local.conf.ts";

export const config: WebdriverIO.Config = {
  ...baseConfig,

  // ============
  // Specs
  // ============

  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: "iOS",
      "appium:deviceName": "iPhone 13",
      "appium:app": join(process.cwd(), "./apps/ios/Spiderdoor.ipa"),
      "appium:platformVersion": "15.4",
      "appium:automationName": "XCUITest",
      "appium:newCommandTimeout": 240,
      "appium:noReset": true,
      "appium:autoWebview": true,
    },
  ],
};
