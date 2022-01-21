import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import {loggedInUser} from '../store/slices/LoggedInUserDataSlice'

=======
import { useDispatch } from "react-redux";
import { loggedInUser } from "../store/slices/LoggedInUserDataSlice";
import DisplayAllPets from "./pets/DisplayAllPets";
import styles from "./Home.module.css";
import PopularCategory from "./pets/PopularCategory/PopularCategory";
>>>>>>> a96b4a8baa26f001d038811f700256506bea8e2a

function PetDetails() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(true);

  const callHomePage = async () => {
    setMounted(true);
    await dispatch(loggedInUser())
      .then((data) => {
        console.log(data, "data");
        if (mounted) {
          setUser(data.payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callHomePage();
    return () => {
      setMounted(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <form method="GET">
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-5">
                <h1 className="font-weight-light">Dashboard</h1>
                <h1>Welcome {user.name}</h1>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </div>
    </form>
    {/* <DisplayAllPets /> */}
=======
      </form> */}

      <PopularCategory />
      {/* <DisplayAllPets /> */}
>>>>>>> a96b4a8baa26f001d038811f700256506bea8e2a
    </>
  );
}

export default PetDetails;
