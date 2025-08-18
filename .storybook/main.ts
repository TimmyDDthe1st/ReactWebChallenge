/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {},

  babel: async (options) => {
    return {
      ...options,
      presets: [
        ...(options.presets || []),
        [require.resolve("@babel/preset-typescript"), { allowDeclareFields: true }],
        [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
      ],
    };
  },
};
