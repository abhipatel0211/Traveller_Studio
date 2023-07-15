import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props){
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();


    function submitHandler(event){
        event.preventDefault(); 
        const enteredTitle = titleInputRef.current.value;
        const enteredimage = imageInputRef.current.value;
        const enteredaddress = addressInputRef.current.value;
        const entereddescription = descriptionInputRef.current.value;

        const meetupData = {
            title:enteredTitle,
            image:enteredimage,
            address:enteredaddress,
            description:entereddescription
        }
        props.onAddMeetup(meetupData);

    }
    return (<>
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Place Name</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Place Image URL</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description of Experience</label>
                    <textarea id="textarea" required rows='5'ref={descriptionInputRef} ></textarea>
                </div>
                <div className={classes.actions}>
                    <button >Add Place</button>
                </div>
            </form>
        </Card>
    </>);
}

export default NewMeetupForm;