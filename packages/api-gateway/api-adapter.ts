const axios = require("axios");

module.exports = () => {
  return axios.create({
    baseURL: process.env.API_BASE_URL,
  });
};
