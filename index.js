const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "John", email: "john@email.com" },
    { id: 2, name: "Don", email: "don@email.com" },
    { id: 3, name: "Jack", email: "jack@email.com" },
]

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post("/users", (req, res) => {
    console.log("POST request received");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})