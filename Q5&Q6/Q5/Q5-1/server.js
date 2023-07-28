const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log(request.url)
  console.log(request.method)
  if (request.method === 'POST' && request.url === '/login') {
    let body = '';
    
    request.on('data', (chunk) => {
      body += chunk;
    });

    console.log(body);
    request.on('end', () => {
      const data = JSON.parse(body);
      const { email, password } = data;

      fs.appendFile('users.txt', `${email},${password}\n`, (error) => {
        if (error) {
          console.error(error);
          response.statusCode = 500;
          response.end('Error saving data');
        } else {
          response.statusCode = 200;
          response.end('Data saved successfully');
        }
      });
    });
  }
  else if(request.method === 'OPTIONS'){
    response.statusCode = 200;
  }
  else {
    response.statusCode = 404;
    response.end('Page not found');
  }
});

server.listen(8000, () => {
  console.log('Server running on port 8000');
});