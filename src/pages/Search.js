import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Search = () => {
  const [repos, setrepos] = useState([]);

  const onSubmit = (value) => {
    axios
      .get(`https://api.github.com/search/repositories?q=${value}`)
      .then((result) => setrepos(result.data.items));
  };
  return (
    <div>
      <Navbar onSubmit={onSubmit} />
    </div>
  );
};

export default Search;
