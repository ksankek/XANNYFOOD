import React, { useState } from "react";
import AddProduct from "../components/modals/AddProduct";
import DeleteProduct from "../components/modals/DeleteProduct";
import EditProduct from "../components/modals/EditProduct";

const Admin = () => {
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  return (
  <div className="admin">
    <h1 className="title">Products</h1>
    <button className="product-btn" onClick={() => setAddVisible(true)}>Add</button>
    <button className="product-btn" onClick={() => setEditVisible(true)}>Edit</button>
    <button className="product-btn" onClick={() => setDeleteVisible(true)}>Delete</button>
    <AddProduct show={addVisible} onHide={() => setAddVisible(false)}/>
    <EditProduct show={editVisible} onHide={() => setEditVisible(false)}/>
    <DeleteProduct show={deleteVisible} onHide={() => setDeleteVisible(false)}/>
  </div>
  );
};

export default Admin;
