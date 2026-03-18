import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='p-5 bg-green-400 rounded-xl shadow-md hover:scale-105 transition-all'>
      
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
          {data.category}
        </h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>

      <div className='mt-6'>
        <button className='bg-blue-500 hover:bg-blue-600 transition-all rounded font-medium py-1 px-3 text-sm'>
          Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTask