const getUser = (id) => {
  return new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
};

const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
};

const getCommits = (repo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
};

console.log("Before");
// Promise based approach
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log("Error", err.message));

// async and await approach
const displayCommits = async () => {
  try {
      const user = await getUser(1);
      const repos = await getRepositories(user.gitHubUsername);
      const commits = await getCommits(repos[0]);
      console.log(commits);
  }
  catch(err) {
    console.log(err.message); 
  }
};

displayCommits()

console.log("After");
