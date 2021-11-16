import { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicate) return alert("Name exists in database");

    props.addContact({ name, phone, email });

    setName("");
    setEmail("");
    setPhone("");

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  useEffect(() => {
    const found = props.contacts.find((contact) => contact.name === name);

    setDuplicate(found !== undefined);
  }, [name, props.contacts]);

  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <hr />
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts} />
      </section>
    </div>
  );
};
