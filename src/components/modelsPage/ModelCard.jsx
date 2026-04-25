import React from 'react';

const ModelCard = ({model}) => {

  const {title, description, price} = model;

  return (
    <div className='p-4 border rounded-lg shadow-xl'>
      <h3 className='mb-4 text-3xl font-medium'>{title}</h3>

      <p className='mb-3 text-zinc-300'>{description}</p>
      <span className='text-xl font-bold text-green-400'>${price}</span>
    </div>
  );
};

export default ModelCard;