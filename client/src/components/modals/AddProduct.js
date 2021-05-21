import React, { useContext, useEffect, useState } from "react";
import {Modal, Button, Form, Dropdown} from "react-bootstrap";
import {fetchTypes, createProduct} from "../../http/productApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AddProduct = observer(({show, onHide}) => {
  const { product } = useContext(Context);
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [structure, setStructure] = useState('');
  const [price, setPrice] = useState(0);
  // const [sale, setSale] = useState(null); 
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data));
  }, [])

  const selectImage = e => {
    setFile(e.target.files[0])
  }

  const addProduct = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    // formData.append('sale', sale);
    formData.append('weight', weight);
    formData.append('img', file);
    formData.append('typeId', product.selectedType.id);
    formData.append('struct', structure);
    createProduct(formData).then(() => onHide())
    .catch((data) => console.log(formData));
  }

  // const
  return (
    <div className="AddProduct">
      <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Dropdown drop="up">
          <Dropdown.Toggle>{product.selectedType.name || "Select a type"}</Dropdown.Toggle>
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
          placeholder="Title"
          className="mt-2"
          value={name}
          onChange={e => setName(e.target.value.substring(0,12))}
        />
        <Form.Label className="mt-2">Weight</Form.Label>
        <Form.Control 
          placeholder="Weight"
          type="number"
          className="mt-2"
          value={weight}
          onChange={e => setWeight(Number(e.target.value.substring(0,3)))}
        />
        <Form.Control 
          placeholder="Structure"
          className="mt-2"
          value={structure}
          onChange={e => setStructure(e.target.value.substring(0,95))}
        />
        <Form.Label className="mt-2">Price</Form.Label>
        <Form.Control 
          placeholder="Price"
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
          onChange={selectImage}
          className="mt-2"
        /> */}
        <Form.File 
          id="custom-file"
          label="Input a image"
          custom
          accept="image/*"
          className="mt-2"
          onChange={selectImage}
        />
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addProduct}>Add</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
});

export default AddProduct;
