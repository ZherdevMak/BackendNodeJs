
let http = require ('http')

let server = http.createServer( function (req,res)  {
    //SET CORSES
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Request-Method', 'OPTION, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTION') {
        res.writeHead(200)
        res.end()
        return
    }
    console.log('some request')
    switch (req.url) {
        case '/':
            res.write('Home');
            break;
        case'/tasks':
            res.write('tasks')
            break
        case'/users':
            res.write(`[{"id": 1, "name":"Pasha"}, {"id": 2, "name":"Masha"}]`)
            break
    }
    res.end()
})
server.listen(7500)
