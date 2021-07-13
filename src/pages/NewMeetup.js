import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();
  const onAddMeetUpHandler = (meetupData) => {
    console.log("Mydata => ", meetupData);

    fetch(
      "https://react-academind-6d69a-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });

    //
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={onAddMeetUpHandler} />
    </section>
  );
};

export default NewMeetupPage;
