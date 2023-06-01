import React, { useContext, useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { useLoaderData } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SearchToy from './SearchToy';
import useTitle from '../../Layout/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import LoadingAnimate from '../Shared/LoadingAnimate';

const AllToys = () => {

  const allToys = useLoaderData();

  const {user} = useContext(AuthContext);

  useTitle('All Toys')

  const [isLoad, setIsLoad] = useState(true);

  const [toyData, setToyData] = useState([]);
  const [toyName, setToyName] = useState('');


  useEffect(() => {


    setIsLoad(true);

    fetch('https://happy-playtime-server.vercel.app/alltoys')
      .then(res => res.json())
      .then(data => {
        if (toyName === '') {
          setIsLoad(false);
          setToyData(data)
        }
        else {
          const filterToys = data.filter(toy => toy.subCategory === toyName)
          setIsLoad(false);
          setToyData(filterToys);
        }

      })

  }, [toyName]);


  const handleSearch = (data) => {

    let value = data.toLowerCase();

    const newName = toyData.filter((toy) => {

      const searchName = toy.name.toLowerCase();
      return searchName.startsWith(value);
    });

    // console.log(newName)

    if(data){
      setToyData(newName);
    }
    else{
      setToyData(allToys)
    }
    // console.log(newName)



  }





  return (
    <div>
      <div className='grid place-content-center my-10 ' >
        <SearchToy onSearch={handleSearch} />
      </div>
      <div className='my-10' >
        <h1 className='text-center uppercase text-2xl font-semibold' >Total Toys: {toyData.length}</h1>
        <div className='px-[10rem]' >

          <Tabs className='space-y-10'>
            <TabList >
              <Tab onClick={() => setToyName('')}>All Toys</Tab>
              <Tab onClick={() => setToyName('Hero')}>Hero</Tab>
              <Tab onClick={() => setToyName('Robots')}>Robots</Tab>
              <Tab onClick={() => setToyName('Animals')} >Animals</Tab>
              <Tab onClick={() => setToyName('Super Vehicles')} >Super Vehicles</Tab>
              <Tab onClick={() => setToyName('Accessories')} >Accessories</Tab>
              {
                user?.email &&
                <Tab onClick={() => setToyName('Others')} >Others</Tab>
              }
            </TabList>

            {
              isLoad ? <LoadingAnimate />
                :
                <>
                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16 mb-5' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='grid md:grid-cols-3 gap-16' >
                      {
                        toyData.map(toy => <ToyCard key={toy._id} toy={toy} />)
                      }
                    </div>
                  </TabPanel>
                </>
            }




          </Tabs>
        </div>


        {/* <div className='grid md:grid-cols-3 grid-cols-1 md:px-[10rem] px-2 mt-10' >
          {
            allToys.map(toy => <ToyCard key={toy._id} toy={toy} />)
          }
        </div> */}
      </div>
    </div>
  );
};

export default AllToys;