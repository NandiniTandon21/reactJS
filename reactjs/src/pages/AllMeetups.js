import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://meet-5443f-default-rtdb.firebaseio.com/meetups.json")
			.then((response) => {
				// Return the parsed JSON
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				// Transform the data from Firebase into an array of meetups
				for (const key in data) {
					const meetup = {
						id: key, // Use the Firebase key as the ID
						...data[key], // Spread the rest of the meetup data
					};
					meetups.push(meetup);
				}

				// Update the state with the meetups array
				setIsLoading(false);
				setLoadedMeetups(meetups); // Ensure you set the array of meetups
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
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetupsPage;
