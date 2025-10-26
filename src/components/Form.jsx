import React from 'react'

const Form = () => {
  return (
     <div className='p-3 '>
<input type="text" 
// value={searchData} 
// onChange={(e)=>setSearchData(e.target.value)}
className='rounded-lg border border-red-100 mr-2 p-2' placeholder='text here ...' />
<button className='bg-blue-100 rounded lg p-2'
//  onClick={()=>{fetchData(searchData),setSearchData('')}}
 >Add</button>
    </div>
  )
}

export default Form
