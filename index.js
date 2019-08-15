const redis = require('redis');
const express = require('express');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0)

app.get('/', (req,res) => {
    client.get('visits', (err, visits) => {
        res.send("number of visits in: " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(3000, () =>{
    console.log("listening in container on port: 3000");
});