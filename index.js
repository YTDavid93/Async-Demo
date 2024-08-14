const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "David" });
  }, 2000);
};

const getRepositories = (username, callback) => {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
};

// Solving the issues of callbackHell
// Using Named function
const displayUsers = (user) => {
  getRepositories(user.gitHubUsername, getCommits);
};

const getCommits = (repos) => {
  getCommits(repos, displayCommits); // note that I am not calling the function I am just simply passing the refrences
};

const displayCommits = (commits) => {
  console.log(commits);
};

// Asynchronous
console.log("first");
getUser(1, displayUsers);
console.log("third");

// three ways to deal with async code
// callback
// Promises
// Async/await

// we don't have multiple thread it is single threaded
