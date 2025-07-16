// Создание сервера на Node.js
const http = require("http");
const chalk = require("chalk");

const port = 3000;
// Создаем сервер
const server = http.createServer((req, res) => {
  console.log("request method", req.method);
  console.log("request url", res.url);
  res.end("hello from server!!!!qqqq");
});

// запускаем сервер на порту 3000 и вызываем метод listen callback
server.listen(port, () => {
  console.log(chalk.green(`Server has been started ${port}...`));
});
