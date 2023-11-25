## 提取props dingyi

```tsx

const PropsType = {
  msg: String as PropType<string>,
  age: {
    type: Number,
    required: true,
  },
} as const

// ...
props: PropsType
```

### h 函数
```ts
import { createApp, defineComponent, h } from 'vue'
import './style.css'
// import App from './App.vue'
import Test from './components/test.tsx'
const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', { src: 'https://vitejs.dev/logo.svg', alt: 'Vite logo' }),
      h(Test, { age: 18, msg: 'hello' }),
    ])
  },
})

createApp(App).mount('#app')
```
### watchEffect （很好用）
只会关心函数内部中依赖的变量改变，才会执行函数

## jsonSchema

校验数据  AJV json-schema validator
json-schema.org