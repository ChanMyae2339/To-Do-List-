import React from 'react'
import { useRef } from 'react'

const Form = ({addData}) => {
const text = useRef('')

  return (
     <div className='p-3  w-1/2 flex justify-end'>
<input type="text" ref={text}

className='rounded-lg border border-red-100 mr-2 p-2 w-80' placeholder='text here ...' />
<button className='bg-blue-100 rounded lg p-2'
 onClick={()=>{
  const newText=text.current.value
  addData(newText),text.current.value=''
  console.log("new",newText);
  ;
 }}
 >
 <span>Add
  <i className="fa-solid fa-plus"></i>
  </span> </button>
    </div>
  )
}

export default Form
