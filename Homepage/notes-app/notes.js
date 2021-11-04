const fs = require('fs')


const getNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //If no file exist, then it'll start off with an empty array and can be loaded the next time around
        return []
    }
}

const addNote = (title, body) => {
    const notes = getNotes()
    const doubleNotes = notes.filter((note) => note.title === title)

    if (doubleNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log('Note title taken')
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = getNotes()
    const note = notes.filter((note) => note.title !== title)

    saveNotes(note)
}

const listNotes = () => {
    const notes = getNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = getNotes()

    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};