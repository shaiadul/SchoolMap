import React  from 'react';
import Footer from '../Shared/Footer';
import LinesChart from './LinesChart';
import Stat from './Stat';



const Record = () => {
    
    return (
        <div className=''>
           <LinesChart/>
           <Stat/>
           <Footer/>
        </div>
    );
};

export default Record;