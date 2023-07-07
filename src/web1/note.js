var notes = [
    {
        key: 0,
        index: 0,
        title: 'today',
        text: "How're you doing today?",
        styke: {textDecoration: 'none',
    backgroundColor: 'white',
    textAlign: 'center'},
        time: 'Friday 7 July 12:43'
    },
    {
        key:1,
        index: 1,
        title: 'today',
        text: "I'm feeling great",
        styke: {textDecoration: 'hi',
    backgroundColor: 'white',
    textAlign: 'center'},
    time: 'Friday 7 July 12:43'
    }
];

var date = new Date();
var greeting = 'hello';

if (Number(date.getHours()) < 12) {
    greeting = "Ohayo, litte One😉";
} else if (Number(date.getHours() >= 12 && Number(date.getHours() ) <= 16) ) {
    greeting = "Kon'nichiwa, little One😅";
} else if (Number(date.getHours()) > 16) {
    greeting = "Oyasumi, little One😘";

}

export default notes;

export {greeting};