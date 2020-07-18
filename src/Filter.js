import React, { Component } from "react";

const Filter = ({ searchAll }) => (
  <ul>
    {searchAll.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name} {number}</p>
      </li>
    ))}
  </ul>
);

export default Filter;