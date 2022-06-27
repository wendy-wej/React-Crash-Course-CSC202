import React from 'react';
import {Student} from './type-defs'
type Props = {
    student: Student;
}
const ShowStudent: React.FC<Props> = (props) => {
    const showStudent = () => {
        const student = props.student;
try{
    if(student.id !== undefined){//make user that user object is trully available
        return(
    <table>
    <th>Property</th>
    <th>Value</th>
    <tr>
        <td>id</td>
        <td>{student.id}</td>
    </tr>
    <tr>
        <td>First Name</td>
        <td>{student.firstName}</td>
    </tr>
    <tr>
        <td>Middle Name</td>
        <td>{student.middleName}</td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>{student.lastName}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>{student.email}</td>
    </tr>
    <tr>
        <td>Date Of Birth</td>
        <td>{student.dateOfBirth}</td>
    </tr>
    <tr>
        <td>Nationality</td>
        <td>{student.nationality}</td>
    </tr>
    <tr>
        <td>Address</td>
        <td>{student.address}</td>
    </tr>
    <tr>
        <td>Department</td>
        <td>{student.department}</td>
    </tr>
    <tr>
        <td>Matriculation Number</td>
        <td>{student.matriculationNumber}</td>
    </tr>
    <tr>
        <td>Mode of entry</td>
        <td>{student.modeOfEntry}</td>
    </tr>
    <tr>
        <td>Program Of Study</td>
        <td>{student.programOfStudy}</td>
    </tr>
    <tr>
        <td>Year of Entry</td>
        <td>{student.yearOfEntry}</td>
    </tr>
    </table>
)
}else{
    return 'No user to display'; //user is null or elements are undefined
}
}catch(error){
    //!!!!!!!!!!!!!!!
    return `Problem fetching user ${error}`;
}
}
return (
    <div>
        {showStudent()} 
    </div>
    )
    }
export default ShowStudent