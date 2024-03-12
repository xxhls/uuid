import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,

  coverageDirectory: "coverage",
  coverageProvider: "v8",

  preset: 'ts-jest',
  testEnvironment: 'node',

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};

export default config;
