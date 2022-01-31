// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loggedInUser } from '../../store/slices/LoggedInUserDataSlice'
// import { Form, Button } from "react-bootstrap"

// function MyAccount() {
//     const dispatch = useDispatch();
//     const state = useSelector(state=>state.loggedInUserDetails)
//     const image = state.profileimage ? state.profileimage : "";
//     const [user, setUser] = useState({
//         profileimage: "",
//         name: "",
//         email: "",
//         phone: "",
//         location: "",
//         password: "",
//         cpassword: "",
//       });

//     const checkUser = async () => {
//         dispatch(loggedInUser())
//         .then(() => {
//             setUser(state)
//         })
//     };
//     useEffect(() => {
//         checkUser();
//         // eslint-disable-next-line
//     }, []);

//     function handleChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUser({ ...user, [name]: value });
//     }

//     console.log(image);
//     return <>
//         <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//             type="text"
//             placeholder="Enter name"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Enter email"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             type="password"
//             placeholder="Enter password"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             name="cpassword"
//             value={user.cpassword}
//             onChange={handleChange}
//             type="password"
//             placeholder="Confirm password"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Phone</Form.Label>
//           <Form.Control
//             name="phone"
//             value={user.phone}
//             onChange={handleChange}
//             type="text"
//             placeholder="Enter phone"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Location</Form.Label>
//           <Form.Control
//             name="location"
//             value={user.location}
//             onChange={handleChange}
//             type="text"
//             placeholder="Enter you location"
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handlePost}>
//           Update
//         </Button>{" "}
//         <Button variant="link" onClick={handleLoginSignUpToggle}>
//           Login
//         </Button>
//       </Form>
//     </>;
// }

// export default MyAccount;
