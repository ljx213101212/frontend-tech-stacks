## static, relative, absolute, fixed, sticky

### containing block
https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

### NO -> **top**, **right**, **bottom**, and **left**.
- static (default)
no relative
### OK -> **top**, **right**, **bottom**, and **left**.
- relative
relative to **current element**
- absolute
relative to **closest positioned ancestor block (other than static)**
- fixed
relative to **viewport**
- sticky
- relative to **closest scrolling ancestor block**


### transform 

translate 和 scale: 简单的线性数学操作，计算开销小, 并且只触发合成层 (compositing)

```css
transfrom: translate(100px); 
```
rotate: 涉及三角函数和插值计算，开销更大, 并且触发 回流（reflow）和 重绘(repaint) 。

```
transform: rotate(45deg) scale(1.2) translateX(100px)
```

### Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/position
