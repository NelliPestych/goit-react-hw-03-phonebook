import React, { Component } from "react";
import AddNomber from "./addNomber";
import createNumber from "./createNumber";
import Contacts from "./Contacts";
import Filter from "./Filter"
// import Statistics from "./Statistics";
// import Notification from "./Notification";

// state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//     name: '',
//     number: ''
//   }

export default class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    search: [],
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = () => {
    const phoneNumber = createNumber();
    this.setState((prevState) => {
      return {
        contacts: [
          { id: phoneNumber, name: this.state.name, number: this.state.number },
          ...prevState.contacts,
        ],
      };
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  inputChange1 = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  inputChange2 = (e) => {
    e.preventDefault();
    this.setState({ number: e.target.value });
  };

  inputChange3 = (e) => {
    e.preventDefault();
    const findNumber = this.state.contacts.filter((contact) => contact.name === e.target.value);
    this.setState({ search: [...findNumber] });
  };
  //   handleChange3 = (e) => {
  //     this.setState({ bad: this.state.bad + 1 });
  //   };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={this.inputChange1}
        />
        <input
          type="text"
          value={this.state.number}
          onChange={this.inputChange2}
        />
        <AddNomber nomberEditor={this.addContact} />

        <h2>Contacts</h2>
        <Filter searchAll={this.state.search} />
        <input type="text" onChange={this.inputChange3} />
        <Contacts contactsAll={contacts} onRemoveTask={this.removeContact} />
        <p></p>
      </div>
    );
  }
}
