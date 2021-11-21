import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {Modal, Button, Form, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {fetchProducts, updateProduct, fetchTypes} from "../../http/productApi";

const EditProduct = observer(({show, onHide}) => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data));
    fetchProducts().then(data => product.setProducts(data));
  }, [])

  const [name, setName] = useState('');
  const [weight, setWeight] = useState();
  const [structure, setStructure] = useState();
  const [price, setPrice] = useState();
  // const [sale, setSale] = useState(null); 
  const [file, setFile] = useState(null);
  
  const selectImage = e => {
    setFile(e.target.files[0])
  }

  const editProduct = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    // formData.append('sale', sale);
    formData.append('weight', weight);
    formData.append('img', file);
    formData.append('typeId', product.selectedType.id);
    formData.append('struct', structure);
    updateProduct(formData, product.selectedProduct.id).then(() => onHide())
    .catch((error) => console.log());
  }

  return (
    <div className="EditProduct">
      <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Изменить продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Dropdown drop="right">
          <Dropdown.Toggle>{product.selectedProduct.name || "Выбрать продукт"}</Dropdown.Toggle>
          <Dropdown.Menu className="scroll">
            {product.products.map(prod =>
              <Dropdown.Item
                  onClick={() => {
                    product.setSelectedProduct(prod);
                    setName(product.selectedProduct.name);
                    setWeight(product.selectedProduct.weight);
                    setStructure(product.selectedProduct.struct);
                    setPrice(product.selectedProduct.price);
                    // setSale(product.selectedProduct.sale);
                    setFile(product.selectedProduct.img);
                    product.types.map(type => {
                      if (type.id === product.selectedProduct.typeId){
                        product.setSelectedType(type);
                      }
                    })
                  }}
                  key={prod.id}
              >
                  {prod.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-2">
          <Dropdown.Toggle>{product.selectedType.name || "Выбрать тип"}</Dropdown.Toggle>
          <Dropdown.Menu>
            {product.types.map(type =>
              <Dropdown.Item
                  onClick={() => product.setSelectedType(type)}
                  key={type.id}
              >
                  {type.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control 
          placeholder="Название"
          className="mt-2"
          value={name}
          onChange={e => setName(e.target.value.substring(0,12))}
        />
        <Form.Label className="mt-2">Вес</Form.Label>
        <Form.Control 
          placeholder="Вес"
          type="number"
          className="mt-2"
          value={weight}
          onChange={e => setWeight(Number(e.target.value))}
        />
        <Form.Control 
          placeholder="Структура"
          className="mt-2"
          value={structure}
          onChange={e => setStructure(e.target.value.substring(0,95))}
        />
        <Form.Label className="mt-2">Цена</Form.Label>
        <Form.Control 
          placeholder="Цена"
          type="number"
          className="mt-2"
          value={price}
          onChange={e => setPrice(Number(e.target.value.substring(0,4)))}
        />
        {/* <Form.Control 
          placeholder="Sale(null)"
          type="number"
          className="mt-2"
          value={sale}
          onChange={e => setSale(Number(e.target.value))}
        /> */}
        {/* <Form.Control 
          type="file"
          accept="image/*"
          className="mt-2"
          onChange={selectImage}
        /> */}
        <Form.File 
          id="custom-file"
          label="Вставить картинку"
          custom
          accept="image/*"
          className="mt-2"
          onChange={selectImage}
        />
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={editProduct}>Изменить</Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
});

export default EditProduct;
