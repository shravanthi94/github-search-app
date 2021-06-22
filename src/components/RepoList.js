import React from 'react';
import Repo from './Repo';
import rank from '../helpers/rank';

const RepoList = ({ repos }) => {
  const ranks = rank(repos);
  let i = 0;
  return (
    <div className='container my-4'>
      <ul class='list-group list-group-flush'>
        {repos.map((repo) => (
          <Repo
            key={repo.id}
            link={repo.html_url}
            title={repo.name}
            description={repo.description}
            image={repo.owner.avatar_url}
            name={repo.full_name}
            rank={ranks[i++]}
          />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
