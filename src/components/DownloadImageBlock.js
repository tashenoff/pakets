// components/DownloadImageBlock.js
import React from 'react';

const DownloadImageBlock = ({ imageUrl, fileName, description }) => {
    return (
        <div className="grid bg-blue-500 via-blue-500 bg-gradient-to-r from-blue-500 to-white text-white lg:grid-cols-12 p-4 rounded-md shadow-md">

            <div className="col-span-10">
                <div className='grid lg:grid-cols-12'>
                    <div className='lg:col-span-1 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:mb-0 mb-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                    <p className="text-lg col-span-11 ">{description}</p>
                </div>
            </div>
            <div className='col-span-2 flex items-center justify-end w-full'>
                <a href={imageUrl} download={fileName}>
                    <button className="px-4 lg:mt-0 mt-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Скачать
                    </button>
                </a>
            </div>
        </div>
    );
};

export default DownloadImageBlock;
