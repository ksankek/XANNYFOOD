import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import AddProduct from "../components/modals/AddProduct";
import DeleteProduct from "../components/modals/DeleteProduct";
import EditProduct from "../components/modals/EditProduct";
import { Context } from "../index";
import { MAIN_ROUTE } from "../utils/Const";

const Admin = () => {
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const { user } = useContext(Context);
  const history = useHistory();

  useEffect( () => {
    return user.user.role === "ADMIN" ? null : history.push(MAIN_ROUTE);
  }, []);

  return (
  <div className="admin">
    <h1 className="title">Продукты</h1>
    <button className="product-btn" onClick={() => setAddVisible(true)}>Добавить</button>
    <button className="product-btn" onClick={() => setEditVisible(true)}>Изменить</button>
    <button className="product-btn" onClick={() => setDeleteVisible(true)}>Удалить</button>
    <AddProduct show={addVisible} onHide={() => setAddVisible(false)}/>
    <EditProduct show={editVisible} onHide={() => setEditVisible(false)}/>
    <DeleteProduct show={deleteVisible} onHide={() => setDeleteVisible(false)}/>
  </div>
  );
};

export default Admin;
