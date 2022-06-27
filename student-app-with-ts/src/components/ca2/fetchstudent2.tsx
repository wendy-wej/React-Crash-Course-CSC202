/** Here we illustrate useEffect for fetching remote data */
import React, {useState, useEffect, useRef} from 'react';
import ShowStudent from './ShowStudent';
type Props = {
    matricno?: string;
    other?: string;
    }

const Fetchstudent2 : React.FC<Props> = (props) => {
    //const [state, setState] = useState(initialState);
    const [student, setStudent] = useState(null);
    let studentIdInput: any = useRef(); //any is used here to accommodate possible undefined.
    
    //to be called when refetch is required. User id is read from input with ref attribute name userIdInput
    const refetchData = async () =>{
        try {
        let response = await fetch(`http://isms.com/students/${studentIdInput.current.value}`);
        let data = await response.json()
        setStudent(data); 
        } catch (error) {
        setStudent(null);
        }
        };
    const fetchData = async () =>{
        try {
            let response = await fetch(`http://isms.com/students/1`);
            let data = await response.json()
            setStudent(data); 
        } catch (error) {
            setStudent(null);
        }
    };
    useEffect(() => {
            fetchData(); 
            studentIdInput.current.focus(); //focus on the referenced input field after fetching initial data
    }, []); //the second parameter [] will ensure that this useEffect runs only once.

//conditionally show user if not null
const showStudent = () => {
    if (student!==null){
        return <ShowStudent student={student} />
    }
    else {
        return 'No user to display';
        }
    }
    return (
        <div>
            <p>Hello User. Greetings! This page allows you retrieve your users.</p>
            <p>
                <input ref={studentIdInput} type="number" 
                placeholder="StudentId (1 to 6) here" />
            </p>
            <p>
                <button onClick={refetchData}>
                Fetch User
                </button>
            </p>
            <p>
                {showStudent()}
            </p>
</div>
    )
    }



export default  Fetchstudent2;