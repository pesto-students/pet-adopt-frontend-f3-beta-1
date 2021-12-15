import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]:value});

    }

    async function handlePost(e){
        e.preventDefault();

        const {name, email, phone, work, password, cpassword} = user;

        const res = await fetch(
            "/signup",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, phone, work, password, cpassword})
            }            
        )

        const data = await res.json();
        console.log(data);

        if(data.message === 'User registered successfully!!!'){
            window.alert("Registration Successful!!");
            navigate("/")
        }
        else{
            window.alert("Registeration failed");
        }
    }

    return (        
        <div className="login">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Sign Up</h1>
              <form method="post" className="form">
            <div className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </div>
            <div className="form">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} />                
            </div>
            <div className="form">
                <label htmlFor="email">Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} />                
            </div>
            <div className="form">
                <label htmlFor="email">Confirm Password:</label>
                <input type="password" name="cpassword" value={user.cpassword} onChange={handleChange} />                
            </div>
            <div className="form">
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" value={user.phone} onChange={handleChange} />                
            </div>
            <div className="form">
                <label htmlFor="work">Work:</label>
                <input type="text" name="work" value={user.work} onChange={handleChange} />                
            </div>            
            <div className="form">
                <input type="submit" name="signup" value="Register" onClick={handlePost} />                
            </div>
        </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignUp
