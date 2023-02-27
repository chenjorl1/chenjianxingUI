# 快速开始

#### 安装组件库

```bash
npm i chenjianxing-ui
```

#### 引用组件库
> 在main.js中引用组件库

``` javascript
//全部引入
import 'chenjianxing-ui/dist/css/index.css';
import ChenUI from 'chenjianxing-ui';
Vue.use(ChenUI);

//按需引用
import 'chenjianxing-ui/dist/css/card.css';
import { Button, Card } from 'chenjianxing-ui';
Vue.use(Button);
Vue.use(Card); 
```