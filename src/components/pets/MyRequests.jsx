import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../store/slices/LoggedInUserDataSlice";
import { useSelector } from "react-redux";
import DisplayPetRequestCard from "../common/DisplayPetRequestCard/DisplayPetRequestCard"

function MyRequests() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.loggedInUserDetails)

    const checkUser = async () => {
        dispatch(loggedInUser());
    };

    function DisplayRequestCards(){
        return (<>
            {state.myrequests.map(item => (
                <DisplayPetRequestCard
                    userId={state._id}
                    petId={item.petId}
                />
            ))}
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
