// eslint-disable-next-line
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "99",
        },
      },
    ],
    "@babel/preset-react",
  ],
};
