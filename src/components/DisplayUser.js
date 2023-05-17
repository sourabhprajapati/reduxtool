import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/Userslice'

const DisplayUser = () => {
const dispatch=useDispatch();    
    const data= useSelector((state)=>{
        return state.users;
    })
const deleteUser=(id)=>{
    dispatch(removeUser(id))
}    
  return (
    <>
        {
            data.map((user,id)=>{
                return <li key={id}>
                    {user}
                    <button onClick={()=>deleteUser()}>Delete</button>
                </li>
            })
        }
    </>
  )
}

export default DisplayUser