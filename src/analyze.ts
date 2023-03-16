import { groupFIO, FIOgroup, groupFI, FIgroup, FI, F, groupF } from "./rules";

type StudentPredicate = (student: Student, attendee: Attendee) => boolean

function analyze(groupsString: string, attendeesString: string): [Group[], Student[], Attendee[]] {
    let groups = parseGroups(groupsString);
    let students = allStudents(groups);
    let attendees = parseAttendees(attendeesString);

    const tests: StudentPredicate[] = [
        groupFIO, FIOgroup, groupFI, FIgroup, groupF, FI, F,
    ]

    attendees.forEach(attendee => {
        for (const test of tests) {
            let student = students.find(student => test(student, attendee));
            if (student) {
                student.attended = true;
                attendee.mapped = true;
                return;
            }
        }
    });

    return [groups, students, attendees];
}

export interface Student {
    group: string,
    firstname: string, //имя
    lastname: string,  //фамилия
    middlename: string,//отчество
    attended: boolean
}

export function studentString(student: Student): string {
    return `${student.lastname} ${student.firstname} ${student.middlename}`
}

export interface Group {
    name: string,
    students: Student[],
}

export type Attendee = {
    name: string,
    mapped: boolean
}

function readUntil(iterator: IterableIterator<string>, key: string, forEach?: (line: string) => void ): boolean {
    let result = iterator.next();

    while(!result.done && result.value !== key) {
        if (forEach) forEach(result.value);
        result = iterator.next();
    }

    return result.done || false;
}

function parseAttendees(input: string): Attendee[] {
    const lines = input.split("\n");
    let iterator = lines.values();
    
    let attendees: Attendee[] = [];
    
    let done = readUntil(iterator, "Сортировать по имени:");
    if (done) {
        iterator = lines.values();
    }
    readUntil(iterator, "Сортировать по фамилии:", name => attendees.push( {name, mapped: false}));
    
    return attendees;
} 

function parseGroups(groupsInput: string): Group[] {
    let lines = groupsInput.trim().split('\n');
    const iterator = lines.values();

    let groups: Group[] = [];

    while (true) {
        let group = parseGroup(iterator);
        if (!group) break;
        groups.push(group);
    }

    return groups;
}

function allStudents(groups: Group[]): Student[] {
    let students: Student[] = [];

    groups.forEach(group => students.push(...group.students) );

    return students;
}

function parseGroup(iterator: IterableIterator<string>): Group | undefined {
    let nameResult = iterator.next();
    if (nameResult.done && !nameResult.value) return;
    
    let name = nameResult.value as string;
    name = name.replace(":","");

    let students: Student[] = [];
    readUntil(iterator, "", line => students.push(parseStudent(name, line)));

    return {name, students}
}

function parseStudent(group: string, line: string): Student {
    const nameParts = line.trim().split(" ");

    return {
        group,
        lastname: nameParts[0] ? nameParts[0] : "",
        firstname: nameParts[1]  ? nameParts[1] : "",
        middlename: nameParts[2]  ? nameParts[2] : "",
        attended: false
    }
}

export default analyze;