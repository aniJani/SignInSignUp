import express from 'express';

const app = express();

app.listen(3000, (err, res) => {
    console.log('server listening on port 3000');
})