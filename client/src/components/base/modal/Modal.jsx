import React from 'react'
import "./modal.css"
export default function Modal() {
  return (
    <>
      <div className="q-modal-container">
        <div className="q-modal-item">
          <div className="q-modal-header">
            <span>Xác nhận</span>
            <i class="fa-regular fa-rectangle-xmark"></i>
          </div>
          <div className="q-modal-body">
                      <i class="fa-solid fa-triangle-exclamation"></i>
                      <div>Bạn có chắc chắn muốn xóa sản phẩm này</div>
          </div>
                  <div className="q-modal-footer">
                      <button className='btn btn-outline-danger'>Xóa</button>
                      <button className='btn btn-outline-info'>Hủy</button>
          </div>
        </div>
      </div>
    </>
  );
}
