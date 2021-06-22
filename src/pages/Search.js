import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import RepoList from '../components/RepoList';

const Search = () => {
  const [repos, setrepos] = useState([]);

  const onSubmit = (e, value) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/search/repositories?q=${value}`)
      .then((result) => {
        var data = result.data.items;
        data.sort((a, b) => {
          return a.city.localeCompare(b.city) || b.price - a.price;
        });
        setrepos(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar onSubmit={onSubmit} />
      <RepoList repos={repos} />
    </div>
  );
};

export default Search;
