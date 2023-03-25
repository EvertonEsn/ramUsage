const http = require('http');
const ramStats = require('./pcRamUsage');

http
  .createServer((req, res) => {
    if (req.url === '/stats') {
      res.end(JSON.stringify(ramStats, null, 2));
      return;
    }
    res.end('Rota nao existe');
  })
  .listen(3000, () => {
    console.log('Server is running');
  });
