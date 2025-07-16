// Создание сервера на Node.js
const http = require("http");
const chalk = require("chalk");
const fs = require("fs/promises");
const path = require("path");

const port = 3000;
// базовый путь к файлам
const basePath = path.join(__dirname, "pages");
// Создаем сервер
const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const content = await fs.readFile(path.join(basePath, "index.html"));
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(
      200,
      (headers = {
        "Content-Type": "text/html",
      })
    );
    res.end(content);
  }
});

// запускаем сервер на порту 3000 и вызываем метод listen callback
server.listen(port, () => {
  console.log(chalk.green(`Server has been started ${port}...`));
});
