import React from "react";
import useTitle from "../../Layout/useTitle";

const About = () => {

    useTitle('About')

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                    Welcome to our Happy Playtime website! At Happy Playtime, we provide comprehensive information on a wide range of toys to help you make informed decisions. Our detailed product descriptions, including key features, age recommendations, and safety information, ensure you have all the information you need. We also offer high-quality images and videos to give you a closer look at each toy. Our organized categories and filters make it easy to find the perfect toy for your child's age group. We value your feedback and aim to provide a user-friendly experience. Thank you for choosing Toy Details as your go-to resource for toy information.
                    </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-20873.jpg?w=900&t=st=1684662287~exp=1684662887~hmac=5eae7ec6a3644dd9dfdc7090b7bb9af76c3e4e046b0bfcb3e34b369d260b4057" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                    Happy Playtime, our passion for toys and children's development drives us. We started this website with a mission to empower parents and caregivers with accurate and comprehensive toy information. With years of experience in the toy industry, we understand the importance of play in a child's growth. Our team of experts curates a diverse collection of toys and provides detailed descriptions, features, and safety information to assist you in making the best choices. We believe that by offering valuable insights and guidance, we can contribute to creating joyful and educational play experiences for children worldwide. Join us on this exciting journey of discovery and play!
                    </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
