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
    .catch((data) => console.log(formData));
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
        Delete product
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Dropdown drop="right">
        <Dropdown.Toggle>{product.selectedProduct.name || "Select a product"}</Dropdown.Toggle>
          <Dropdown.Menu>
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
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-success" onClick={delProduct}>Delete</Button>
    </Modal.Footer>
  </Modal>
  </div>
  );
});

export default DeleteProduct;
