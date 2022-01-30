import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../store/slices/LoggedInUserDataSlice";
import { useSelector } from "react-redux";
import DisplayPetRequestCard from "../common/DisplayPetRequestCard/DisplayPetRequestCard"

function MyRequests() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.loggedInUserDetails)
    const checkUser = async () => {
        dispatch(loggedInUser())
        .then((data) => console.log(data))
    };

    function DisplayRequestCards(){
        return (<>
            {state ? state.myrequests.map(item => (
                <DisplayPetRequestCard
                    userId={state._id}
                    petId={item.petId}
                />
            )) : null}
        </>)
    }

    useEffect(() => {
        checkUser();
        // eslint-disable-next-line
    }, []);
    return (<>
        {DisplayRequestCards()}        
    </>);
}

export default MyRequests;
