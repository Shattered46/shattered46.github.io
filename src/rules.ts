//groupFI, FIgroup, FI, F,

import { Attendee, Student } from "./analyze";

export function groupFIO(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 4) return false;

    return ( 
        parts[0] === student.group && 
        parts[1] === student.lastname && 
        parts[2] === student.firstname &&
        parts[3] === student.middlename
    )
}

export function FIOgroup(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 4) return false;

    return ( 
        parts[0] === student.lastname && 
        parts[1] === student.firstname &&
        parts[2] === student.middlename &&
        parts[3] === student.group
    )
}

export function groupFI(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 3) return false;

    return ( 
        parts[0] === student.group && 
        parts[1] === student.lastname &&
        parts[2] === student.firstname
    )
}

export function FIgroup(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 3) return false;

    return (  
        parts[0] === student.lastname &&
        parts[1] === student.firstname &&
        parts[2] === student.group
    )
}

export function FI(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 2) return false;

    return (  
        parts[0] === student.lastname &&
        parts[1] === student.firstname
    )
}

export function F(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 1) return false;

    return (  
        parts[0] === student.lastname
    )
}

export function groupF(student: Student, attendee: Attendee): boolean {
    let parts = attendee.name.split(" ");

    if (parts.length !== 2) return false;

    return (  
        parts[0] === student.group &&
        parts[1] === student.lastname
    )
}