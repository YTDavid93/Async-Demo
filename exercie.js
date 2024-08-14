const getCustomer = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
};

const getTopMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
};

const sendEmail = (email, movies) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const displayCutomers = async () => {
  try {
    const customer = await getCustomer(1);
    console.log("Customer:", customer);
    if (customer.isGold) {
      const movieList = await getTopMovies();
      console.log("Top movies", movieList);
      await sendEmail(customer.email, movieList);
      console.log("Email Sent...");
    }
  } catch (err) {
    console.log("Error", err.message);
  }
};
 displayCutomers();
