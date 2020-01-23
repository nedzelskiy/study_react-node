import * as fs from 'fs';
import * as path from 'path';
import staticHandler, { Foo } from '../staticHandler';
import { IncomingMessage, Server, ServerResponse } from 'http';

const PORT = 8080;
const server = new Server();

server
  .on('request', (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    if (req.url === '/favicon.ico') {
      return staticHandler(req, res);
    } else if (req.url === '/builds/client.js') {
      try {
        const f = fs.readFileSync(path.join(__dirname, '../builds/client.js'), 'utf-8');
        res.setHeader('Content-Type', 'text/javascript');
        res.end(f.toString());
      } catch (e) {
        res.statusCode = 500;
        res.end(e.toString());
      }
    }
    try {
      const foo = new Foo('it works!');
      foo.test();
      const f = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.end(f.toString());
    } catch (e) {
      res.statusCode = 500;
      res.end(e.toString());
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`);
  });
