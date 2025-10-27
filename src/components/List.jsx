import React from "react";
import Cart from "./Cart";
const List = ({ data, deleteData,editData,updateData }) => {
  return (
    <div className="w-1/2">
      <Cart data={data} deleteData={deleteData} editData={editData} updateData={updateData} />
    </div>
  );
};

export default List;
