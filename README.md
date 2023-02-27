# chen-ui 组件库

### 快速开始

#### 1.安装组件库

``` bash
npm i chenjianxing-ui
```

#### 2.引用组件库

``` javascript
//全部引入
import 'chen-ui/dist/css/index.css';
import ChenUI from 'chen-ui';
Vue.use(ChenUI);

//按需引用
import 'chen-ui/dist/css/card.css';
import { Button, Card } from 'chen-ui';
Vue.use(Button);
Vue.use(Card);
```