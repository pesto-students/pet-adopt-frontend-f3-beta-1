import axios from "axios";

function FetchLoginAuth(email, password) {
  console.log(email, password, "email, password");
  const res = axios({
    method: "post",
    url: "/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, password },
  });
  console.log(res, "res frontend");
  return res;
}

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

export { FetchLoginAuth };
