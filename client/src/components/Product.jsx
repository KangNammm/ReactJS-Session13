import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import { deleteById, getAllProduct } from "../services/productService";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);
    const [showEdit, setShowEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  // hàm xóa thông tin 1 product theo id
  const handleDelete = (id) => {
    dispatch(deleteById(id));
  };

  // hiển thị form mới
  const handleShowForm = () => {
    setShowAdd(true);
  };

  // ẩn form
  const handleCloseForm = () => {
    setShowAdd(false);
  };

  // mở form edit
    const handleShowEdit = (id) => {
      setIdEdit(id);
    setShowEdit(true);
    };

    const handleCloseEdit = (id) => {
    setShowEdit(false);
    };

  return (
    <>
      {/* Form thêm mới */}
      {showAdd && <FormAdd handleCloseForm={handleCloseForm} />}

      {/* Form edit */}
          {showEdit && <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />}
      <h1>List Product</h1>
      <button className="btn btn-info m-3" onClick={handleShowForm}>
        Thêm mới sản phẩm
      </button>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">From</th>
            <th scope="col" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td scope="row">{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.From}</td>
              <td>
                <button
                  onClick={() => handleShowEdit(product.id)}
                  className="btn btn-outline-info"
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
