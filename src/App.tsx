import { useState } from "react";
import { TextInput } from "src/TextInput";
import analyze, { studentString } from "src/analyze";
import { Table } from "./Table";

import "./App.css"

export interface AppProps {
    groups?: string,
    attendees?: string,
}

export function App(props: AppProps) {

    const initAttendees = props.attendees ? props.attendees : ""
    const initGroups = props.groups ? props.groups : ""

    const [groupInput, setTextA] = useState(initGroups);
    const [attendeesInput, setTextB] = useState(initAttendees);
 
    const [groups, students, attendees] = analyze(groupInput, attendeesInput);

    let x = students.map(student => studentString(student))
    let y = attendees.map(attendee => attendee.name)

    let unmarkedAttendees = attendees
        .filter(attendee => attendee.mapped === false);

    return (
        <>
        <div className="inputs">
            <TextInput
                cols={60}
                rows={40}
                value={groupInput}
                onInput={ newText => { setTextA(newText); localStorage.setItem("group-info", newText)} }
            />
            <TextInput
                cols={60}
                rows={40}
                value={attendeesInput}
                onInput={ newText =>{ setTextB(newText); localStorage.setItem("attendees", newText)} }
            />
        </div>
        <div className="groups-container" >
            { groups.map(group => Table({group}))}
        </div>
        <div>
            Неизвестно:
        </div>
        <div>
            { unmarkedAttendees.map(u => <div className="unmarked">{u.name}</div>)}
        </div>
        </>
    )
}