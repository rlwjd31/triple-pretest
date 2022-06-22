const createConfig = require("@titicaca/eslint-config-triple/create-config");

// module.exports = createConfig({ type: "frontend", project: "./tsconfig.json" });

const { extends: extendConfigs, overrides } = createConfig({
  type: "frontend",
  project: "./tsconfig.json",
});

module.exports = {
  extends: [
    ...extendConfigs,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // 개별 규칙
  },
};

// Unexpected console statement.eslintno-console
// add "no-console": process.env.NODE_ENV === "production" ? "error" : "off" to rule
