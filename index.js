
//initialize express aplication
const express = require('express')
const app = express()
const PORT = 3001;
//*in this page are all the routes of the proyect
//*Also set all the headers

app.use()

//req is the info the client with us
//res is the info we send to the client
app.get('/', (req,res)=>{
    res.send('Probando que funcione')
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})