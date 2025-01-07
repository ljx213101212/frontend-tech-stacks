const DELIVERY_PRICE = 5;
const DELIVERY_THRESHOLD = 30;

class ShoppingItem {
  constructor(data) {
    this.item = data;
    this.choose = 0;
  }

  getTotalPrice() {
    return this.item.price * this.choose;
  }

  getChooseNumber() {
    return this.choose;
  }

  increase() {
    this.choose++;
  }

  decrease() {
    if (this.choose > 0) {
        this.choose--;
    }
  }

  isChoose() {
    return this.choose > 0;
  }
}

class ShoppingCart {
  constructor(goods, deliveryPrice = 5, deliveryThreshold = 30) {
    this.items = this.mapGoodsToItems(goods);
    this.deliveryPrice = deliveryPrice;
    this.deliveryThreshold = deliveryThreshold;
  }

  mapGoodsToItems(goods) {
    return goods.map((g) => new ShoppingItem(g));
  }

  getShoppingItems() {
    return this.items;
  }

  getDeliveryPrice() {
    return this.deliveryPrice;
  }

  getDeliveryThresHold() {
    return this.deliveryThreshold;
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.getTotalPrice(), 0);
  }

  getTotalItemNumber() {
    return this.items.reduce((acc, item) => acc + item.getChooseNumber(), 0);
  }

  increase(index) {
    this.items[index].increase();
  }

  decrease(index) {
    this.items[index].decrease();
  }

  getPendingPriceForDelivery() {
    return Math.max(
      0,
      Math.round(this.getDeliveryThresHold() - this.getTotalPrice())
    );
  }

  isAbleForDelivery() {
    return this.getPendingPriceForDelivery() === 0;
  }

  hasItems() {
    return this.items.some((item) => item.isChoose());
  }
}

class ShoppingCartController {
  constructor(goods) {
    this.shoppingCart = new ShoppingCart(
      goods,
      DELIVERY_PRICE,
      DELIVERY_THRESHOLD
    );
    this.ui = new UI(this);
    this.render();
  }

  render() {
    this.ui.render();
  }

  getShoppingCart() {
    return this.shoppingCart;
  }
  getShopingCartItems() {
    return this.shoppingCart.getShoppingItems();
  }

  hasItems() {
    return this.shoppingCart.hasItems();
  }

  addItem(index) {
    this.shoppingCart.increase(index);
    this.render();
    this.ui.addAddButtonAnimation(index);
  }

  removeItem(index) {
    this.shoppingCart.decrease(index);
    this.render();
  }

  getTotalPrice() {
    return this.shoppingCart.getTotalPrice().toFixed(2);
  }

  getTotalItemNumber() {
    return this.shoppingCart.getTotalItemNumber();
  }

  getPendingPriceForDelivery() {
    return this.shoppingCart.getPendingPriceForDelivery();
  }

  getDeliveryPrice() {
    return this.shoppingCart.getDeliveryPrice();
  }

  isAbleForDelivery() {
    return this.shoppingCart.isAbleForDelivery();
  }
}

class UI {
  constructor(controller) {
    this.controller = controller;
    this.list = document.querySelector('.goods-list');
    this.footer = document.querySelector('.footer');
    //注册监听事件
    this.footer.addEventListener('animationend', this.handleCartAnimeEnd.bind(this));
    this.list.addEventListener('click', this.handleListClick.bind(this));
  }

  handleCartAnimeEnd() {
    this.removeCartAnimation();
  }

  handleListClick(e) {
    if (e.target.classList.contains('i-jiajianzujianjiahao')) {
        var index = +e.target.getAttribute('index');
        this.controller.addItem(index);
      } else if (e.target.classList.contains('i-jianhao')) {
        var index = +e.target.getAttribute('index');
        this.controller.removeItem(index);
      }
  }

  
  //Issue: Both list and Cart will be re-renders for every increase and decrease
  render() {
    //渲染购物列表
    this.renderShoppingListHTML();
    //渲染购物车
    this.renderShoppingCartHTML();
  }

