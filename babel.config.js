module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: "3",
      },
    ],
    "@babel/react",
  ],
  plugins: ["@babel/plugin-proposal-optional-chaining"],
};
