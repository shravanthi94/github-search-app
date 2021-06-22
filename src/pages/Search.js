import React, { Fragment, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import Navbar from '../components/Navbar';
import RepoList from '../components/RepoList';
import calculateRank from '../helpers/rank';

const Search = () => {
  const [repos, setrepos] = useState([]);
  const [sort, setsort] = useState('stars');

  const onSubmit = (e, value) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/search/repositories?q=${value}`)
      .then((result) => {
        let data = calculateRank(result.data.items);
        setrepos(data);
      })
      .catch((error) => console.error(error));
  };

  const sortList = (e) => {
    e.preventDefault();
    setsort(e.target.value);
    if (e.target.value === 'Forks') {
      setrepos(
        repos.sort((a, b) => {
          return b.forks - a.forks;
        }),
      );
    } else if (e.target.value === 'Stars') {
      setrepos(
        repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        }),
      );
    } else if (e.target.value === 'Best fit') {
      setrepos(
        repos.sort((a, b) => {
          return b.rank - a.rank;
        }),
      );
    }
  };

  return (
    <div>
      <Navbar onSubmit={onSubmit} />
      {repos.length !== 0 ? (
        <Fragment>
          <div class='container my-4 border-bottom'>
            <div class='row'>
              <div class='col-4'>
                <h3>{repos.length} repositories</h3>
              </div>
              <div class='col-6'></div>
              <div class='col-2'>
                <select
                  className='dropdown sort-dropdown px-4 py-1'
                  name='sort'
                  value={sort}
                  onChange={(e) => sortList(e)}
                >
                  <option className='dropdownOptionLabel' value=''>
                    Select sort
                  </option>
                  <option className='dropdownOptionLabel' value='Forks'>
                    Sort: Forks
                  </option>
                  <option className='dropdownOptionLabel' value='Stars'>
                    Sort: Stars
                  </option>
                  <option className='dropdownOptionLabel' value='Best fit'>
                    Sort: Best fit
                  </option>
                </select>
              </div>
            </div>
          </div>
          <RepoList repos={repos} />
        </Fragment>
      ) : (
        <Fragment>
          <div className='container d-flex flex-row p-5'>
            <SearchIcon fontSize='large' className='mr-2' />
            <h4>Search more than 73M repositories...</h4>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Search;
