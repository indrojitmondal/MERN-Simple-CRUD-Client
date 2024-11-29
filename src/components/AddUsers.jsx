import React from 'react';
import Swal from 'sweetalert2';

const AddUsers = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const newUser = { name, address, phone };
        console.log(newUser);
        //send data 
        
        fetch('http://localhost:5000/users', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                  
                }
            })
    }
    return (
        <div>
            <div className="hero-content flex-col ">


                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Add a User!</h1>

                </div>
                <div className="card bg-base-100  w-full md:w-[600px] shrink-0 shadow-2xl">
                    <form onSubmit={handleAddUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <input type="text-area" name='address' placeholder="address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </label>
                            <input type="phone" name='phone' placeholder="phone" className="input input-bordered" required />

                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Now</button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default AddUsers;