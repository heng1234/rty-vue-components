# 气泡提示
简洁气泡提示信息，自动关闭

## 使用方法
``` html
<template>
  <div>
    <rty-button :text="'打开气泡提示'" :type="'primary'" @click="showPop=true"></rty-button>
    <rty-pop :visible.sync="showPop" :fade="2500" :text="'信息已提交，请耐心等待'"></rty-pop>
  </div>
</template>
```
``` js
<script>
import rtyButton from "../src/rtyButton";
import rtyPop from "../src/rtyPop";
export default {
  components: {
    rtyButton,
    rtyPop
  },
  data() {
    return {
      showPop: false
    };
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| visible | 是否显示pop气泡提示 | Boolean | - | false |
| text | 气泡提示内容 | String | - | 气泡提示 |
| fade | 气泡提示持续时间-单位（秒） | Number | - | 1500 |