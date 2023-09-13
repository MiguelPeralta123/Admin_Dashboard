import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/productsData'
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState(productsData);

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, },
        {
            field: 'name', headerName: 'Name', width: 200,
            renderCell: (params) => {
                return (
                    <div className='product-container'>
                        <img className='product-image' src={params.row.img} alt='Product' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 250, },
        { field: 'status', headerName: 'Status', width: 90, },
        { field: 'price', headerName: 'Price', width: 120, },
        {
            field: 'action', headerName: 'Action', width: 160,
            renderCell: (params) => {
                return (
                    <div className='action-container'>
                        <Link to={'/product/' + params.row.id}>
                            <button className='edit-product'>Edit</button>
                        </Link>
                        <DeleteOutline className='delete-product'
                            onClick={() => deleteProduct(params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div className='products-container'>
            <DataGrid
                rows={products}
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

export default Products;
