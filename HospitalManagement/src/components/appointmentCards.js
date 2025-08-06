import React from "react";
import dayjs from "dayjs";

import logo from "../assets/imgs/vaccine.png";

const AppointmentCards = (props) => {
	const { appointment } = props;
	console.log("inside apt card:",appointment);
	var slot = "7AM - 10AM";
	const dateofAppointment = dayjs(1755734400000).format("DD-MM-YY");

	if (appointment.slot === 1) {
		slot = "12PM - 4PM";
	}
	if (appointment.slot === 3) {
		slot = "6PM - 11 PM";
	}
	return (
		<div className={"card"}>
			<img src={logo} className={"card-img-top"} alt={"vaccine"} />
			<div className={"card-body"}>
				<h5>Date: {dateofAppointment}</h5>
				<p className={"card-text"}>Slot: {slot}</p>
			</div>
		</div>
	);
};

export default AppointmentCards;
