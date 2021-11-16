import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => props.contacts.map((contact) => contact.name);

  return (
    <form onSubmit={props.handleSubmit}>
      <label> Title </label>
      <input
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={props.contact}
          contacts={getContactNames()}
          onChange={(e) => props.setContact(e.target.value)}
          placeholder="Appointment With"
        />
      </label>
      <br />
      <label> Date </label>
      <input
        type="date"
        value={props.date}
        onChange={(e) => props.setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <br />
      <label> </label>
      <input
        type="time"
        value={props.time}
        onChange={(e) => props.setTime(e.target.value)}
      />
      <br />
      <input type="submit" value="Add Appointment"></input>
    </form>
  );
};
