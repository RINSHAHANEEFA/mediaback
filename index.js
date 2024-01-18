// require method is used to import json-server
// assign in a variable jsonserver and argument in single quotes

const jsonServer=require('json-server')

// to create server json using json server

const server=jsonServer.create()

// route
const router=jsonServer.router("db.json")
// create middleware as default

const middleware=jsonServer.defaults()

const PORT=process.env.PORT || 4000

// use middleware in server

server.use(middleware)
// use route
server.use(router)
// to use port in server

server.listen(PORT,()=>{
    console.log('media player server started at PORT'+PORT);
})
