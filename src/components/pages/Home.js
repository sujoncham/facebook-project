import React from 'react';
import HomeLeft from '../Home/HomeLeft';
import HomePost from '../Home/HomePost';
import HomeRight from '../Home/HomeRight';

const Home = () => {
    return (
        <div className='flex justify-between'>
            <HomeLeft></HomeLeft>
            <HomePost></HomePost>
            <HomeRight></HomeRight>
        </div>
    );
};

export default Home;