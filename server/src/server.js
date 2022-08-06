const express = require('express');

const cors = require('cors');



const app = express();

app.use(express.json());

app.use(cors());



let currentUser = {
    id: 1,
    name: 'John Doe',
    age: 30,
    hairColor: 'brown',
    hobbies: ['reading', 'writing', 'playing']
}

let users = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        hairColor: 'brown',
        hobbies: ['reading', 'writing', 'playing']
    },
    {
        id: 2,
        name: 'Brenda Smith',
        age: 25,
        hairColor: 'blonde',
        hobbies: ['golf', 'mathematics']
    },
    {
        id: 3,
        name: 'Jane Doe',
        age: 27,
        hairColor: 'black',
        hobbies: ['biology', 'medicine']
    }
]

const products = [
    {
        id: 1,
        name: 'Flat-Screen TV',
        price: '$1000',
        description: 'This is a flat-screen TV',
        rating: 2.25
    },
    {
        id: 2,
        name: 'Laptop',
        price: '$2000',
        description: 'This is a laptop',
        rating: 4.5
    },
    {
        id: 3,
        name: 'Smartphone',
        price: '$500',
        description: 'This is a smartphone',
        rating: 3.8
    }
]

app.get('/current-user', (req, res) => {
    console.log('fetching current user')
    res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    }
    res.json(user);
});

app.post('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    if (!user) {
        res.status(404).send('User not found');
    }
    const updatedUser = req.body;
    user = { ...user, ...updatedUser };
    users = users.map(u => u.id === id ? user : u);

    res.json(user);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send('Product not found');
    }
    res.json(product);
}
);

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
