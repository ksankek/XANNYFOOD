import { observer } from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import {Modal, Button, Form, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {fetchProducts, deleteProduct} from "../../http/productApi";

const DeleteProduct = observer(({show, onHide}) => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchProducts().then(data => product.setProducts(data));
  }, [])

  const delProduct = () => {  
    deleteProduct(product.selectedProduct.id)
    .then(() => onHide())
    .catch((data) => console.log(data));
  }

  return (
    <div className="DeleteProduct">
    <Modal
    show = {show}
    onHide = {onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Удалить продукт
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Dropdown drop="right">
        <Dropdown.Toggle>{product.selectedProduct.name || "Выбрать продукт"}</Dropdown.Toggle>
          <Dropdown.Menu className="scroll">
            {product.products.map(prod =>
              <Dropdown.Item
                  onClick={() => product.setSelectedProduct(prod)}
                  key={prod.id}
              >
                  {prod.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      <Button variant="outline-success" onClick={delProduct}>Удалить</Button>
    </Modal.Footer>
  </Modal>
  </div>
  );
});

export default DeleteProduct;
