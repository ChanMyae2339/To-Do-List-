import React, { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { api } from "./components/api";
import { v4 as uuidv4 } from "uuid";
// import ReactDOM from 'react-dom';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal'

const App = () => {
  const [data, setData] = useState([]);
//  const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

  const fetchData = async () => {
    const res = await api.get("/todolists");
    setData(res.data);
    console.log("res", res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addData = async (newText) => {
    const newData = {
      id: uuidv4(),
      task: newText,
      complete: false,
    };
    await api.post("/todolists", newData);
    fetchData();
  };

  const deleteData = async (id) => {
    await api.delete(`/todolists/${id}`);
    fetchData();
  };

  const editData = async (editText,id) => {
    // onOpenModal()
        await api.patch(`/todolists/${id}`, {task: editText});
        fetchData()
  };
  const updateData = async (id, completeStatus) => {
        await api.patch(`/todolists/${id}`, {complete: completeStatus});
        fetchData()

  };
  return (
    <div className="w-full ">
      <div className="flex flex-col jsutify-center items-center shadow-lg mt-8  mx-auto bg-white rounded-lg p-4">
        <div className="text-lg font-bold">To Do List Mini </div>
        <Form addData={addData} />
        <List
          data={data}
          deleteData={deleteData}
          editData={editData}
          updateData={updateData}
        />
      </div>
      
    </div>
  );
};

export default App;
