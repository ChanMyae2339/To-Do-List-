import React from "react";

const Cart = ({ data }) => {
  return (
    <>
      {data.map((d) => (
        <div key={d.id}>
          <div className="grid grid-cols-2 gap-3 w-[300px] shadow-lg m-2 p-3 ">
            {d.task}
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
