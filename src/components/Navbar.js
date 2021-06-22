/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './css/Navbar.css';

const Navbar = ({ onSubmit }) => {
  const [query, setquery] = useState('');

  return (
    <nav class='navbar navbar-expand-sm navbar-background'>
      <a class='navbar-brand' className='mr-4 py-2'>
        <GitHubIcon fontSize='large' />
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <form class='form-inline my-2 my-lg-0 mr-4'>
        <input
          class='form-control mr-sm-2'
          type='search'
          placeholder='Search or jump to...'
          name='query'
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button
          class='btn btn-outline-success my-2 my-sm-0'
          onClick={(e) => onSubmit(e, query)}
        >
          Search
        </button>
      </form>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <div class='flex'>
          <a class='mr-3 font-weight-bold'>Pull requests</a>
          <a class='mr-3 font-weight-bold'>Issues</a>
          <a class='mr-3 font-weight-bold'>Marketplace</a>
          <a class='mr-3 font-weight-bold'>Explore</a>
        </div>
      </div>

      <ul class='nav justify-content-end'>
        <li className='nav-item mr-3'>
          <NotificationsIcon />
        </li>
        <li className='nav-item mr-3'>
          <AddIcon />
        </li>
        <li className='nav-item mr-3'>
          <AccountCircleIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
