import http from 'node:http'

// aplicações http => APIs 

const server = http.createServer((req, res) => {

  const { method, url } = req

  console.log(method, url)

  return res.end('hello world');
})

server.listen(3333)