import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactDOM from "react-dom";

const Cart = ({ data, deleteData, editData, updateData }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () =>{setOpen(false);
    // setCurrent(null);
    // setCurrent('');
  } ;
  const [editText, setEditText] = useState("");
  const [current,setCurrent]=useState(null);

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteData(id),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  return (
    <>
      {data.map((d) => (
        <div
          key={d.id}
          className={`flex justify-between gap-3 w-full shadow-lg m-2 p-3 ${
            d.complete && "bg-green-500 text-white"
          }`}
        >
          <div>
            <input
              type="checkbox"
              onChange={() => {
                updateData(d.id, !d.complete);
              }}
              checked={d.complete }
            />
            {d.task}
          </div>
          <div className="">
            <button
              className="mr-3"
              onClick={() => {
                console.log("edit", editText);
                setEditText(d.task);
                setCurrent(d)
                onOpenModal();
              }}
            >
              <i className="fa-solid fa-pen-to-square text-blue-500"></i>
            </button>
           
           
            <button
              onClick={() => {
                submit(d.id);
              }}
            >
              <i className="fa-solid fa-trash text-red-500"></i>
            </button>
          </div>
        </div>
      ))}
      {current && (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="flex flex-col gap-2 items-end">
            <textarea
              name=""
              id=""
              onChange={(e) => {
                setEditText(e.target.value);
              }}
              value={editText}
              className="w-[300px]"
            ></textarea>

            <button
              className="rounded-lg bg-gray-100 p-3 w-[100px]"
              onClick={() => {
                editData(editText, current.id);
                onCloseModal();
                
              }}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
