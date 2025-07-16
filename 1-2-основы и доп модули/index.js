// через команду npm init прописывам в терминале данные котрые есть в packageJson
const yargs = require("yargs");
const pkg = require("./package.json");
const { getNotes, printNotes, removeNote } = require("./notes.controller");

yargs.version(pkg.version);

// установка типов пакета
yargs.command({
  command: "add",
  describe: "add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: "string",
      describe: "Note id",
      demandOption: true,
    },
  },
  async handler({ id }) {
    removeNote(id);
  },
});

// инициализируем пакет через парс
yargs.parse();
