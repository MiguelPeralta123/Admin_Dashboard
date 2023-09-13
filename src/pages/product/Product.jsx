import React, { useEffect, useState } from 'react';
import { Description, Category, Star, Money, Publish, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import './Product.css'

const Product = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productIdInt = parseInt(productId, 10);
        setProduct(productsData.find(product => product.id === productIdInt));
    }, [productId])

    return (
        <div className='top-container'>
            <div className='title-container'>
                <h1 className='title'>Edit Product</h1>
                <Link to={'/product/create'}>
                    <button className='btn-add-product'>Create Product</button>
                </Link>
            </div>
            <div className='product-profile-container'>
                <div className='product-info'>
                    <div className='product-info-top'>
                        <img className='product-info-image' src={product.img} alt='Product' />
                        <div className='product-top-details'>
                            <span className='product-name'>{product.name}</span>
                            <span className='product-title'>{product.brand}</span>
                        </div>
                    </div>
                    <div className='product-info-bottom'>
                        <span className='product-info-title'>Product Details</span>
                        <div className='product-info-details'>
                            <Description className='product-info-icon' />
                            <span className='product-info-label'>{product.description}</span>
                        </div>
                        <div className='product-info-details'>
                            <Category className='product-info-icon' />
                            <span className='product-info-label'>{product.category}</span>
                        </div>
                        <div className='product-info-details'>
                            <Star className='product-info-icon' />
                            <span className='product-info-label'>{product.rating}</span>
                        </div>
                        <div className='product-info-details'>
                            <Money className='product-info-icon' />
                            <span className='product-info-label'>{product.price}</span>
                        </div>
                    </div>
                </div>

                <div className='product-update'>
                    <span className='product-update-title'>Edit Product</span>
                    <form className='product-update-form'>
                        <div className='product-update-form-left'>
                            <div className='product-update-form-item'>
                                <label className='product-update-form-label'>Name</label>
                                <input className='product-update-form-input' type='text' placeholder={product.name} />
                            </div>
                            <div className='product-update-form-item'>
                                <label className='product-update-form-label'>Brand</label>
                                <input className='product-update-form-input' type='text' placeholder={product.brand} />
                            </div>
                            <div className='product-update-form-item'>
                                <label className='product-update-form-label'>Category</label>
                                <input className='product-update-form-input' type='text' placeholder={product.category} />
                            </div>
                            <div className='product-update-form-item'>
                                <label className='product-update-form-label'>Price</label>
                                <input className='product-update-form-input' type='text' placeholder={product.price} />
                            </div>
                            <div className='product-update-form-item'>
                                <label className='product-update-form-label'>Stock</label>
                                <input className='product-update-form-input' type='text' placeholder={product.stock} />
                            </div>
                        </div>

                        <div className='product-update-form-right'>
                            <div className='product-update-form-image'>
                                <img className='product-update-image' src={product.img} alt='product Update' />
                                <label className='product-update-label' htmlFor='file'><Publish className='product-update-icon' /></label>
                                <input id='file' type='file' style={{ display: 'none' }} />
                            </div>

                            <button className='product-update-form-submit' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <Link className='link' to={'/products'}>
                <button className='btn-back' type='submit'>
                    <ArrowBack />
                    Back
                </button>
            </Link>
        </div>
    );
}

export default Product;
