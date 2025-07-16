// старый подход и будет работать через callbackи
// const fs = require('fs');
const fs = require("fs/promises"); // новый подход с промисами
const fsSync = require("fs");
const path = require("path");
const { get } = require("http");

const base = path.join(__dirname, "temp");

const getContent = () => `
    \n\r${process.argv[2] ?? ""}
`;
async function start() {
  try {
    if (fsSync.existsSync(base)) {
      await fs.appendFile(path.join(base, "logs.txt"), getContent());
      const data = await fs.readFile(path.join(base, "logs.text"), {
        encoding: "utf-8",
      });
      console.log(data);
    } else {
      await fs.mkdir(base);
      await fs.writeFile(path.join(base, "logs.txt"), process.argv[2] ?? "");
    }
  } catch (err) {
    console.log("error", err);
  }
}

start();
