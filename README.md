# A Tiny React Component library ð´

```javascript
// ð©0.2.0çæ¬ä¹åæ¯æ`EsModule`å`CommonJs`å¼å¥
const { Button } = require('fobiz-ui');
//æè
import { Button } from 'fobiz-ui';
``` 


## Installation

>npm install fobiz-ui --save

## How to use
```javascript
// import styles
import 'fobiz-ui/lib/index.css';
// import components
import { Button } from 'fobiz-ui';
```

### Introduction
ð¥`Typescript` with `React Hooks`.\
ð¤³Use `react-testing-library` to make unit test.\
ðUse `storybook` for native debugging and generating docs.\
â¨Integrate third-party library `React-Awesome` for Icon component.

If you want to debug or practice locally, you might use following orders.\
In the project directory, you can run:\
å¦ææ³èªå·±åæ¬å°è°è¯ï¼ä¸é¢çå½ä»¤å¯è½ä¼è¢«ç¨å°ï¼

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.\
And you can import your component to App.tsx to have a look. 
### `npm run storybook`

Provides a visualized way to debug your component.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.\
éè¿ `storybook` å¯ä»¥æ´ç´è§è°è¯ç»ä»¶çåç§æ ·å¼

### `npm run lint`

Format the code using prettier.\
Using Eslint and Prettier together is a wonderful experience.\
æ ¼å¼åä»£ç ï¼éå¸¸æ¨è `Eslint` å `Prettier` éåçç¨ï¼`Eslint`åªæ£æ¥è¯­æ³ï¼\
`Prettier`åªåä»£ç é£æ ¼æ£æ¥ï¼åå¸å¶èã
