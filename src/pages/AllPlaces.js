import { useState, useEffect } from "react";

import MeetupList from "../Components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Ahmedabad",
    image: "https://i.ytimg.com/vi/P4HDRSNStf4/maxresdefault.jpg",
    address: "Ahmedabad City",
    description: "This is the world's Heritage city. ",
  },
  {
    id: "m2",
    title: "Banglore",
    image: "https://im.hunt.in/cg/City-Guide/about-bangalore.jpg",
    address: "Banglore City",
    description: "Banglore city",
  },
];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://test-d4f87-default-rtdb.firebaseio.com/test.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          // console.log(key);
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Places</h1>
      <MeetupList meetups={DUMMY_DATA} />
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
