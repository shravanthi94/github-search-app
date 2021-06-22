import React from 'react';
import Repo from './Repo';

const RepoList = ({ repos }) => {
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
          />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
