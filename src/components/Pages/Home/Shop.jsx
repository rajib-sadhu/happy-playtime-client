import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ToyCard from '../AllToys/ToyCard';
import LoadingAnimate from '../Shared/LoadingAnimate';

const Shop = () => {

    const [isLoad, setIsLoad] = useState(true);

    const [toyData, setToyData] = useState([]);
    const [toyName, setToyName] = useState('Hero');

    useEffect(() => {
        setIsLoad(true)
        fetch(`https://happy-playtime-server.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const filterToys = data.filter(toy => toy.subCategory === toyName)
                setIsLoad(false)
                setToyData(filterToys);
            })
    }, [toyName])





    return (
        <div className='my-20'>
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold text-3xl border-b-2 w-[12rem] border-[#2f85b8]' >toys</h1>
            </div>
            <div className='md:px-[10rem] mt-10' >
                <Tabs className='space-y-10'>
                    <TabList>
                        <Tab onClick={() => setToyName('Hero')}>Hero</Tab>
                        <Tab onClick={() => setToyName('Robots')}>Robots</Tab>
                        <Tab onClick={() => setToyName('Animals')} >Animals</Tab>
                        <Tab onClick={() => setToyName('Super Vehicles')} >Super Vehicles</Tab>
                        <Tab onClick={() => setToyName('Accessories')} >Accessories</Tab>
                    </TabList>

                    {
                        isLoad ?
                            <LoadingAnimate />
                            :
                            <>
                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5' >
                                        {
                                            toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5' >
                                        {
                                            toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5' >
                                        {
                                            toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5' >
                                        {
                                            toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5' >
                                        {
                                            toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                                        }
                                    </div>
                                </TabPanel>
                            </>
                    }




                </Tabs>
            </div>
        </div>
    );
};

export default Shop;