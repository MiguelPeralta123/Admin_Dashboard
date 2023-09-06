import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { users } from '../../data/users'
import './UserList.css'

const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'payments',
            headerName: 'Payments',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
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
            />
        </div>
    );
}

export default UserList;
