import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
	// Add a fallback for when `props.meetups` is undefined or null
	const meetups = props.meetups || [];

	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					desription={meetup.desription}
					meetup={meetup}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
