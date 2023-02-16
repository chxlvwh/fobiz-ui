import '../src/styles/index.scss'
// 可以使用字符串icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'padded',
  options: {
    storySort: {
      order: ['Welcome', 'Components', ['Button', 'Input', 'Autocomplete', 'Menu', 'Icon']]
    }
  }
}
