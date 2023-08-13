import express from 'express';
import fs from 'fs';


const app = express()
const port = 3201;

app.get('/', (req, res)=> {
    getEnvironmentData()
})

app.listen(port, ()=> {
    console.log(`Server testing ya ges ya : ${port}`)
})

const getData = ()=> {
    const data = fs.readFileSync('./data/Benner.json', 'utf-8', (err, data)=> data)
    console.log(JSON.parse(data))
}