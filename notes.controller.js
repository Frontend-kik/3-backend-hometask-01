const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notesPath = path.join(__dirname, './db.json')

async function addNote(title) {
    const notes = await getNotes()
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)

await fs.writeFile(notesPath, JSON.stringify(notes))
   console.log(chalk.green('note was added'))
}

async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

async function printNotes() {
const notes = await getNotes()

    console.log(chalk.bgBlue('Here is the list of notes'))
    if(notes.length === 0 ){
       console.log(chalk.bgYellow('No notes found.'));
    }
    notes.forEach(note => {
        console.log(chalk.blue(`${note.title} ${note.id}`))
    })
}
async function removeNote(id ) {
    const notes = await getNotes()
    const filteredNotes = notes.filter(note => note.id !== id)
    if (notes.length === filtered.length) {
        console.log(`Заметка с id ${id} не найдена `)
        return notes
    }

}


module.exports = {
    addNote, printNotes
}