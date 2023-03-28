import React from 'react';
import Header from '../Header/Header';
import OrderSummary from '../Order-Summary/Order-Summary';

const OrderReview = () => {
    return (
        <>
        <div className='flex justify-around container mx-auto mt-28'>
            <div>
                <h2>this is ordered product compo</h2>
            </div>
            <div className='bg-ema-bg p-4'>
                <OrderSummary></OrderSummary>
            </div>
        </div>
        </>
    );
};

export default OrderReview;