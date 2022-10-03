import { useState } from "react"

const AddNote = ({handleAddNote }) => {
    const [noteText, setNoteText] = useState(' ')

    const handleChange = (event) =>{
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
            handleAddNote(noteText);
            setNoteText('');
    };

    return (
        <div className="notes new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value = {noteText}
                onChange = {handleChange}
                ></textarea>
            <div className = 'note-footer'>
                <small> 200 Remaining</small>
                <button className = 'save' onClick={handleSaveClick}> Save Note </button>
            </div>
        </div>
    );
};

export default AddNote;