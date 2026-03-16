import nextPlugin from "@next/eslint-plugin-next";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextTypescript,
  nextPlugin.configs["core-web-vitals"],
];

export default eslintConfig;
