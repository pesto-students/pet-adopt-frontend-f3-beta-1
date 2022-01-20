import axios from "axios";

function FetchLoginAuth(email, password) {
  const res = axios({
    method: "post",
    // url: "https://petpalbackend.herokuapp.com/signin",
    url: "/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, password },
  });
  return res;
}

function FetchLogoutAuth(userId) {
  const res = axios({
    method: "post",
    // url: "https://petpalbackend.herokuapp.com/logout",
    url: "/logout",
    headers: {
      "Content-Type": "application/json",
    },
    data: { userId },
  });
  return res;
}

export default axios.create({
  // baseURL: "https://petpalbackend.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
  useCredentials: true,
});

export { FetchLoginAuth, FetchLogoutAuth };
