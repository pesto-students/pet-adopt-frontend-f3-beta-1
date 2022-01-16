import axios from "axios";

function FetchLoginAuth(email, password) {
  console.log(email, password, "email, password");
  const res = axios({
    method: "post",
    url: "https://petpalbackend.herokuapp.com/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, password },
  });
  console.log(res, "res frontend");
  return res;
}

export default axios.create({
  baseURL: "https://petpalbackend.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

export { FetchLoginAuth };
