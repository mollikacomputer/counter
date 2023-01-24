import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const GrandChild = () => {
    const {count} = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <h2 className='text-2xl my-10' > GrandChild {count} </h2>
        </div>
    );
};

export default GrandChild;