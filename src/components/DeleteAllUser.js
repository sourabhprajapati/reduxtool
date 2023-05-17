import React from 'react'
import { deleteUsers } from '../store/slices/Userslice'
import { useDispatch } from 'react-redux'
const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const deleteuser=()=>{
    dispatch(deleteUsers());
  }
  return (
   <>
       <button onClick={deleteuser}>DeleteallUser</button>
   </>
  )
}

export default DeleteAllUser