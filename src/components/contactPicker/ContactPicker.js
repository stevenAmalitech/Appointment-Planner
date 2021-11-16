import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange} value={props.contact}>
      <option select="selected" value="" key={-1}>
        No contact is selected
      </option>
      {props.contacts.map((contact, index) => (
        <option key={index} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};