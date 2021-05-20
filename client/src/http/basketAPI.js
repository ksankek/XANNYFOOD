import {$authHost} from './index';

export const addToCart = async (productId, basketId) => {
  const {data} = await $authHost.post('api/basket', {productId, basketId});
  return data;
}

export const fetchBasket = async (basketId) => {
  const {data} = await $authHost.get('api/basket', {params:{basketId}});
  return data;
}

export const deleteFromBasket = async (id) => {
  const {data} = await $authHost.delete('api/basket', {params:{id}});
  return data;
}

export const deleteAll = async () => {
  const {data} = await $authHost.delete('api/basket');
  return data;
}