  addCartAnimation() {
    const footerCar = this.footer.querySelector('.footer-car');
    footerCar.classList.add('animate');
  }

  addAddButtonAnimation(index) {
    const currentAddButton = this.list.children[index].querySelector('.i-jiajianzujianjiahao');
    const footerCar = this.footer.querySelector('.footer-car');
    const startRect = currentAddButton.getBoundingClientRect();
    const endRect = footerCar.getBoundingClientRect();
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;
    const endX   = endRect.left + endRect.width / 2;
    const endY   = endRect.top + endRect.height / 2;

    const addToCar = document.createElement('div');
    addToCar.classList.add('add-to-car');
    const carIcon = document.createElement('i');
    carIcon.classList.add(...['iconfont', 'i-jiajianzujianjiahao',]);
    addToCar.appendChild(carIcon);
    addToCar.style.transform  = `translateX(${startX}px)`;
    carIcon.style.transform = `translateY(${startY}px)`;
    document.body.appendChild(addToCar);

    addToCar.clientWidth;//reflow [!important]

    addToCar.style.transform  = `translateX(${endX}px)`;
    carIcon.style.transform = `translateY(${endY}px)`;

    addToCar.addEventListener('transitionend', () => {
        addToCar.remove();
        this.addCartAnimation();
    });
  }

  removeCartAnimation() {
    const footerCar = this.footer.querySelector('.footer-car');
    footerCar.classList.remove('animate');
  }


  renderShoppingListHTML() {
    const shoppingItems = this.controller.getShopingCartItems();
    const shoppingItemsHTMLArray = shoppingItems.map((item, index) =>
      this.renderShoppingItemHTML(item, index)
    );
    const shoppingItemsHTML = shoppingItemsHTMLArray.join("");
    this.list.innerHTML = shoppingItemsHTML;
  }
  

  renderShoppingCartHTML() {
    const shoppingCartHTML =  `<div class="footer-car-container">
        <div class="footer-car ${this.controller.hasItems() ? "active" : ""}">
          <i class="iconfont i-gouwuchefill"></i>
          <span class="footer-car-badge">${this.controller.getTotalItemNumber()}</span>
        </div>
        <div class="footer-car-price">
          <span class="footer-car-unit">￥</span>
          <span class="footer-car-total">${this.controller.getTotalPrice()}</span>
        </div>
        <div class="footer-car-tip">配送费￥${this.controller.getDeliveryPrice()}</div>
      </div>
      <div class="footer-pay ${
        this.controller.isAbleForDelivery() ? "active" : ""
      }">
        <a href="">去结算</a>
        <span>还差￥${this.controller.getPendingPriceForDelivery()}元起送</span>
      </div>`;

      this.footer.innerHTML = shoppingCartHTML;
  }

  renderShoppingItemHTML(shoppingItem, index) {
    const { item } = shoppingItem;
    return ` <div class="goods-item ${shoppingItem.isChoose() ? "active" : ""}">
              <img src="${item.pic}" alt="" class="goods-pic" />
              <div class="goods-info">
                <h2 class="goods-title">${item.title}</h2>
                <p class="goods-desc">
                    ${item.desc}
                </p>
                <p class="goods-sell">
                  <span>月售 ${item.sellNumber}</span>
                  <span>好评率${item.favorRate}%</span>
                </p>
                <div class="goods-confirm">
                  <p class="goods-price">
                    <span class="goods-price-unit">￥</span>
                    <span>${item.price}</span>
                  </p>
                  <div class="goods-btns">
                    <i index="${index}" class="iconfont i-jianhao"></i>
                    <span>${shoppingItem.getChooseNumber()}</span>
                    <i index="${index}" class="iconfont i-jiajianzujianjiahao"></i>
                  </div>
                </div>
              </div>
            </div>`;
  }
}

const controller = new ShoppingCartController(goods);
//console.log(controller);
