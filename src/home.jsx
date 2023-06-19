import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./home.css"
import ResponsiveAppBar from './navbar';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={[
        'a Programmer!',
        1000,
        'a Web Developer!',
        1000,
        'a Game Developer!',
        1000,
        'a Freelancer!',
        1000
      ]}
      wrapper="a"
      repeat={Infinity}
    />
  );
};

function Home() {
  return (
    <div className='type'>
      <ResponsiveAppBar />
      <div className='heading'>
        <h1>I am</h1>
        <h1 style={{
          color: 'lightblue'
        }}><ExampleComponent /></h1>
      </div>

    </div>
  );
};

export default Home;
