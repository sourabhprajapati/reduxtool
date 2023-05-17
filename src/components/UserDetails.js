import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/Userslice";
import DisplayUser from "./DisplayUser";
const UserDetails = () => {
  const dispatch= useDispatch();
  const addNewuser=(name)=>{
    console.log(name)
    dispatch(addUser(name));
  }
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>addNewuser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
            <DisplayUser/>
        </ul>
        <hr />
        <DeleteAllUser/>
      </div>
    </>
  );
};

export default UserDetails;
