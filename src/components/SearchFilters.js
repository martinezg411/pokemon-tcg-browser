import React from 'react';

import Filter from './Filter';
import CheckBox from './CheckBox';

const SearchFilters = () => {
  return (
    <div className='text-white'>
      <Filter name={'Pokemon Type'}>
        <ul>
          <li>Fire</li>
          <li>Water</li>
          <li>Grass</li>
          <li>Metal</li>
        </ul>
      </Filter>
      <Filter name='Card Type'>
        <div className='flex flex-col'>
          <div className=' w-72 text-center text-lg mb-2'>Pokemon</div>
          <CheckBox description='Basic' />
          <CheckBox description='Stage 1' />
          <CheckBox description='Stage 2' />
          <CheckBox description='Level Up' />
          <CheckBox description='EX' />
          <CheckBox description='MEGA' />
          <CheckBox description='SP' />
          <CheckBox description='LEGEND' />
          <CheckBox description='Restored' />
          <CheckBox description='GX' />
          <CheckBox description='BREAK' />
          <CheckBox description='TAG TEAM' />
          <CheckBox description='V' />
          <CheckBox description='VMAX' />
        </div>
        <div className='flex flex-col'>
          <div className='w-72 text-center text-lg mb-2'>Trainer</div>
          <CheckBox description='Trainer-Item' />
          <CheckBox description='Pokemon Tool' />
          <CheckBox description='Trainer-Stadium' />
          <CheckBox description='Trainer-Supporter' />
          <CheckBox description='Technical Machine' />
          <CheckBox description="Rocket's Secret Machine" />
        </div>
        <div className='flex flex-col'>
          <div className='w-72 text-center text-lg mb-2'>Energy</div>
          <CheckBox description='Basic' />
          <CheckBox description='Special' />
        </div>
      </Filter>
      <Filter name='Rarity'>
        <CheckBox description='Rare' />
        <CheckBox description='Rare Holo' />
        <CheckBox description='Rare Holo Lv.X' />
        <CheckBox description='Rare Ultra' />
        <CheckBox description='Rare Rainbow' />
        <CheckBox description='Common' />
        <CheckBox description='Rare Holo EX' />
        <CheckBox description='Rare Prime' />
        <CheckBox description='Rare Ace' />
        <CheckBox description='Promo' />
        <CheckBox description='Uncommom' />
        <CheckBox description='Rare Holo GX' />
        <CheckBox description='LEGEND' />
        <CheckBox description='Rare BREAK' />
        <CheckBox description='Amazing' />
      </Filter>
      <Filter name='Format'>
        <CheckBox description='Unlimited' />
        <CheckBox description='Expanded Format' />
        <CheckBox description='Standard Legal' />
      </Filter>
      <Filter name='Expansions'>
        {'Get expansions and put symbol and title into checkbox'}
      </Filter>
    </div>
  );
};

export default SearchFilters;
