import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserCard = ({user, users, setUsers}) => {
    const {_id,name, address, phone}= user;
    const handleDelete = (id)=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
   
                fetch(`http://localhost:5000/users/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    console.log('Deleted id: ',_id);
                    if(data.deletedCount>0){
                        const remainingUsers= users.filter(user=>user._id !==_id);
                        setUsers(remainingUsers);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                    }
                })

             
            }
          });
    }
    const handleEdit = id=>{
        const navigate= useNavigate()
    }
    return (
        <div className='w-1/2 mx-auto border border-gray-400 rounded-md p-5 flex justify-between'>
            {/* left */}
            <div>
                <h2>Name: {name}</h2>
                <p>Address: {address} </p>
                <h3>Phone: {phone}</h3>
            </div>
            <div className='flex flex-col gap-2'>
                <button className="btn btn-info">View</button>
            
                  
                <Link to={`/update-users/${_id}`}> <button  className="btn btn-success">Edit</button>
                 
                </Link>
                 
                <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete</button>
               
            </div>
        </div>
    );
};

export default UserCard;