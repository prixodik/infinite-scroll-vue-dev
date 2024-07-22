import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"], /* js|jsx|mjs| */

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // добавьте эту строку для документации
    '@storybook/addon-docs',
    "@storybook/addon-mdx-gfm"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-docgen-loader',
      enforce: 'post'
    });
    return config;
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  docs: {}
};
export default config;
