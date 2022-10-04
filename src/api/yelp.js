import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer Loz9DVbZpmc5V8BDMiUFoIS8r85oUF2OmjWaI_fUWI7AOXO1HwjIhu6OMU_a0KJ0IU820DKUOgA9VEI3Iqy948dinZXdFZ0JUQs2rMp7qHG9s05G9-IqAsVzWyMTY3Yx",
  },
});
