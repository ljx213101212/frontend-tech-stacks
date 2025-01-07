## CSS 属性计算过程
- 确定声明值
- 层叠冲突
    - Specificity
    - 比较源的重要性
      - 页面作者样式 > 用户样式 > 用户代理样式
    - 比较优先级
      - 选择器的权重
    - 比较次序
      - **位于下面的样式**声明会层叠掉上面的那一条样式声明

- 使用继承
```html
<div>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
```

```css
div {
  color: red;
}
```
我们针对 div 设置了 color 属性值为红色，而针对 p 元素我们没有声明任何的属性，但是由于 color 是可以继承的，因此 p 元素从最近的 div 身上继承到了 color 属性的值。

- 使用默认值
user agent stylesheet

### Reference
https://duyiedu.com/
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade
