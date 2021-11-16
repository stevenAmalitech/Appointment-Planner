import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        id="name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email </label>
      <input
        type="email"
        id="email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="phone">Phone </label>
      <input
        type="tel"
        id="phone"
        value={props.phone}
        onChange={(e) => props.setPhone(e.target.value)}
        // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      <br />
      <input type="submit" />
    </form>
  );
};
