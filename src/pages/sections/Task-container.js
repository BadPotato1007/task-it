import React from 'react';
import Details from './taskpage/Details';
import List from './taskpage/List';
import Bar from './taskpage/Bar';
import Bar2 from './taskpage/Bar2';
const tasks = () => {
    return (
        <div className='app'>
            .
            <div class="rowC" >
                
                <Bar2/>
                <List/>
                <Bar/>
                <Details/>
                <Bar2/>
            </div>
        </div>
      
    );
};

export default tasks;