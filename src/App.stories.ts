import { Meta, StoryFn } from '@storybook/vue3';
import App from './App.vue';

export default {
  title: 'App',
  component: App,
  parameters: {
    docs: {
      description: {
        component: 'Корневой компонент приложения, отображающий заголовок и список наиболее активных пользователей.',
      },
    },
    // Отключаем действия по умолчанию, так как в этом компоненте нет интерактивных элементов
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = (args) => ({
  components: { App },
  setup() {
    return { args };
  },
  template: '<App v-bind="args" />',
});

export const Default = Template.bind({});