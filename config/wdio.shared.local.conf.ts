import { config as baseConfig } from "./wdio.shared.conf.ts";
import allure from "allure-commandline";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);
export const config: WebdriverIO.Config = {
  ...baseConfig,

  //
  // ======
  // Appium
  // ======
  //
  specs: ["../tests/specs/login.spec.ts"],
  // specs: ["../tests/specs/*.ts"], For running all test cases
  services: [
    ...(baseConfig.services || []),
    [
      "appium",
      {
        // This will use the globally installed version of Appium
        // command: 'appium',
        args: {
          // This is needed to tell Appium that we can execute local ADB commands
          // and to automatically download the latest version of ChromeDriver
          relaxedSecurity: true,
          // Write the Appium logs to a file in the root of the directory
          log: "./logs/appium.log",
        },
      },
    ],
  ],
  before: async () => {
    // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
    // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
    if (driver.isAndroid) {
      await driver.updateSettings({
        // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
        waitForSelectorTimeout: 3 * 1000,
      });
    }
    if (driver.isIOS) {
      await driver.updateSettings({
        // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
        waitForSelectorTimeout: 3 * 1000,
      });
    }
  },
  // onComplete: async () => {
  //   const reportError = new Error("Could not generate Allure report");

  //   try {
  //     // Generate the Allure report
  //     await new Promise<void>((resolve, reject) => {
  //       const generation = allure([
  //         "generate",
  //         "report/allure-results",
  //         "--clean",
  //         "-o",
  //         "report/allure-report",
  //       ]);

  //       const generationTimeout = setTimeout(() => reject(reportError), 10000);

  //       generation.on("exit", (exitCode: number) => {
  //         clearTimeout(generationTimeout);

  //         if (exitCode !== 0) {
  //           return reject(reportError);
  //         }

  //         console.log("Allure report successfully generated");
  //         resolve();
  //       });
  //     });

  //     // Open the Allure report in the default browser
  //     await execPromise("allure open report/allure-report");
  //   } catch (error) {
  //     console.error(error);
  //     throw reportError;
  //   }
  // },
};
