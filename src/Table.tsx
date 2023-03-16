import { Group, Student, studentString } from "./analyze"
import { groupF } from "./rules";

export interface TableProps {
    group: Group
}

export function Table(props: TableProps) {

    if (props.group.students.length === 0) {
        return null;
    }

    let plus_text = props.group.students.map(student => student.attended ? "*" : "");
    let result_text = plus_text.join("\n");

    return ( 
    <div>
        <span>
            <p>{props.group.name}</p>
            <button onClick={() => navigator.clipboard.writeText(result_text)}>Скопировать</button>
        </span>
    

    <table className="group-table">
        { props.group.students.map(student => TableRow({student}))}
    </table>
    </div>)
}

export interface TableRowProps {
    student: Student
}

function TableRow(props: TableRowProps) {
    let { student } = props
    
    return (
        <>
        <tr className="student-row">
            <td className="student-name-cell">{studentString(student)}</td>
            <td className="attendance">{student.attended ? "*" : ""}</td>
        </tr>
        </>
    )
}