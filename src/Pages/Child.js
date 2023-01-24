import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    const {count} = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <h2 className='text-2xl my-16' > Child{count}</h2>
        </div>
    );
};

export default Child;