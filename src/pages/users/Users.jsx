import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { usersData } from '../../data/usersData'
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState(usersData);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 50, },
        {
            field: 'name', headerName: 'Name', width: 200,
            renderCell: (params) => {
                return (
                    <div className='user-container'>
                        <img className='user-image' src={params.row.avatar} alt='Avatar' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'title', headerName: 'Title', width: 180, },
        { field: 'email', headerName: 'Email', width: 250, },
        { field: 'status', headerName: 'Status', width: 90, },
        { field: 'payments', headerName: 'Payments', width: 100, },
        {
            field: 'action', headerName: 'Action', width: 160,
            renderCell: (params) => {
                return (
                    <div className='action-container'>
                        <Link to={`/user/${params.row.id}`}>
                            <button className='edit-user'>Edit</button>
                        </Link>
                        <DeleteOutline className='delete-user'
                            onClick={() => deleteUser(params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div className='userlist-container'>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}

export default Users;
