import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
      
      <div className='rounded-xl p-6 bg-blue-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl p-6 bg-green-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl p-6 bg-yellow-400'>
        <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl text-black font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl p-6 bg-red-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers