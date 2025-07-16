import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",

  // ✅ FIXED: Use string pattern, not RegExp syntax
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // 👈 This is correct
  },

  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
    "/node_modules/(?!(@uiw/react-markdown-preview|@uiw/react-markdown-editor|rehype-prism-plus|refractor|hast-util-to-string|unist-util-visit|unist-util-filter|parse-numeric-range)/)",
  ],
};

export default createJestConfig(customJestConfig);
