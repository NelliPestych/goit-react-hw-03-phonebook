import React, { Component } from "react";

const Contacts = ({ contactsAll, onRemoveTask }) => (
  <ul>
    {contactsAll.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name} {number}</p>
        <button type="button" onClick={() => onRemoveTask(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
