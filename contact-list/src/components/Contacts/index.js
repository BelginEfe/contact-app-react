import { useState, useEffect } from "react";

import "./style.css"
import List from "./List";
import Form from "./Form";

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Aslı",
            phone_number: "158996455"
        },

        {
            fullname: "Alin",
            phone_number: "4759625855"
        },

        {
            fullname: "Lina",
            phone_number: "3652547002"
        },

        {
            fullname: "Beril",
            phone_number: "7955862500"
        },
    ]);

    useEffect(() => {
       console.log(contacts)
    }, [contacts])
    
    return (
        <div id="container">
        <h2>CONTACTS</h2>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
