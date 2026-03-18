import React from 'react'

const Header = ({ changeUser, data }) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between mb-8'>
      
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold text-emerald-400'>
          {data?.firstName || 'Admin'} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='bg-red-600 hover:bg-red-700 transition-all text-white px-5 py-2 rounded-md'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header