import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [];
    this._products = [];
    this._selectedType = {};
    this._selectedProduct = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedProduct(product) {
    this._selectedProduct = product;
  }

  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedProduct() {
    return this._selectedProduct;
  }

  get products() {
    return this._products;
  }
}
