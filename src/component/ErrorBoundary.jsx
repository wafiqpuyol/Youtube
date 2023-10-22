import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
    const {status, statusText, data, error} = useRouteError();
    console.log(error);
    return (
        <div className='flex gap-4 items-center'>
            <h1 className='text-3xl font-extrabold'>{statusText}</h1>
            <p className='text-3xl font-extrabold'>{status}</p>
        </div>
    )
}

export default ErrorBoundary