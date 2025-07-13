// require('./module') импорт
// console.log(__filename)
// console.log(__dirname)
//
// // экспорт объекта
// module.exports = {
// }
console.log(process.argv[2])

const yargs = require("yargs");

yargs.command({
    command: 'add',
    describe: 'add new to list',
    handler() {
        console.log('Add command to list ')
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        console.log('Print all notes')
    }
})

yargs.parse()