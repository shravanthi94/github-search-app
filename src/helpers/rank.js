const calculateRank = (data) => {
  // stargazers_count
  // open_issues_count
  // forks
  let result = {
    stars: 0,
    issues: 0,
    forks: 0,
  };

  let ranks = [];
  let i = 0;

  data.forEach((item) => {
    if (item.stargazers_count > result.stars) {
      result.stars = item.stargazers_count;
    }
    if (item.open_issues_count > result.issues) {
      result.issues = item.open_issues_count;
    }
    if (item.forks > result.forks) {
      result.forks = item.forks;
    }
  });

  data.forEach((item) => {
    ranks[i++] =
      (item.stargazers_count / result.stars) * 6 +
      (item.open_issues_count / result.issues) * 2 +
      (item.forks / result.forks) * 2;
  });

  return ranks;
};

export default calculateRank;
