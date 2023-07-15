import { useNavigate } from "react-router-dom";
import React from "react";

import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetUps()
{
    const history = useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://test-d4f87-default-rtdb.firebaseio.com/test.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
            ).then(() => {
                history('/');
            });
        
    }

    return (
        <>
        <section>
            <h1>Add New Places</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
        </>
    );
}

export default NewMeetUps;
