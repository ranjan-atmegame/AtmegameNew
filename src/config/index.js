const ENV = process.env.REACT_APP_ENV;

let SERVER = "";
if (ENV === "TEST") {
  SERVER = process.env.REACT_APP_TEST_API_URL;
} else {
  SERVER = process.env.REACT_APP_DEV_API_URL;
}

export const API_URL = SERVER;
