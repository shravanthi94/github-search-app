const calculateRank = (data) => {
  // stargazers_count
  // open_issues_count
  // forks
  let maxStars = 0,
    maxIssues = 0,
    maxForks = 0;

  data.forEach((item) => {
    if (item.stargazers_count > maxStars) {
      maxStars = item.stargazers_count;
    }
    if (item.open_issues_count > maxIssues) {
      maxIssues = item.open_issues_count;
    }
    if (item.forks > maxForks) {
      maxForks = item.forks;
    }
  });

  // Find the weighted average using different parameters
  // Formula = (starCount / MaxStars * 6) - (issueCount / MaxIssues * 2) + (itemCount / MaxForks) * 2

  data.forEach((item) => {
    item.rank =
      (item.stargazers_count / maxStars) * 6 -
      (item.open_issues_count / maxIssues) * 2 +
      (item.forks / maxForks) * 2;
  });

  return data;
};

export default calculateRank;
