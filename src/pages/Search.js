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
        setrepos(result.data.items);
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
