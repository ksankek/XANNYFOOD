import {$authHost, $host} from './index';

export const createType = async (type) => {
  const {data} = await $authHost.post('api/type', type);
  return data;
}

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type');
  return data;
}

export const createProduct = async (product) => {
  const {data} = await $authHost.post('api/product', product);
  return data;
}

export const deleteProduct = async (id) => {
  const {data} = await $authHost.delete('api/product', {params: {id}});
  return data;
}

export const updateProduct = async (product, id) => {
  const {data} = await $authHost.put(`api/product/?id=${id}`, product);
  return data;
}

export const fetchProductsWithId = async (typeId) => {
  const {data} = await $host.get('api/product', {params: {typeId}});
  return data;
}

export const fetchProducts = async () => {
  const {data} = await $host.get('api/product');
  return data;
}