import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
     
    const user = useLoaderData();
    const {_id, name, address, phone}= user;
    const navigate = useNavigate();
    
    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const newUser = { name, address, phone };
        console.log(newUser);
        //send data 
        
        fetch(`http://localhost:5000/users/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
              
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // form.reset();
                  navigate('/users');
                  
                }
            })
    }
    
    return (
        <div className=' mt-8'>
            <h2 className='text-xl text-center'>Update User Now</h2>
             
            <div className="card bg-base-100  w-1/2 mx-auto  shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <input type="text-area" name='address' placeholder="address" defaultValue={address} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </label>
                            <input type="phone" name='phone' placeholder="phone" defaultValue={phone} className="input input-bordered" required />

                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>



            </div>
        
        </div>
    );
};

export default UpdateUser;