import React from 'react';
import './brand.css';
import images from '../../assets/index'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={images.google} alt='Google__img'></img>
      </div>
      <div>
        <img src={images.slack} alt='slack__img'></img>
      </div>
      <div>
        <img src={images.atlassian} alt='atlassian__img'></img>
      </div>
      <div>
        <img src={images.dropbox} alt='dropbox__img'></img>
      </div>
      <div>
        <img src={images.shopify} alt='shopify__img'></img>
      </div>
    </div>
  )
}

export default Brand