import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from './UserCard';

const Users = () => {
    const loadedUser= useLoaderData();
    const [users, setUsers]= useState(loadedUser);
    return (
        <div>
             <h2 className='text-xl text-center'>Total Users: {users.length}</h2>
             <div className='space-y-2'>
                 {
                    users.map(user=> <UserCard key={user._id} user={user} users={users} setUsers={setUsers}></UserCard>)
                 }
             </div>
        </div>
    );
};

export default Users;