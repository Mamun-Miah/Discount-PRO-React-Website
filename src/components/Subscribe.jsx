import React from 'react';

const Subscribe = () => {
    return (
        <>
            <div className='bg-red-100 py-16 px-4'>
                <h1 className='text-4xl text-center mb-8'>Subscribe to our Newsletter</h1>
                <div className='max-w-lg mx-auto p-4 flex flex-col sm:flex-row items-center gap-4'>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-secondary w-full"
                    />
                    <button className='btn btn-secondary w-full sm:w-auto'>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Subscribe;
