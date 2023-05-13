// Your solution goes here
const isStrongPassword = (password) => {
  return password.length >= 8 &&
    !password.includes("password") &&
    password.toLocaleLowerCase() !== password
    ? true
    : false;
};
