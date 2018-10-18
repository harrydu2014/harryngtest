import * as http from 'http'

const server =  http.createServer((request, response) => {
    response.end("Hello Server!");
});

server.listen(8000);