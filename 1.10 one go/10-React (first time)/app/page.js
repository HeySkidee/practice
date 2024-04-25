'use client';

import React from 'react';
import '@/app/globals.css'
import axios from 'axios';

const page = () => {
  const getImages = async () => {
    try {
      const images = await axios.get('https://picsum.photos/v2/list');
      console.log(images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return ( 
    <>
      <h1 className='intro'>Welcome</h1>
      <button onClick={getImages}>get images</button>
    </>
  );
}
 
export default page;