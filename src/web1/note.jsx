import React, { useState } from "react";
import './styles.css';
import notes from "./note.js";

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

var time = day + " " + dated + " " + monthNames[month] + '\n' + hour + ":" + minute ;

function Note(props) {

    function Notes(props) {

        var styles = {  textDecoration: 'underline',
                        backgroundColor: '#292b2b' ,
                        textAlign: 'center'
                    };
        const [selectedItem, setSelectedItem] = useState(notes[props.index].styke);
        
        
        
        const [updateTime, setTime] = useState('');
        // setTime(time);
        
        

        return <div className="note" >
                    <div className="note-case" style={selectedItem}>
                        <button
                        className="checked"
                        onClick={() => {
                            setSelectedItem(notes[props.index].styke = styles);
                        }}
                        >
                            O
                        </button>

                        <p className="note-t">{props.title}</p>
                        <p className="note-p">{props.text}</p>
                        <p className="time">{  notes[props.index].time }</p>

                        <button 
                        className="delete"
                        onClick= { () =>  {
                            try {
                                props.setUpdate(notes.splice(props.index, 1));
                            } catch (error) {
                                console.log(error)
                            }
                            
                        }}
                        >-</button>
                    </div>
            </div>
    }

    return <div className="grid">
        {notes.map( (item, index) => {
        
            return <Notes 
            key = {index}
            index={index} 
            text={item.text}
            title={item.title}
            setUpdate = {props.setUpdate}
            update= {props.update}
            item = {item}
            styke = {item.styke}
            time = {item.time}
            />
        })}
    </div>
}

export default Note;
export {time};