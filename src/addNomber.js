import React, { Component } from "react";

export default function AddNomber({ nomberEditor }) {
    return (
        <div>
            <button type="submit" onClick={nomberEditor}>ДОБАВИТЬ</button>
        </div>
    )
}