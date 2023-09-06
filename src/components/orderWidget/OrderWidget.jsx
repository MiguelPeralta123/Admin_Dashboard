import React from 'react';
import './OrderWidget.css'

const OrderWidget = () => {

    const Button = ({type}) => {
        return <button className={'order-button ' + type}>{type}</button>
    }

    return (
        <div className='order-container'>
            <h3 className='order-title'>Latest Transactions</h3>
            <table className='order-table'>
                <thead>
                    <tr className='order-tr'>
                        <th className='order-th'>Customer</th>
                        <th className='order-th'>Date</th>
                        <th className='order-th'>Product</th>
                        <th className='order-th'>Amount</th>
                        <th className='order-th'>Location</th>
                        <th className='order-th'>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='order-tr'>
                        <td className='order-customer'>
                            <img className='order-image' src='/images/products/earphone.jpg' alt='No internet connection' />
                            <span className='order-product'>Earphones</span>
                        </td>
                        <td className='order-date'>September 2, 2023</td>
                        <td className='order-product'>Earphones</td>
                        <td className='order-amount'>$405</td>
                        <td className='order-location'>Mexico</td>
                        <td className='order-status'><Button type={'Approved'} /></td>
                    </tr>

                    <tr className='order-tr'>
                        <td className='order-customer'>
                            <img className='order-image' src='/images/products/jacket.jpeg' alt='No internet connection' />
                            <span className='order-product'>Jacket</span>
                        </td>
                        <td className='order-date'>September 2, 2023</td>
                        <td className='order-product'>Jacket</td>
                        <td className='order-amount'>$200</td>
                        <td className='order-location'>USA</td>
                        <td className='order-status'><Button type={'Pending'} /></td>
                    </tr>

                    <tr className='order-tr'>
                        <td className='order-customer'>
                            <img className='order-image' src='/images/products/mac.jpeg' alt='No internet connection' />
                            <span className='order-product'>Apple Mac</span>
                        </td>
                        <td className='order-date'>September 2, 2023</td>
                        <td className='order-product'>Apple Mac</td>
                        <td className='order-amount'>$2590</td>
                        <td className='order-location'>USA</td>
                        <td className='order-status'><Button type={'Approved'} /></td>
                    </tr>

                    <tr className='order-tr'>
                        <td className='order-customer'>
                            <img className='order-image' src='/images/products/shoes.jpg' alt='No internet connection' />
                            <span className='order-product'>Shoes</span>
                        </td>
                        <td className='order-date'>September 1, 2023</td>
                        <td className='order-product'>Shoes</td>
                        <td className='order-amount'>$500</td>
                        <td className='order-location'>Canada</td>
                        <td className='order-status'><Button type={'Declined'} /></td>
                    </tr>

                    <tr className='order-tr'>
                        <td className='order-customer'>
                            <img className='order-image' src='/images/products/watch.jpeg' alt='No internet connection' />
                            <span className='order-product'>Smart Watch</span>
                        </td>
                        <td className='order-date'>September 1, 2023</td>
                        <td className='order-product'>Smart Watch</td>
                        <td className='order-amount'>$320</td>
                        <td className='order-location'>Mexico</td>
                        <td className='order-status'><Button type={'Approved'} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderWidget;
