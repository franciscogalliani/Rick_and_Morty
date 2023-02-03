const http = require('http');
const PORT = 3001
const characters = require('../utils/data')


http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes('/rickandmorty/character')){
        let id = req.url.split('/').at(-1)
        let character = characters.find(char => char.id === Number(id))
        if(character)
        {
        res.writeHead(200, { 'Content-type' : 'application/json' })
        res.end(JSON.stringify(character))
        }
        else res.writeHead(404, { 'Content-type' : 'text/plain' }).end('ID Inexistente')
    }


}).listen(PORT, 'localhost')