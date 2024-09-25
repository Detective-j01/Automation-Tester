declare module "allure-commandline" {
  interface AllureCommandline {
    (args: string[]): {
      on(event: string, callback: (exitCode: number) => void): void;
    };
  }

  const allure: AllureCommandline;
  export default allure;
}
