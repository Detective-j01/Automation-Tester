import { join } from "path";
import { config as baseConfig } from "./wdio.shared.local.conf.ts";

export const config: WebdriverIO.Config = {
  ...baseConfig,

  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: "Android",
      maxInstances: 1,
      "appium:deviceName": "samsung SM-A217F",
      "appium:platformVersion": "12.0",
      "appium:orientation": "PORTRAIT",
      "appium:automationName": "UiAutomator2",
      // The path to the app
      "appium:app": join(process.cwd(), "./apps/app-release_2.apk"),
      // @ts-ignore
      "appium:appWaitActivity": "com.buildware.MainActivity",
      "appium:noReset": false,
      "appium:newCommandTimeout": 240,
    },
  ],
};
