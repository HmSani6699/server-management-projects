const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


const user = [
    { id: 1, name: 'Janina', email: 'janina@gmail.com' },
    { id: 2, name: 'Pappo', email: 'pappo@gmail.com' },
    { id: 3, name: 'Alamin', email: 'alamin@gmail.com' },
    { id: 4, name: 'Noman', email: 'noman@gmail.com' },
]


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request hetting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log('server is runing', port);
})