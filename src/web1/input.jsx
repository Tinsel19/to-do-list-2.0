import React, { useState } from "react";
import './styles.css';
import notes from "./note.js";
import Note from "./note.jsx";
// import {time} from './note.jsx';

function Input() {
    const date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var dated = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    switch (day) {
        case 1:
            day = 'Monday'
            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thursday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break
        case 7:
            day = "Sunday"
            break
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // var time = day + " " + dated + " " + monthNames[month] + '\n' + hour + ":" + minute ;
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [update, setUpdate] = useState(notes);
    const [updateTime, setTime] = useState('');
    // setTime(time);
    


    function addNote(event) {
        var time = day + " " + dated + " " + monthNames[month] + '\n' + hour + ":" + minute ;
        setTime(time);
        if ( title !== '' && note!== '' ){
            notes.push({
                
                title: title,
                text: note,
                time: time,
                styke: {textDecoration: 'hi',
                backgroundColor: 'white'}

            });
        }
        
        setUpdate(notes);
        setNote('');
        setTitle('');
        event.preventDefault();
    }

    
    function changeTitle(event) {
        setTitle(event.target.value);
    }

    function changeNote(event) {
        setNote(event.target.value);
    }

    return  <section>
    
            <form className="note-input-div" onSubmit={addNote}>
                <input value={title} className="input-div" onChange={changeTitle} type="text" placeholder="title" />
                <input value={note} className="input-div" onChange={changeNote} type="text" placeholder="note..." />
                <button type="submit" className="add-note">+</button>
            </form>

            <Note notes={notes}  setUpdate={setUpdate} update={update}/>
        </section>
    
};

export default Input;
