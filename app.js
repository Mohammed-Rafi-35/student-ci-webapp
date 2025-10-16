// app.js
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from student-ci-webapp!');
});
server.listen(port, () => console.log(`Listening on ${port}`));

// ssh -i ""C:\Users\moham\Downloads\student-ci-key.pem"" ec2-user@52.90.21.101
