import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../store/slices/UserDetailSlice";
import { useSelector, useDispatch } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const userDetails = useSelector((state) => state.userSignUp);

  async function handlePost(e) {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = dispatch(
      signUpUser({ name, email, phone, work, password, cpassword })
    );
    // const res = await fetch("/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    // });

    res
    .then(data => {
      console.log(data.payload,"signup.jsx")
      if (data.payload === 201) {
        window.alert("Registration Successful!!");
        console.log(data, userDetails, "userDetails");
        navigate("/");
      } else {
        console.log(data, userDetails, "userDetails");
        window.alert("Registeration failed");
      }
  });
    // console.log(data);
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Sign Up</h1>
            <form method="post" className="form">
              <div className="form">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label htmlFor="email">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label htmlFor="email">Confirm Password:</label>
                <input
                  type="password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label htmlFor="work">Work:</label>
                <input
                  type="text"
                  name="work"
                  value={user.work}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <input
                  type="submit"
                  name="signup"
                  value="Register"
                  onClick={handlePost}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
