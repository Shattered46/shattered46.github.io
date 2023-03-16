import reactDom from "react-dom";
import React from "react";
import { App } from "src/App";

let groups = localStorage.getItem("group-info");
let attendees = localStorage.getItem("attendees");

function ReactApp() {

    let groupsProps;
    let attendee;
    if (groups !== null) {
        groupsProps = groups;
    }
    if (attendees !== null) {
        attendee = attendees
    }
    return (
        <React.StrictMode>
            <App groups={groupsProps} attendees={attendee} />
        </React.StrictMode>
    )
}


const root = document.getElementById("react-root");
reactDom.render(<ReactApp />, root);