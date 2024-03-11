import React from 'react'
import FetchUsername from '../components/FetchUsername'
import MyNavbar from '../components/navbar'

const Employee = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FetchUsername/>
    </div>
  )
}

export default Employee