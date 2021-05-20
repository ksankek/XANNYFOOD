import { makeAutoObservable } from "mobx";
import { fetchProducts } from "../http/productApi";
import { deleteFromBasket, fetchBasket } from "../http/basketAPI";

export default class BasketStore {
  constructor() {
    this._basket = [];
    this._totalCost = 0;
    makeAutoObservable(this);
  }

  addToCart(product) {
    this._basket.push(product);
  }

  setBasket(basket, productContext) {
    fetchProducts().then(data => {
      productContext.setProducts(data);
      basket.map( item => {
        for (let product of productContext.products) {
          if (item.productId === product.id) {
            this.addToCart(product);
            break;
          }
        }
      })
    });
  }

  deleteFromCart(product, userId) {
    fetchBasket(userId).then(data => {
      const basketItems = data;
      for (let [i, value] of this._basket.entries()){
        if ( value.id === product.id ){
          deleteFromBasket(basketItems[i].id);
          this._basket.splice(i, 1);
          break
        }
      }
    })
  }

  makeOrder() {
    this._basket.splice(0);
  }

  get viewBasket() {
    return this._basket;
  }

  get totalCost(){
    this._basket.map(item => {
      this._totalCost += item.price;
    })
    return this._totalCost;
  }
}
