import React, {useState, useEffect, useContext} from 'react';

//import icons 
import {RiMapPin2Line, RiArrowDownLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext } from './HouseContext';


const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button className='dropdown-btn w-full'>
        <RiMapPin2Line className='drowdown-icon-primary' />
        <div>
          <div>{country}</div>
          <div>Select YOur place</div>
          {
            isOpen  ?(
              <RiArrowUpSLine className='drowdown-icon-primary' />
            ) : (
              <RiArrowDownLine className='drowdown-icon-primary' />
            )
          }
        </div>
      </Menu.Button>
    </Menu>

  )
};

export default CountryDropdown;
