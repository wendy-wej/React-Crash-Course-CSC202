import React from 'react';

type Props = {
    name?: string;
    other?: string;
}

const AddStudent: React.FC<Props> = (props) => {
   // const url ="http://isms.com/students"
   // const [student, setStudent] = useState({ 
   //     department:"",
   //     matriculationNumber:"",
   //     modeOfEntry:"",
   //     programOfEntry: "",
   //     yearOfEntry:""})
    

return (
    <div>
    <form id="createUserForm" action="http://isms.com/students" method="POST">
    <label>First Name:</label>
    <p>
        <input id="firstName" name="firstName" type="text" placeholder="First Name"></input>
    </p>
    <label>Middle Name: </label>
    <p>
        <input id="middleName" name="middleName" type="text" placeholder="Middle Name">
        </input>
    </p>
    <label>Last Name: </label>
    <p>
        <input id="lastName" name="lastName" type="text" placeholder="Last Name">
        </input>
    </p>
    <label>Email: </label>
    <p>
        <input id="email" name="email" type="text" placeholder="Email">
        </input>
    </p>
    <label>Date Of Birth: Enter it as 'YYYY-MM-DD' with the hypen </label>
    <p>
        <input id="dateOfBirth" name="dateOfBirth" type="date" placeholder="YYYY-MM-DD(put the hyphen!)">
        </input>
    </p>
    <label>Nationality: </label>
    <p>
        <input id="nationality" name="nationality" type="text" placeholder="Nationality">
        </input>
    </p>
    <label>Address: </label>
    <p>
        <input id="address" name="address" type="text" placeholder="Address">
        </input>
    </p>
    <label>Department: </label>
    <p>
        <input id="department" name="department" type="text" placeholder="Department">
        </input>
    </p>

    <label>Matriculation  Number:</label>
    <p>
        <input id="matriculationNumber" name="matriculationNumber" type="text" placeholder="Matriculation Number"></input>
    </p>

    <label>Mode of Entry:</label>
    <p>
        <select id="modeOfEntry">
            <option selected value="UTME">UTME</option>
            <option value="DEntry">Direct Entry</option>
            <option value="transfer">Transfer</option>
        </select>
    </p>

    <label>Program Of Entry:</label>
    <p>
        <input id="programOfStudy" name="programOfStudy" type="text" placeholder="Program of Study"></input>
    </p>

    <label>Year of Entry: </label>
    <p>
        <input id="yearOfEntry" name="yearOfEntry" type="number" placeholder="yyyy"></input>
    </p>
    
    <p><button type="submit" id="submitCreateUserForm">Submit</button></p>
    <p><button type="reset">Clear</button></p>
    </form>
    <script>
        
    </script>
</div>
   
    )
    }
    
export default AddStudent;