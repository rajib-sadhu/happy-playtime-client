import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="hero min-h-[35rem] md:bg-top bg-left" style={{ backgroundImage: `url("https://i.ibb.co/NtzgWtf/Artboard-1.png")` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" grid md:grid-cols-2 px-5">
                        <div className=' md:text-[#2f85b8] text-[#636363]'>
                        <h1 className="mb-5 md:text-5xl text-2xl font-bold drop-shadow-2xl">WELCOME TO <br /> HAPPY PLAYTIME</h1>
                        <p className="mb-5 text-left">Welcome to Happy Playtime, the ultimate destination for superhero enthusiasts! Dive into a world of excitement and imagination as you explore our extensive collection of superhero toys and accessories. From action figures to costumes, we have everything you need to bring your favorite heroes to life. With Happy Playtime, every day is an opportunity to embark on thrilling adventures and save the world alongside your beloved characters. Whether you're a collector, a fan, or simply seeking endless fun, our website offers a joyful experience that caters to all ages. Get ready to unleash your superpowers and create unforgettable moments of playtime with Happy Playtime - where superheroes come to play!</p>
                        <Link to='/allToys' className="btn bg-[#2f85b8] border-0">Lets Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;