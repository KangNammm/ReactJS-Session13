import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, updateProduct } from "../services/productService";


export default function FormEdit({ handleCloseEdit, idEdit }) {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);

  const [product, setProduct] = useState({
    ProductName: "",
    Price: 0,
    From: "",
  });

  // Hàm lấy giá trị từ các ô input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const getProductById = () => {
    const product = listProduct.find((pro) => pro.id === idEdit);
    setProduct(product);
  };

  useEffect(() => {
    getProductById();
  }, []);

  // Hàm thêm mới product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API thêm mới
    dispatch(updateProduct(product)); // bắn action kèm thông tin lên reducer để xử lí
    dispatch(getAllProduct()); // load lại dữ liệu
    handleCloseEdit(); // đóng form
  };

  return (
    <>
      <div className="product-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Cập nhật sản phẩm</h3>
          <div className="mb-3 text-start">
            <label htmlFor="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="productName"
              name="ProductName"
              value={product.ProductName}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="price" className="form-label">
              Giá
            </label>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              id="price"
              name="Price"
              value={product.Price}
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="from" className="form-label">
              Xuất xứ
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="from"
              name="From"
              value={product.From}
            />
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button type="submit" className="btn btn-primary">
              Thêm mới
            </button>
            <button
              onClick={handleCloseEdit}
              type="button"
              className="btn btn-danger"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
