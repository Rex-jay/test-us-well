const express = require('express');
const app = express();

app.use = (express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/post', (req, res) => {
    const { info } = req.body;
    res.send('Data sent', info);
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});