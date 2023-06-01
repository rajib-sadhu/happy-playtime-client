import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {

    const images = [
        'https://hamleysgumlet.gumlet.io/product/491902651/665/491902651-1.jpg',
        'https://hamleysgumlet.gumlet.io/product/491902622/665/491902622-1.jpg',
        'https://m.media-amazon.com/images/I/512WUJ5+gwL.jpg',
        'https://i.ytimg.com/vi/tKjNRVxjeEI/maxresdefault.jpg',
        'https://www.hasbro.com/common/productimages/en_US/543A8C15AE5748D7B55A529A5CDFAA1A/2c388ca04992d57072b51d53e8281cd058d50223.jpg',
        'https://m.media-amazon.com/images/I/81Og2S7GIpL._SL1500_.jpg',

    ]

    return (
        <div className='my-20' >
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold text-3xl border-b-2 w-[17rem] border-[#2f85b8]' >toy Gallery</h1>
            </div>
            <div className='md:px-[20rem] px-8 mt-10'>
                <PhotoProvider>
                    <div className="grid md:grid-cols-3 grid-cols-3 gap-10">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <img className='w-full h-full object-cover shadow-2xl p-3' src={item} alt="" />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default Gallery;