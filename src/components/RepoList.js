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
            name={repo.full_name}
            stars={repo.stargazers_count}
            forks={repo.forks}
            issues={repo.open_issues_count}
            rank={repo.rank}
            language={repo.language}
          />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
