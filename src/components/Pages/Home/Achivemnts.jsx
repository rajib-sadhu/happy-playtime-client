import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Achivemnts = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="mt-20" >
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold md:text-3xl text-2xl border-b-2 md:w-[15rem] w-[10rem] border-[#2f85b8]' >achievements</h1>
            </div>
            <div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >


                    <div className='px-40 py-10 counting-section text-center grid grid-cols-3' >
                        <div>
                            <h1 className='md:text-4xl text-xl font-semibold'>
                                {counterOn && <CountUp start={0} end={1000} duration={1.2} delay={0} />}+
                            </h1>
                            <p className='md:text-base text-xs'>Total Products Listed</p>
                        </div>
                        <div>
                            <h1 className='md:text-4xl text-xl font-semibold'>
                                {counterOn && <CountUp start={0} end={1290} duration={1.2} delay={0} />}+
                            </h1>
                            <p className='md:text-base text-xs'>Our Customers</p>
                        </div>
                        <div>
                            <h1 className='md:text-4xl text-xl font-semibold'>
                                {counterOn && <CountUp start={0} end={500} duration={1.2} delay={0} />}+
                            </h1>
                            <p className='md:text-base text-xs'>Daily Orders</p>
                        </div>

                    </div>

                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Achivemnts;