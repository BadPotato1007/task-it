import React from 'react';
import Details from './taskpage/Details';
import List from './taskpage/List';
const tasks = () => {
    return (
        <div class="rowC" >
            <List/>
            <Details/>
        </div>
      
    );
};

export default tasks;