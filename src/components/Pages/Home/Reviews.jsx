import React from 'react';

const Reviews = () => {

    const toyReviewers = [
        {
            id: 1,
            name: "John Doe",
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1684666423~exp=1684667023~hmac=33bd2fbdc901a02bd75e588659ecf23daf31585288847a98ff47001d0b12bb89",
            review: "The toy is fantastic! My kids love playing with it for hours.",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=900&t=st=1684666536~exp=1684667136~hmac=115a3c18306a0cb7579ffe23101159ff96ccf526ae18944bbe21dbd92a75ad45",
            review: "This toy exceeded my expectations. It's durable and provides great educational value.",
        },
        {
            id: 3,
            name: "Mikie Johnson",
            image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1684666515~exp=1684667115~hmac=9bc3a0dd2c67061bc2505ae3f16e4a0c325c7fdde9e8029ab46773be2ae2679c",
            review: "I highly recommend this toy. It's entertaining and helps develop motor skills.",
        }
    ];

    return (
        <div className='my-20' >
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold md:text-3xl text-2xl border-b-2 md:w-[12rem] w-[10rem] border-[#2f85b8]' >Reviews</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 md:px-20 px-3 md:gap-10'>
                {
                    toyReviewers.map(review=><ReviewCard key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

const ReviewCard = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={review.image} alt="Shoes" className="rounded-[50%] w-24 h-24 object-cover border-4 border-neutral" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.review}</p>
            </div>
        </div>
    )
}


export default Reviews;