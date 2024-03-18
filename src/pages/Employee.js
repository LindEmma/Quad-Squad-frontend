import React from 'react'
import FetchUsername from '../components/FetchUsername'
import MyNavbar from '../components/navbar'
import Modalpopup from '../components/ModalPopUp'

const Employee = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FetchUsername/>
      <Modalpopup/>
    </div>
  )
}

export default Employee